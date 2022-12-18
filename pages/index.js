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
      <div class="mytime-widget-button-wrapper-v2" id="mytime-widget-wrapper-1671132366481_button_wrapper" widget-data="{&quot;company_id&quot;:123621,&quot;location_id&quot;:137381,&quot;top_bar_color&quot;:&quot;#c800a1&quot;,&quot;button_text_color&quot;:&quot;#ffffff&quot;,&quot;header_type&quot;:&quot;1&quot;,&quot;selected_theme&quot;:&quot;custom&quot;,&quot;classes&quot;:false,&quot;button_html&quot;:&quot;<a id=\&quot;mytime\&quot; class=\&quot;mytime_embedded_btn\&quot;>Book My Appointment</a>&quot;,&quot;baseUrl&quot;:&quot;www.mytime.com&quot;,&quot;elementID&quot;:&quot;mytime&quot;,&quot;referrer&quot;:&quot;newbookingwidget&quot;,&quot;gtm&quot;:&quot;KGZ1bmN0aW9uKHclMkNkJTJDcyUyQ2wlMkNpKSU3QnclNUJsJTVEJTNEdyU1QmwlNUQlN0MlN0MlNUIlNUQlM0J3JTVCbCU1RC5wdXNoKCU3QidndG0uc3RhcnQnJTNBJTBBbmV3JTIwRGF0ZSgpLmdldFRpbWUoKSUyQ2V2ZW50JTNBJ2d0bS5qcyclN0QpJTNCdmFyJTIwZiUzRGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUocyklNUIwJTVEJTJDJTBBaiUzRGQuY3JlYXRlRWxlbWVudChzKSUyQ2RsJTNEbCElM0QnZGF0YUxheWVyJyUzRiclMjZsJTNEJyUyQmwlM0EnJyUzQmouYXN5bmMlM0R0cnVlJTNCai5zcmMlM0QlMEEnaHR0cHMlM0ElMkYlMkZ3d3cuZ29vZ2xldGFnbWFuYWdlci5jb20lMkZndG0uanMlM0ZpZCUzRCclMkJpJTJCZGwlM0JmLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGolMkNmKSUzQiUwQSU3RCkod2luZG93JTJDZG9jdW1lbnQlMkMnc2NyaXB0JyUyQydkYXRhTGF5ZXInJTJDJ0dUTS1LVENUR1RRJyklM0I=&quot;,&quot;fpid&quot;:&quot;Mjk1MjMyMDg3NzYyOTk2&quot;,&quot;widgetIncludes&quot;:&quot;c2VydmljZXMlMkNnaWZ0X2NhcmRzJTJDbWVtYmVyc2hpcHMlMkNteV9hY2NvdW50&quot;,&quot;defaultTo&quot;:&quot;c2VydmljZXM=&quot;,&quot;forceWalkInFlow&quot;:false,&quot;parent&quot;:false,&quot;utmParameters&quot;:null}"><a id="mytime" class="mytime_embedded_btn">Book My Appointment</a></div>
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
