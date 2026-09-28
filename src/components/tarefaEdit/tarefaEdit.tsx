import styles from './tarefaEdit.module.css'
import TaskService from '../../services/TaskService';
import { useNavigate } from 'react-router-dom';
import type Task from '../../interfaces/task.tsx';
import { useState, useEffect } from 'react';


interface TarefaEditProps {
    tarefaId: number;
}

function TarefaEdit({ tarefaId }: TarefaEditProps) {
    const navigate = useNavigate();

    const taskService = new TaskService();
    const [tarefa, setTarefa] = useState<Task>()

    useEffect(() => {

        async function carregarTarefas() {
            const taskService = new TaskService()

            const resultado = await taskService.getTarefaId(tarefaId)

            setTarefa(resultado)
        }

        carregarTarefas()

    }, [])


    async function Editar(e: any) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const taskService = new TaskService();

        if (await taskService.EditarTarefa(formData, tarefaId)) {
            console.log("navegando em...");
            navigate('/tarefas');
        } else {
            alert("Ouve um erro na hora de editar a tarefa")
        };

    }


    return (
        <div className={styles.caixa}>
            <form onSubmit={Editar}>
                {tarefa && <>
                    <div className={styles.formGroup}>
                        <label>Titulo:</label>
                        <input defaultValue={tarefa.titulo} name="titulo" type="text" className={styles.input} required></input>
                    </div>
                    <div className={styles.formGroup}>
                        <label>Descrição:</label>
                        <textarea defaultValue={tarefa.descricao} name="descricao" className={styles.text} required></textarea>
                    </div>

                    <div className={styles.formGroup}>
                        <label>Estado:</label>

                        <label className={styles.option}>
                            <input type="radio" name="estado" value="Pendente" defaultChecked={tarefa.estado === 'Pendente'} required />
                            Pendente
                        </label>

                        <label className={styles.option}>
                            <input type="radio" name="estado" value="Em andamento" defaultChecked={tarefa.estado === 'Em andamento'} required />
                            Em andamento
                        </label>

                        <label className={styles.option}>
                            <input type="radio" name="estado" value="Concluida" defaultChecked={tarefa.estado === 'Concluida'} required />
                            Concluída
                        </label>
                    </div>
                </>}

                <input type="submit" value={"Editar"}></input>
            </form>
        </div>
    )
}

export default TarefaEdit