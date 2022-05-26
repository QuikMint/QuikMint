import { collection, query, getDocs } from "firebase/firestore"
import { db } from "../../utils/fire"


export default function Article( props ) {
  return (
    <main>
      <article className='m-6 mb-[100%] flex flex-col p-24 space-y-10'>
        <div className='space-y-1'>
          <h1 className=' flex items-center text-5xl'>{props.title}</h1>
          <h2 className='ml-2'>{props.author}</h2>
        </div>
        <div className=''>{props.body}</div>
      </article>
    </main>
  )
}

export async function getStaticPaths() {

	const q = query(collection(db, 'articles'))
	const articles = await getDocs(q)

	const paths = articles.map(article => {
		return {
			params: {
				article: article.title
			}
		}
	})

	return { paths, fallback: false }

}
// monke balls big in my deep ass
export async function getStaticProps({ params: { article } }) {

	return {
    props: {
      title: 'What is an NFT?',
			author: 'Theo Wallace',
      body: `In order to understand this topic, we first must understand the blockchain. For our
        purposes, let${"'"}s think of it as a very long receipt. This receipt is filled with
        transactions. Through these transactions, data can be stored, sent and modified. Now, an NFT
        is simply a collection of transactions that represent the transfer of ownership`,
    }
  }


	
}