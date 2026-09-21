import styles from './sidebar.module.css'
import { useState, useEffect } from 'react'
import type User from '../../interfaces/user'
import { CiLogout } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

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

    const escolhida = `${styles.opcao} ${styles.opcao_nao_escolhida}`;
    const naoEscolhida = `${styles.opcao} ${styles.opcao_escolhida}`;



    return (


        <div className={styles.area}>
            {usuario && (<>
                <p className={styles.nomeCompleto}>{usuario.nome} {usuario.sobrenome}</p>                
                <img className={styles.foto} src={`${rota_imagem}${usuario.foto}`} alt="Foto do usuário" />                        
            </>)}
            <div onClick={() => navigate('/home')} className={numero != 1 ? escolhida : naoEscolhida}>Home</div>
            <div onClick={() => navigate('/info')} className={numero != 2 ? escolhida : naoEscolhida}>Informações</div>
            <div onClick={() => navigate('/tarefas')} className={numero != 3 ? escolhida : naoEscolhida}>Tarefas</div>
            <div onClick={() => navigate('/config')} className={numero != 4 ? escolhida : naoEscolhida}>Configurações</div>
            <div className={styles.logout}><CiLogout />  Logout </div>

        </div>



    )

}

export default Sidebar