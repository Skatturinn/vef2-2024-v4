import { Link } from "react-router-dom";
import { sluggy } from "../lib/utils";

export default function SlugLink(props: {name: string, slug?: string}) {
	return <Link to={`/${props.slug || sluggy(props.name)}`}>{props.name}</Link>
} 