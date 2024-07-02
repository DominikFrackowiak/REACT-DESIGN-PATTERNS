import './App.css'
import withSearch from './hocs/withSearch'
import List from './components/List'

function App() {
	const ListWithSearch = withSearch(List)

	return (
		<>
			<ListWithSearch />
		</>
	)
}

export default App
