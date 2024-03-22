import React from 'react';
import './App.css';
import SpaceList from './components/SpaceList';
import Routing from './components/Routing';
import { routes } from './components/types';
import Search from './components/Search';
import { sluggy } from './lib/utils';
import ListPage from './components/ListPage';



export type ApiUrlRequest = {
	searchParams?: {
		[key: string]: number | string | undefined;
		search?: string,
		limit?: number,
		offset?: number
	}
	path?: string
}
function App() {
	const sidur_0= [{name:'seinustu',path:'previous'},
	{name: 'næstu', path: 'upcoming'}, {name:'öll',path:''}];
	const sidur_1:routes = sidur_0.map(stak => {
		const slug = sluggy(stak.name)
		return {
			name: stak.name, 
			element: <ListPage slug={slug} name={stak.path}/>,
			path: stak.path,
			slug: slug}
			})

  return (
    <div className="App">
		<Routing title='🚀 Geimskotaleitin vef2' routes={[sidur_1]}/>
    </div>
  );
}

export default App;
