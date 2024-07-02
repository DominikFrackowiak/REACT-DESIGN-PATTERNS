const listOfNames = ['Andrzy', 'Michal', 'Marian', 'Dawid']

export default function List() {
	return (
		<ul>
			{listOfNames.map(name => (
				<li key={name}>{name}</li>
			))}
		</ul>
	)
}
