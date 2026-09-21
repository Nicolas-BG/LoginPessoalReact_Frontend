import styles from './header.module.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function Header() {  
  const [nome, setNome] = useState();
  const navigate = useNavigate();   

  useEffect(() => {              
    PegarDados();
  }, []);
  
  
  function PegarDados() {
    const dados = sessionStorage.getItem("dados")

    if (dados) {
      const usuario = JSON.parse(dados)

      setNome(usuario.nome);
      //console.log(usuario.nome)

    } else {
      console.log("dados não pegos")
      navigate('/home');
    }
  }

  return (
    <>
      <div className={styles.area}>
        <h1 className={styles.titulo}>Área pessoal - {nome}</h1>
      </div>
    </>
  )
}

export default Header