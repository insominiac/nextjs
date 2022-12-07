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
        <title></title>
        <meta name="description" content="&nbsp;" />
       
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {postHtml}
       <span> This is a text</span>
     
      <a href="#">
          <img src="https://scontent.fpnq7-5.fna.fbcdn.net/v/t45.1600-4/313199230_23852376360470315_3351487654701194431_n.png?stp=cp0_dst-jpg_fr_q90_spS444&_nc_cat=107&ccb=1-7&_nc_sid=67cdda&_nc_ohc=yoZ92rZCXFsAX_ro14c&_nc_oc=AQmoPZQvuCJsxFeK5OlHWRVoO9OWmcjLUMOKDE6VpzLS2ZyweqjQYQsVHbPrtXKGPVU&_nc_ht=scontent.fpnq7-5.fna&oh=00_AfCnKpReDjrbxljAZzCaU5yCQoHCKQg6N4RqpshvmNUutg&oe=63959727" width="500" height="600"></img>
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
