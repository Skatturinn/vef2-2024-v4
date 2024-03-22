import useFetch from "react-fetch-hook";
import { useParams } from "react-router-dom";
import { LaunchDetail } from "./types";

export default function DetailPage(props: {}) {
	const { id } = useParams();
	const sott = `${process.env.REACT_APP_PUBLIC_API_BASE_URL}launch/${id}`;
	const { isLoading, error, data } = useFetch(sott);
	if (isLoading) return <p className="loading">Sæki skot...</p>;
	if (error) return <p>'Error!'</p>;
	const dataParse = JSON.parse(JSON.stringify(data)) as LaunchDetail
	return <><div>test {String(dataParse)}</div></>
}