import { Link, useLocation } from "react-router-dom";

interface HeaderLinkProps {
	to: string;
	children: React.ReactNode;
}
export default function ActiveL({ to, children }: HeaderLinkProps) {
	const location = useLocation();
	const isActive = location.pathname === to;
	return (<Link to={to} className={isActive ? 'active' : ''}>{children}</Link>);
}