//Fazendo requisições a API automaticamente via Client Side Render
//A desvantagem é a questão do SEO, por conta de não aparecer no código fonte os elementos html
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function UsersClientSideRender(){
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        const data = await response.data;
        setUsers(data);
    };

    useEffect(() => {
        fetchUsers();
    }, []);


    return(
        
        <div className={styles.container}>
            <Head>
                <title>Client Side Render</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <div>
                    <div style={{backgroundColor: "skyblue", color: "white", padding: "5px"}}>
                        <Link href="/"><a>Home</a></Link>
                    </div>
                </div>
            </header>

            <main>            
              <div>
                 <h1>Lista de Clientes</h1>
                 <hr/>
                    {
                        users.map((user) => {
                            return(
                                <p style={{textAlign: "center", backgroundColor: "black", color: "white", padding: "3px"}} key={user.name}>
                                    {user.name}
                                </p>
                            );
                        })
                    }
                </div>
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
    );
}