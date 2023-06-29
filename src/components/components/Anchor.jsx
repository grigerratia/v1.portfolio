export default function Anchor({ anchor, text }) {
	return (
		<a href={anchor} target='_blank'>
			<strong>{" " + text}</strong>
		</a>
	);
}
