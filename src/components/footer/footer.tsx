import styles from './footer.module.css'
import { useState } from 'react'
import { FaTrademark } from "react-icons/fa6";

function Footer() {  

const anoAtual = new Date().getFullYear();

  return (
    <>
      <div className={styles.area}>
        <p>LoginPessoal NBG {anoAtual} <FaTrademark /></p>
      </div>
    </>
  )
}

export default Footer