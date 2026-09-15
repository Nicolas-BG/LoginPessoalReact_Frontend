import styles from './taskBox.module.css';
import { useState } from 'react';
import TaskService from '../../../services/TaskService.tsx';
import TaskComp from '../taskComp.tsx'

interface BoxProps {
  type: number;
  limite?: number;
}


function TaskBox( { type, limite }: BoxProps) {
  const taskService = new TaskService();
  const [tarefas, setTarefas] = useState(taskService.task);  

    var taskState = '';
    switch (type) {
      case 1: 
        taskState = 'Pendente';
        break;
      case 2: 
        taskState = 'Em andamento';
        break;
      case 3: 
        taskState = 'Concluída';
        break;
    default:
        taskState = '';
        break;
    }

    return (
        <>
            {taskState === '' ?
            <div className={styles.tarefasBox}>
                {tarefas
                .slice(0, limite)
                .map((tarefa) => (
                    <TaskComp tarefa={tarefa} />
                ))}
            </div>
            :
            <div className={styles.tarefasBox}>
                {tarefas
                    .filter((tarefa) => tarefa.estado === taskState)
                    .slice(0, limite)
                    .map((tarefa) => (
                        <TaskComp tarefa={tarefa} />
                    ))}
            </div>
            }
        </>
    )
}

export default TaskBox
