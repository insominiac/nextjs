import Head from 'next/head'
import Image from 'next/image'
//import pic from 'https://www.shtypketu.com/wp-content/uploads/2022/12/test1.jpg'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
export default function Home({data}) {
  console.log(data)

  function picFunc() {

        <Image alt="just a t4est" src="/test2.jpeg" width={800} height={200}/>

  }
  const pic = 'https://www.shtypketu.com/wp-content/uploads/2022/12/test1.jpg'
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
        <title></title>
        <meta property='og:image' content={pic}/>
        <meta property="og:title" content="&nbsp;" />
        <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
        <link rel="icon" href="insominiac.vercel.app" />
        <meta property="og:description" content=" "/>
       
         <meta name="twitter:card" content="summary_large_image"/>
         <meta property="twitter:domain" content="insominiac.vercel.app"/>
         <meta property="twitter:url" content="https://insominiac.vercel.app/"/>
         <meta name="twitter:title" content="The Rock"/>
          <meta name="twitter:description" content=" "/>
          <meta name="twitter:image" content=""/>

      </Head>
      {postHtml}
       <span> This is a text</span>
      {picFunc}
      <Link href="https://insominiac.vercel.app/testimg.png">
      https://www.facebook.com/photo/?fbid=108456782110184
      </Link>
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
