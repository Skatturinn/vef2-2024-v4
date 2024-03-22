export type routes = Array<
{
	name: string, 
	element: React.JSX.Element,
	slug?: string,
	path?: string // api Path
}>

export type ApiUrlRequest = {
	searchParams?: {
		[key: string]: number | string | undefined;
		search?: string,
		limit?: number,
		offset?: number
	}
	path?: string,
	pageNavigation?: Boolean,
	slug?: string
}

export type LaunchDataList = {
	count: number,
	results : Array<LaunchDetail>,
	next: string | null,
	previous: string | null
}

export type LaunchStatus = {
	name: string | undefined,
	description: string | undefined,
	abbrev: string | undefined
}

export type LaunchMission = {
	name: string | undefined,
	description: string | undefined
}

export type LaunchDetail = {
	id: string,
	name: string | undefined,
	status: LaunchStatus | undefined,
	mission: LaunchMission,
	window_start: string | undefined,
	window_end: string | undefined,
	image: string | undefined,
	last_updated: Date | string | undefined
}

export type HeaderRoutes = {
	title: string,
	image?: string,
	routes: Array<routes>
}