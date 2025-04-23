"use client"

import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ProgressProvider} from "@bprogress/next/app";

export const MainLayout = ({children}: { children: React.ReactNode }) => {
	const queryClient = new QueryClient()
	return <ProgressProvider
		options={{showSpinner: false}}
		shallowRouting
	>
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	</ProgressProvider>
}