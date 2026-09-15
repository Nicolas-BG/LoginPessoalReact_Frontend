import styles from './header.module.css'
import { useState } from 'react'
import UserService from '../../services/UserService.tsx';

function Header() {  
  const userService = new UserService();
  const nome = userService.user.nome;

  return (
    <>
      <div className={styles.area}>
        <h1 className={styles.titulo}>Área pessoal - {nome}</h1>
      </div>
    </>
  )
}

export default Header