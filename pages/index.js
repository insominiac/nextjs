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
        <meta property="og:image" content="https://example.com/ogp.jpg" />
        <meta property="og:image" content="https://example.com/ogp.jpg" />
        <meta property="og:image:secure_url" content="https://secure.example.com/ogp.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content="A shiny red apple with a bite taken out" />

        <meta
            property="og:image"
            content="/test2.jpeg"
           />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {postHtml}
      <a href="https://www.shtypketu.com">
       <span> https://www.shtypketu.com/wp-content/uploads/2022/12/test1.jpg</span>
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
