import { BrowserRouter as Router } from "react-router-dom";
import HeaderRouter from "./HeaderRouter";
import MainRoutePath from "./MainRoutePaths";
import { HeaderRoutes } from "./types";
import Home from "./Home";


export default function Routing(props: HeaderRoutes) {
	return <Router>
			<HeaderRouter title={props.title} image={props.image} routes={props.routes}/>
			<main>{props.routes.map(stak => <MainRoutePath routes={stak}/>)}</main>
		</Router>
	
}