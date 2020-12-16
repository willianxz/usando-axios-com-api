import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Axios Example Tutorial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
         <div>
           <div style={{backgroundColor: "skyblue", color: "white", padding: "5px", margin: "5px", display: "inline"}}>
             <Link href="/usersClientSideRender"><a>Users Client Side Render</a></Link>
           </div>
           <div style={{backgroundColor: "skyblue", color: "white", padding: "5px", margin: "5px", display: "inline"}}>
             <Link href="/usersServerSideRender"><a>Users Server Side Render</a></Link>
           </div>
        </div>
      </header>


      <main>
        <h1 style={{textAlign: "center"}}>Welcome To The Axios Example Tutorial</h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
