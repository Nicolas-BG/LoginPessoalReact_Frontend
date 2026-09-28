import type Task from '../interfaces/task';

export default class TaskService {
    public task: Task[] = [{
        id: 0,
        titulo: 'Tarefa 1',
        descricao: 'Descrição da tarefa 1',
        estado: 'Pendente',
        userId: 0
    },
    {
        id: 1,
        titulo: 'Tarefa 2',
        descricao: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.`,
        estado: 'Em andamento',
        userId: 0
    },
    {
        id: 2,
        titulo: 'Tarefa 3',
        descricao: 'Descrição da tarefa 3',
        estado: 'Concluída',
        userId: 0
    },
    {
        id: 3,
        titulo: 'Tarefa 3',
        descricao: 'Descrição da tarefa 3',
        estado: 'Concluída',
        userId: 0
    },
    {
        id: 4,
        titulo: 'Tarefa 3',
        descricao: 'Descrição da tarefa 3',
        estado: 'Concluída',
        userId: 0
    },
    {
        id: 5,
        titulo: 'Tarefa 3',
        descricao: 'Descrição da tarefa 3',
        estado: 'Concluída',
        userId: 0
    }
    ];

    async AddTarefa(formData: FormData) {
        try {
            const token = localStorage.getItem('token')

            const response = await fetch(
                'http://localhost:3333/api/tarefas',
                {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                    body: formData
                }
            )

            const resultado = await response.json()

            if (!response.ok) {
                console.error(resultado.message)
                return false
            }

            console.log('Tarefa adicionada:', resultado)
            return true

        } catch (error) {
            console.error('Erro ao conectar com a API:', error)
            return false
        }

    }

    async EditarTarefa(formData: FormData, id: number) {
        try {
            const token = localStorage.getItem('token')

            const response = await fetch(
                `http://localhost:3333/api/tarefas/${id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                    body: formData
                }
            )

            const resultado = await response.json()

            if (!response.ok) {
                console.error(resultado.message)
                return false
            }

            console.log('Tarefa editada:', resultado);
            return true

        } catch (error) {
            console.error('Erro ao conectar com a API:', error);
            return false
        }

    }



    async getTarefas() {
        const token = localStorage.getItem('token')

        const response = await fetch('http://localhost:3333/api/tarefas', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        const resultado = await response.json()

        if (!response.ok) {
            console.error(resultado.message)
            return []
        }

        return resultado
    }

    async getTarefaId(id: number) {
        try {
            const token = localStorage.getItem('token')

            const response = await fetch(
                `http://localhost:3333/api/tarefas/${id}`,
                {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            )

            const resultado = await response.json()

            if (!response.ok) {
                console.error(resultado.message)
                return null
            }

            return resultado

        } catch (error) {
            console.error('Erro ao conectar com a API:', error)
            return null
        }
    }
}