import { TextStyle } from "pixi.js";
import "./App.sass";
import { Stage, Container, Sprite, Text } from '@pixi/react';

export default function App() {

	return <>
		<Stage width={1200} height={1200} options={{ background: 'black' }}>
			<Sprite image="https://pixijs.io/pixi-react/img/bunny.png" x={0} y={0} anchor={{ x: 0.5, y: 0.5 }} />
			<Container x={500} y={230}>
				<Text text="Hi there" anchor={{ x: 0.5, y: 0.5 }}  
				style={
					new TextStyle({
						align: 'center', fill: ['white', 'red'],stroke: 'white', strokeThickness: 5, fontSize: 60, letterSpacing: 4
					})
				}
				/>
			</Container>
		</Stage>
	</>
}

