import React from 'react';
import './App.css';
import SpaceList from './components/SpaceList';
import Routing from './components/Routing';
import { routes } from './components/types';


function App() {
	const sidur:routes = 
	[{name: 'næstu', element: <SpaceList />},
	{name: 'fyrri', element: <SpaceList />},
	{name: 'öll', element: <SpaceList />}					
							] 

  return (
    <div className="App">
		<p>test</p>
		<Routing title='🚀 Geimskotaleitin vef2' routes={[sidur]}/>
    </div>
  );
}

export default App;
