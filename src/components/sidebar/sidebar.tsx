import styles from './sidebar.module.css'
import { useState } from 'react'
import UserService from '../../services/UserService.tsx';
import { CiLogout } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  numero: number;
}

function Sidebar({ numero = 0 }: SidebarProps) {
    const navigate = useNavigate();
    
    const userService = new UserService();
    const usuario = userService.user;

    const escolhida = `${styles.opcao} ${styles.opcao_nao_escolhida}`;
    const naoEscolhida = `${styles.opcao} ${styles.opcao_escolhida}`;



    return (

        <div className={styles.area}>
            <p className={styles.nomeCompleto}>{usuario.nome} {usuario.sobrenome}</p>
            <img className={styles.foto} src={usuario.foto} alt="Foto do usuário" />
            <div onClick={() => navigate('/home')} className={numero != 1 ? escolhida : naoEscolhida}>Home</div>
            <div onClick={() => navigate('/info')} className={numero != 2 ? escolhida : naoEscolhida}>Informações</div>
            <div onClick={() => navigate('/tarefas')} className={numero != 3 ? escolhida : naoEscolhida}>Tarefas</div>
            <div onClick={() => navigate('/config')} className={numero != 4 ? escolhida : naoEscolhida}>Configurações</div>
            <div className={styles.logout}><CiLogout />  Logout </div>
        </div>


    )

}

export default Sidebar