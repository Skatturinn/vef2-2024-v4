// Forsíða með einhverjum titli, 

import SpaceList from "./SpaceList"

// efni og lista af geimskot.
function Preview(props: 
	{preview: 
		Array<{path: string,name: string}>
	}
	) {
		return <ul>
			<li>test2</li>
			{props.preview.map(stak => 
				<li>
					<h2>{stak.name}</h2>
					<SpaceList path={stak.path} searchParams={{limit: 3}}/>
				</li>)}
		</ul>

}


export default function Home(props: {}) {
	return <>
	<div className='rows'>
		<h2>Geimskotaleitin v2</h2>
		<Preview preview={[
			{path: 'previous', name: 'Skoða seinustu geimskot'},
			{path: 'upcoming', name: 'Skoða næstu geimskot'},
			{path: '', name: 'Skoða öll geimskot.'}

		]}/>

	</div>
	</>
};