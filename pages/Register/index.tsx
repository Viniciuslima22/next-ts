import React from 'react'
import styles from '../styles.module.css'
import Head from 'next/head'
import Link from 'next/link'

export default function Register(){
  return (
    <>
        <Head>
            <title>Tela de Registro</title>
        </Head>

    <div className={styles.container}>
      <div className={styles.content}>
       
            <aside className={styles.image}>

              <img src="/dashboard.svg" alt="logo" 
              className={styles.images}/>

            </aside>
            <main className={styles.forms}>
          <h1>Crie uma conta</h1>
          <form>  
               
                <input type="email" placeholder='E-mail' className={styles.input}/> <br />
              

                <input type="password" placeholder='Senha' className={styles.input}/> <br />
            

               <button className={styles.button}>Entrar</button> <br />

               <Link href="/" className={styles.Link}>Já possuir uma conta ?</Link> <br />

          </form>

            </main>
        

      </div>

    </div>

    </>
  )
}
