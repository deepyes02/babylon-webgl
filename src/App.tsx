import "./App.sass";
interface ApplicationPropType {
	age: number,
	fname : string
}

function App2({ age, fname }: ApplicationPropType) {
	return <h2 className="app">I am {fname}, and I am {age <= 1 ? age + ' year' : age+' years'} old </h2>
}

export default function App() {
	return <>
		<App2 age={10} fname={'Smiles Digital Wallet Corporation'} />
	</>
}

