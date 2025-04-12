import {PropsWithChildren} from "react";

export const PageWrapper = ({children}: PropsWithChildren) => {
	return <div className="flex justify-center">
		<div className="max-w-[1200px]">{children}</div>
	</div>
	
}