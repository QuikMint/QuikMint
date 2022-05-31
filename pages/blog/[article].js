import { collection, query, getDocs, where, getDoc, limit, doc } from "firebase/firestore"
import Head from "next/head"
import { db } from "../../utils/fire"


export default function Article( props ) {
  return (
    <>
		<Head>
			<meta name='description'>{props.title}</meta>
			<title>{props.author} | Quikmint</title>
		</Head>

      <main>
        <article className='m-6 mb-[100%] flex flex-col md:p-24 space-y-10'>
          <div className='space-y-1'>
            <h1 className=' flex items-center text-5xl'>{props.title}</h1>
            <h2 className='ml-2'>{props.author}</h2>
            <h4 className='ml-2 text-xs'>{props.published}</h4>
          </div>
          <div className='text-[20px]' dangerouslySetInnerHTML={{ __html: props.body }}></div>
        </article>
      </main>
    </>
  )
}

export async function getStaticPaths() {

	const q = query(collection(db, 'articles'))
	const querySnap = await getDocs(q)
	let articles = []

	querySnap.forEach(a => {
		articles.push(a.data())
	})

	const paths = articles.map(article => ({
    params: {
      article: article.tagname || article.id,
    },
  }))

	return { paths, fallback: false }

}
// monke balls big in my deep ass
export async function getStaticProps({ params: { article } }) {

	const q = query(collection(db, 'articles'), where('tagname', '==', article))
	const querySnap = await getDocs(q)
	let articleDocsOfName = []
	querySnap.forEach(doc => {
    articleDocsOfName.push(doc.data())
  })
	const articleProp = articleDocsOfName[0]

	const secs = articleProp.published.seconds || article.timestamp.seconds
  const d = new Date(secs * 1000).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

	return {
    props: {
				title: articleProp.title,
				author: articleProp.author,
				body: articleProp.body,
				published: d
    }
  }
}