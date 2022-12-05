import Head from 'next/head'
import Image from 'next/image'
//import pic from 'https://www.shtypketu.com/wp-content/uploads/2022/12/test1.jpg'
import styles from '../styles/Home.module.css'

export default function Home({data}) {
  console.log(data)
  const featuredMedia = post['_embedded']['wp:featuredmedia'][0];

  const postHtml = data.map((post,i)=>{
    console.log(featuredMedia)

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

        <meta
            property="og:image"
            content="/test2.jpeg"
           />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {postHtml}
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
