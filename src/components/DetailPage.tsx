import useFetch from "react-fetch-hook";
import { useParams } from "react-router-dom";
import { LaunchDetail } from "./types";

export default function DetailPage(props: {}) {
	const { id } = useParams();
	const sott = `${process.env.REACT_APP_PUBLIC_API_BASE_URL}launch/${id}`;
	const { isLoading, error, data } = useFetch(sott);
	if (isLoading) return <p className="loading">Sæki skot...</p>;
	if (error) return <p>'Error!'</p>;
	const result = JSON.parse(JSON.stringify(data)) as LaunchDetail
	return <><div>
		<h2 className="nafn">{result.name}</h2>
		<ol className="span12 grid-container">
			<li className="span12">
				{result.window_start ? <p className="span12">Gluggi opnast: {result.window_start}</p> : ''}
				{result.window_end ? <p className="span12">Gluggi lokast: {result.window_end}</p> : ''}
			</li>
			<li className="span12">
				{result.status?.name ? <h3>Staða: {result.status.name}</h3> : ''}
				{result.status?.description ? <p>{result.status.description}</p> : ''}
			</li>
			<li className="span12">
				{result.image ? <figure><img src={result.image} alt='Mynd af heimskoti' /></figure> : ''}
			</li>
			{result.mission ? <li>
				<h3>Geimferð: {result.mission?.name}</h3><p>{result.mission.description}</p>
			</li> : ''}
		</ol>
	</div>
		<a href="/" className="back">Til baka</a></>
}