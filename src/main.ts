import { Scene, Camera, Mesh, Engine } from "@babylonjs/core";
import "./App.sass"

const root : HTMLDivElement = document.querySelector('#root') as HTMLDivElement;

const canvas = document.createElement('canvas');
canvas.height = 600
canvas.width = 700
canvas.style.border = "1px solid grey"
root.append(canvas)
const engine : Engine = new Engine(canvas, true)


const createScene = () => {
	const scene = new Scene(engine)



	return scene;
}





createScene();







