"use client"

import {AppProgressBar as ProgressBar} from "next-nprogress-bar";

export const MainLayout = ({children}: { children: React.ReactNode }) => {
	return <>
		<ProgressBar
			height="3px"
			color="#00631f"
			options={{ showSpinner: false }}
			shallowRouting
		/>
		{children}
	
	</>
}