import { sluggy } from "../lib/utils";
import ActiveL from "./ActiveL";

export default function SlugLink(props: { name: string, slug?: string }) {
	return <ActiveL to={`/${props.slug || sluggy(props.name)}`}>{props.name}</ActiveL>
} 