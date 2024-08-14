import { Scene, HemisphericLight, Engine, Vector3, MeshBuilder, StandardMaterial, Texture, SceneLoader, ArcRotateCamera, Tools } from "@babylonjs/core";
import "./App.sass"
import "@babylonjs/loaders";
import grass from "./grass.jpg"

const root : HTMLDivElement = document.querySelector('#root') as HTMLDivElement;

const canvas = document.createElement('canvas');
canvas.height = 600
canvas.width = 700
canvas.style.border = "1px solid grey"
root.append(canvas)
const engine : Engine = new Engine(canvas, true)


const createScene = ( ) => {
	const scene = new Scene(engine)


	

const followCam = new ArcRotateCamera("FollowCam", Tools.ToRadians(90), Tools.ToRadians(65), 10, Vector3.Zero(), scene)
followCam.radius = 30
followCam.setTarget(Vector3.Zero())

followCam.attachControl(true);

// console.log(Assets)
const light = new HemisphericLight("lights", new Vector3(10, -10, 0), scene)
light.intensity = 10





const ground = MeshBuilder.CreateGround("ground", {width: 20, height: 20, subdivisions: 2 }, scene)
	const material = new StandardMaterial("material", scene);
	material.diffuseTexture = new Texture(grass, scene)
	ground.material = material;
	ground.position.y = 0

	// followCam.lockedTarget = ground

	//https://assets.babylonjs.com/meshes/Yeti/MayaExport/glTF/Yeti.gltf
	// https://assets.babylonjs.com/meshes/Yeti/MayaExport/glTF/ Yeti.gltf
	SceneLoader.Append("https://assets.babylonjs.com/meshes/Yeti/MayaExport/glTF/", "Yeti.gltf", scene, (meshes) => {
    // Do something with the loaded meshes
    console.log("Model loaded successfully!", meshes);
}, null, (scene, message) => {
	scene;
    console.error("Error loading model:", message);
});

	return scene;
}
const scene = createScene();


engine.runRenderLoop(()=>{scene.render()})


// createScene();


