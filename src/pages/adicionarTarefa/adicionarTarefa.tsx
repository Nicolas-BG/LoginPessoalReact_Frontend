import styles from './adicionarTarefa.module.css'
import Base_userpage from '../base_userpage/base_userpage.tsx'
import TarefaAdd from '../../components/tarefaAdd/tarefaAdd.tsx'

function AdicionarTarefa () {

    

    return (
        <Base_userpage numero={5}>
            <div className={styles.area}>
                <h1>Adicionar Tarefa</h1>
                <TarefaAdd></TarefaAdd>
            </div>
            
        </Base_userpage>
    )
}

export default AdicionarTarefa