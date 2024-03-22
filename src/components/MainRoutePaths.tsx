import { Route, Routes } from "react-router-dom";
import { routes } from "./types";
import { sluggy } from "../lib/utils";
import Home from "./Home";
import DetailPage from "./DetailPage";

export default function MainRoutePath(props: { routes: routes }) {
	return <Routes>
		<Route path="/" element={<Home routes={props.routes} key={'home'} />} />
		{props.routes.map(((stak, nr) =>
			stak.name && stak.element &&
			<Route path={`/${stak.slug || sluggy(stak.name)}`} element={stak.element} key={'list_' + nr + stak.name[0]} />))}
		<Route path="/skot/:id" element={<DetailPage />} key={'detail'} />
	</Routes>
}