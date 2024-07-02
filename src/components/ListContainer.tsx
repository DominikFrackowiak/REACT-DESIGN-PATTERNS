const listOfNames: string[] = ['Andrzy', 'Michal', 'Marian', 'Dawid']

import List from './List'

export default function ListContainer() {
	return <List listOfNames={listOfNames} />
}
