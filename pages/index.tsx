import React from 'react'
import styles from './styles.module.css' 
import Head from 'next/head'
import Link from 'next/link'

export default function Login(){
  return (
    <>
        <Head>
            <title>Tela de Login</title>
        </Head>

    <div className={styles.container}>
      <div className={styles.content}>
       
            <aside className={styles.image}>

              <img src="/dashboard.svg" alt="logo" 
              className={styles.images}/>

            </aside>
            <main className={styles.forms}>
          <h1>Controle seus gastos</h1>
          <form>  
               
                <input type="email" placeholder='E-mail' className={styles.input}/> <br />
              

                <input type="password" placeholder='Senha' className={styles.input}/> <br />
            

               <button className={styles.button}>Entrar</button> <br />

               <Link href="/Register" className={styles.Link}>Criar conta</Link> <br />

          </form>

            </main>
        

      </div>

    </div>

    </>
  )
}
