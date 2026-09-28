import styles from './tarefaAdd.module.css'
import TaskService from '../../services/TaskService';
import { useNavigate } from 'react-router-dom';



function TarefaAdd() {
    const navigate = useNavigate();

    async function Adicionar(e: any) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form); 

        const taskService = new TaskService();

        if (await taskService.AddTarefa(formData)) {
            navigate('/tarefas');
        } else {
            alert("Ouve um erro na hora de adicionar a tarefa")
        };

    }
    

    return (
        <div className={styles.caixa}>
            <form onSubmit={Adicionar}>
                <div className={styles.formGroup}>
                    <label>Titulo:</label>
                    <input name="titulo" type="text" className={styles.input} required></input>
                </div>
                <div className={styles.formGroup}>
                    <label>Descrição:</label>
                    <textarea name="descricao" className={styles.text} required></textarea>
                </div>

                <div className={styles.formGroup}>
                    <label>Estado:</label>

                    <label className={styles.option}>
                        <input type="radio" name="estado" value="Pendente" required />
                        Pendente
                    </label>

                    <label className={styles.option}>
                        <input type="radio" name="estado" value="Em andamento" required />
                        Em andamento
                    </label>

                    <label className={styles.option}>
                        <input type="radio" name="estado" value="Concluida" required />
                        Concluída
                    </label>
                </div>

                <input type="submit" value="Adicionar"></input>
            </form>
        </div>
    )
}

export default TarefaAdd