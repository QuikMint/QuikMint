import { db } from '../../utils/fire'
import { collection, getDocs, limit, query, where } from 'firebase/firestore'
import Image from 'next/image'
import Link from 'next/link'

export default function Blog(props) {
  return (
    <main className='flex flex-col items-center justify-start'>
      {props.blogs.map((blog, i) => (
        <ArtCard blog={blog} key={i}></ArtCard>
      ))}
    </main>
  )
}

export async function getStaticProps() {
  const q = query(collection(db, 'articles'), where('author', '==', 'Theo Wallace'), limit(15))
  const querySnap = await getDocs(q)
  let blogs = []
  querySnap.forEach(doc => {
    const blog = doc.data()
    const secs = blog.published.seconds
    const d = new Date(secs * 1000).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
    blogs.push({
      title: blog.title,
      author: blog.author,
      body: blog.body,
      published: d,
      image: blog.image || '/favicon.ico',
    })
  })
  return {
    props: {
      blogs,
    },
  }
}

function ArtCard({ blog }) {
  return (
    <div className='w-[650px] flex flex-row items-center justify-around border-t-[1px] border-[#cccccc] py-2'>
      <div id='left' className='w-[450px]'>
        <div id='1' className='flex flex-row space-x-1 items-center'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'>
            <path d='M12 2.5a5.25 5.25 0 00-2.519 9.857 9.005 9.005 0 00-6.477 8.37.75.75 0 00.727.773H20.27a.75.75 0 00.727-.772 9.005 9.005 0 00-6.477-8.37A5.25 5.25 0 0012 2.5z'></path>
          </svg>
          <span id='author' className=''>
            {blog.author}
          </span>{' '}
          - <span className='text-gray-300'>{blog.published}</span>
        </div>
        <div id='title' className='font-semibold font-serif text-[20px]'>
          {blog.title}
        </div>
        <div id='body' className=''>
          <p className='text-[14px] overflow-clip h-[65px] font-serif text-slate-400'>{blog.body}</p>
          <p className='text-[14px] font-serif text-gray-300'>
            ...{' '}
            <Link href={`/blog/${blog.title}`}>
              <a className='hover:text-gray-800 transition-colors'>Read More</a>
            </Link>
          </p>
        </div>
        <i id='share'></i>
      </div>
      <Image src={blog.image} width='150' height='150' alt={blog.image}></Image>
    </div>
  )
}
