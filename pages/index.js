import Head from 'next/head'
import Image from 'next/image'
//import pic from 'https://www.shtypketu.com/wp-content/uploads/2022/12/test1.jpg'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
export default function Home({data}) {
  console.log(data)

  const postHtml = data.map((post,i)=>{

    return(

       <p key={post.id}>{post.title.rendered}</p>
       
    )
  })
  const myLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`
  }
  return (
    <div className={styles.container}>
      <Head>
        
        
       
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {postHtml}
       <span> This is a text</span>
     
      <a href="#">
          <img src="/" width="500" height="600"></img>
      </a>
    </div>
  )
}

export async function getServerSideProps(context){
  const res = await fetch(`https://www.shtypketu.com/wp-json/wp/v2/posts/`)
  const data = await res.json()
  if(!data) {
    return{
      notFound: true,
    }
  }
  return{
    props:{
      data
    },
  }
}
