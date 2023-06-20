export default function Anchor({ anchor, text }) {
	return (
		<a href={anchor}>
			<strong>{" " + text}</strong>
		</a>
	);
}
