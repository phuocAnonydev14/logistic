"use client"

import {AppProgressBar as ProgressBar} from "next-nprogress-bar";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
export const MainLayout = ({children}: { children: React.ReactNode }) => {
	const queryClient = new QueryClient()
	return <>
		<QueryClientProvider client={queryClient}>
		<ProgressBar
			height="3px"
			color="#00631f"
			options={{ showSpinner: false }}
			shallowRouting
		/>
		{children}
		</QueryClientProvider>
	</>
}