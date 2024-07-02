interface Props {
	listOfNames: string[]
}

export default function List({ listOfNames }: Props) {
	return (
		<ul>
			{listOfNames.map(name => (
				<li key={name}>{name}</li>
			))}
		</ul>
	)
}
