import styles from './editarTarefa.module.css'
import Base_userpage from '../base_userpage/base_userpage.tsx'
import { useParams } from 'react-router-dom';
import TarefaEdit from '../../components/tarefaEdit/tarefaEdit.tsx';

function EditarTarefa () {
    const { id } = useParams(); // Pega o valor de :id da URL
    const idNumerico = Number(id); 
    

    return (
        <Base_userpage numero={6}>
            <h1>Editar Tarefa</h1>
            <TarefaEdit tarefaId={idNumerico}></TarefaEdit>
        </Base_userpage>
    )
}

export default EditarTarefa