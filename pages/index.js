import Head from 'next/head'
import Image from 'next/image'
//import pic from 'https://www.shtypketu.com/wp-content/uploads/2022/12/test1.jpg'
import styles from '../styles/Home.module.css'

export default function Home({data}) {
  console.log(data)

  const postHtml = data.map((post,i)=>{

    return(

       <p key={post.id}>{post.title.rendered}</p>
       
    )
  })
  return (
    <div className={styles.container}>
      <Head>
        <title class="tite">This is a test m</title>
        <meta name="description" content=" " />
        <meta property="og:title"  content="" />
        <meta property="og:image" content="/test2.jpeg" />
        <meta property="og:url" content="" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />
        <meta property="og:image:alt" content="A shiny red apple with a bite taken out" />

       
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {postHtml}
      <link  href="https://www.shtypketu.com/wp-content/uploads/2022/12/test1.jpg">
       <span> This is a text</span>
      </link>
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
