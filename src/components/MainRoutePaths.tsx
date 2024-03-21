import { Route, Routes } from "react-router-dom";
import { routes } from "./types";
import { sluggy } from "../lib/utils";
import Home from "./Home";

export default function MainRoutePath(props: {routes: routes}) {
	return <Routes>
		<Route path="/" element={<Home/>}/>
			{props.routes.map((stak =>
				stak.name && stak.element &&
				<Route path={`/${stak.slug || sluggy(stak.name)}`} element={stak.element} />))}
		</Routes>
}