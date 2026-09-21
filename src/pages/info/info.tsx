import styles from './info.module.css'
import Base_userpage from '../base_userpage/base_userpage.tsx'
import { useState, useEffect } from 'react'
import type User from '../../interfaces/user'

function Info() {
  const rota_imagem = 'http://localhost:3333/uploads/'
  const [usuario, setUsuario] = useState<User | null>(null);
      useEffect(() => {
          PegarDados();
      }, []);
  
  
      function PegarDados() {
          const dados = sessionStorage.getItem("dados")
  
          if (dados) {
              const usuario = JSON.parse(dados)
              setUsuario(usuario);              
          } 
      }

  return (
    <Base_userpage numero={2}>

      
      <div className={styles.area}>
        <h1 className={styles.titulo}>Informações do Usuário</h1>
        <div className={styles.infoBox}>
          {usuario && (<>
            <p>Nome Completo: {usuario.nome} {usuario.sobrenome}</p>
            <p>Foto:</p>
            <img src={`${rota_imagem}${usuario.foto}`} alt="Foto do usuário" />
            <p>Email: {usuario.email}</p>
            <p>Cargo: {usuario.cargo}</p>
          </>)}
          <button>Editar</button>
        </div>
      </div>
      
    </Base_userpage>
  )
}

export default Info
