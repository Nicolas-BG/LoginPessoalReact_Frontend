import styles from './info.module.css'
import Base_userpage from '../base_userpage/base_userpage.tsx'
import UserService from '../../services/UserService.tsx';

function Info() {
  const userService = new UserService();
  const usuario = userService.user;
  
  return (
    <Base_userpage numero={2}>

      <div className={styles.area}>
        <h1 className={styles.titulo}>Informações do Usuário</h1>
        <div className={styles.infoBox}>
          <p>Nome Completo: {usuario.nome} {usuario.sobrenome}</p>
          <p>Foto:</p>
          <img src={usuario.foto} alt="Foto do usuário" />
          <p>Email: {usuario.email}</p>
          <p>Cargo: {usuario.cargo}</p>
          <button>Editar</button>          
        </div>
      </div>
      
    </Base_userpage>
  )
}

export default Info
