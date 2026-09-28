import styles from './taskComp.module.css'
import type Task from '../../interfaces/task';
import { useNavigate } from 'react-router-dom';

interface taskProps {
  tarefa: Task;
}

function TaskComp({ tarefa }: taskProps) {
  const navigate = useNavigate();   

  function EstadoClass(estado: string) {
    switch (estado) {
      case 'Em andamento':
        return styles.blue;
      case 'Concluida':
        return styles.green;
      case 'Pendente':
        return styles.red;
      default:
        return '';
    }
  }

  return (
    <div className={styles.tarefaItem} key={tarefa.id}>
      <h2>{tarefa.titulo}</h2>
      <p className={styles.descricao}>{tarefa.descricao}</p>
      <p>
        Estado:{' '}
        <span className={EstadoClass(tarefa.estado)}>
          {tarefa.estado == 'Concluida' ? <>Concluída</> : <>{tarefa.estado}</>}
        </span>
      </p>

      <div className={styles.botoes}>
      <button onClick={() => navigate(`/editar/${tarefa.id}`)} className={styles.editar}>Editar</button>
        <button className={styles.excluir}>Excluir</button>
      </div>
    </div>
  )
}

export default TaskComp