import Head from "next/head"

export default function About(props) {

	return (
		<>
      <Head>
        <title>About Us | Quikmint</title>
      </Head>
		<main className='mb-[1000px]'>
			About us
		</main>
		</>
	)
}

export async function getStaticProps() {
	return {
		props: {
			prop: 'hello'
		}
	}
}