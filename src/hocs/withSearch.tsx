import { ComponentType } from "react"


export default function withSearch(Component : ComponentType) {
	return function WrappedComponent() {
		return (
			<>
				<Component />
				<form>
					<input type='text' placeholder='Search...' />
				</form>
			</>
		)
	}
}
