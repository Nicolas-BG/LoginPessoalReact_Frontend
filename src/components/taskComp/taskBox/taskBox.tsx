import styles from './taskBox.module.css';
import { useState, useEffect } from 'react';
import TaskService from '../../../services/TaskService.tsx';
import TaskComp from '../taskComp.tsx'
import type Task from '../../../interfaces/task.tsx';

interface BoxProps {
    type: number;
    limite?: number;
}


function TaskBox({ type, limite }: BoxProps) {
    const taskService = new TaskService();
    const [tarefas, setTarefas] = useState<Task[]>([])

    useEffect(() => {

        async function carregarTarefas() {
            const taskService = new TaskService()

            const resultado = await taskService.getTarefas()

            setTarefas(resultado)
        }

        carregarTarefas()

    }, [])

    var taskState = '';
    switch (type) {
        case 1:
            taskState = 'Pendente';
            break;
        case 2:
            taskState = 'Em andamento';
            break;
        case 3:
            taskState = 'Concluida';
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
                            <TaskComp key={tarefa.id} tarefa={tarefa} />
                        ))}
                </div>
                :
                <div className={styles.tarefasBox}>
                    {tarefas
                        .filter((tarefa) => tarefa.estado === taskState)
                        .slice(0, limite)
                        .map((tarefa) => (
                            <TaskComp key={tarefa.id} tarefa={tarefa} />
                        ))}
                </div>
            }
        </>
    )
}

export default TaskBox
