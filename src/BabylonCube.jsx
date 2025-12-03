import { useEffect, useRef } from "react";
import TypewriterRules from "./TypeWriterRules";
import { Engine, Scene } from "@babylonjs/core";
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";
import { Texture } from "@babylonjs/core/Materials/Textures/texture";
import { Vector3, Vector4 } from "@babylonjs/core/Maths/math.vector";
import atlasUrl from './assets/textures/atlas.png';

export default function BabylonCube() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const engine = new Engine(canvas, true);
    const scene = new Scene(engine);

    const camera = new ArcRotateCamera(
      "camera",
      Math.PI / 3,
      Math.PI / 4,
      5,
      Vector3.Zero(),
      scene
    );
    camera.attachControl(canvas, true);

    const light = new HemisphericLight("light", new Vector3(1, 1, 0), scene);
    light.intensity = 2.5;  // <-- lumière plus forte (par défaut = 1)

    const mat = new StandardMaterial("mat", scene);
    // mat.diffuseTexture = new Texture(import.meta.env.BASE_URL + "/textures/atlas.png", scene);
    mat.diffuseTexture = new Texture(atlasUrl, scene);

    const faceUV = [];
    for (let i = 0; i < 6; i++) {
      faceUV.push(new Vector4(
        i / 6, 0,
        (i + 1) / 6, 1
      ));
    }

    const box = MeshBuilder.CreateBox("box", { size: 2, faceUV }, scene);
    box.material = mat;

    engine.runRenderLoop(() => {
      box.rotation.y += 0.03;  // <-- rotation plus rapide (précédemment 0.01)
      box.rotation.x += 0.015;
      scene.render();
    });

    const handleResize = () => engine.resize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      engine.dispose();
    };
  }, []);

  const rulesText = ` Bienvenue dans...
le monde sombre du cube...
Devinez le mot mystérieux. 
Le Cube contient des indices 
qui peuvent vous aidez à déterminer 
le mot à deviner.`
  return (
    <>
      <div className="cube-wrapper">
        <div className="canvas-container">
          <div style={{ width: 260, height: 260 }}>
            <canvas ref={canvasRef} width={260} height={260} />
          </div>
        </div>
        <TypewriterRules text={rulesText} speed={100} />
      </div>
    </>
  );
}
