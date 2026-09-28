import styles from './sidebar.module.css'
import { useState, useEffect } from 'react'
import type User from '../../interfaces/user'
import { CiLogout } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import UserService from '../../services/UserService';

interface SidebarProps {
    numero: number;
}

function Sidebar({ numero = 0 }: SidebarProps) {
    const navigate = useNavigate();   
    const [usuario, setUsuario] = useState<User | null>(null);
    const rota_imagem = 'http://localhost:3333/uploads/'
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

    async function Logout(){
        const Deslogar = confirm("Deseja realmente deslogar?")
        if (Deslogar) {
            const userService = new UserService();
            if (await userService.Logout) {
                navigate('/login')
            }
        }
        
        
    }

    const NaoEscolhida = `${styles.opcao} ${styles.opcao_nao_escolhida}`;
    const Escolhida = `${styles.opcao} ${styles.opcao_escolhida}`;



    return (


        <div className={styles.area}>
            {usuario && (<>
                <p className={styles.nomeCompleto}>{usuario.nome} {usuario.sobrenome}</p>                
                <img className={styles.foto} src={`${rota_imagem}${usuario.foto}`} alt="Foto do usuário" />                        
            </>)}
            <div onClick={() => navigate('/home')} className={numero != 1 ? NaoEscolhida : Escolhida}>Home</div>
            <div onClick={() => navigate('/info')} className={numero != 2 ? NaoEscolhida : Escolhida}>Informações</div>
            <div onClick={() => navigate('/tarefas')} className={numero != 3 ? NaoEscolhida : Escolhida}>Tarefas</div>
            <div onClick={() => navigate('/config')} className={numero != 4 ? NaoEscolhida : Escolhida}>Configurações</div>
            {numero == 5 && (<div onClick={() => navigate('/config')} className={Escolhida}>Adicionar</div>)}      
            {numero == 6 && (<div onClick={() => navigate('/config')} className={Escolhida}>Editar</div>)}                
            <button onClick={() => Logout()} className={styles.logout}><CiLogout />  Logout </button>

        </div>



    )

}

export default Sidebar