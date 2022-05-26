export default function About(props) {

	return (
		<div className='mb-[1000px]'>
			About us
		</div>
	)
}

export async function getStaticProps() {
	return {
		props: {
			prop: 'hello'
		}
	}
}