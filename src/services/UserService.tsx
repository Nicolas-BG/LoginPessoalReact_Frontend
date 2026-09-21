import type User from '../interfaces/user';

export default class UserService {
    
    public async SignIn(formData: FormData) {
        try {
            const response = await fetch('http://localhost:3333/api/usuario', {
                method: 'POST',
                body: formData
            })
            const resultado = await response.json()

            if (!response.ok) {
                console.error(resultado.message)
                return false;
            }

            console.log('Usuário cadastrado:', resultado)
            return true;
        } catch (error) {
            console.error('Erro ao conectar com a API:', error)
            return false;
        }
    }

    public async login(email: string, senha: string) {
        localStorage.clear();
        sessionStorage.clear();
        
        const response = await fetch(
            'http://localhost:3333/api/login',
            {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },

                body: JSON.stringify({
                    email,
                    senha
                })
            }
        )

        const resultado = await response.json()

        if (!response.ok) {
            console.log('STATUS:', resultado.status);
            console.log('RESULTADO:', JSON.stringify(resultado, null, 2));
            return false
        }

        //console.log(resultado)

        //console.log('RESPOSTA COMPLETA:', resultado)
        //console.log('TOKEN:', resultado.token)
        //console.log('TIPO DO TOKEN:', typeof resultado.token)

        localStorage.setItem(
            'token',
            resultado.token.token
        )

        console.log("--- logado ---")
        return true
    }

    async getUsuario() {
        const token = localStorage.getItem('token')

        if (!token) {
            return null
        }

        const response = await fetch(
            'http://localhost:3333/api/usuario/me',
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                },
            }
        )

        if (!response.ok) {
            return null
        }

        if (await this.setarUsuario()){
            return await response.json()
        }

        
    }

    async setarUsuario() {
        const token = localStorage.getItem('token')

        if (!token) {
            console.log("não tem token");
            return false
        }

        const response = await fetch(
            'http://localhost:3333/api/usuario/me',
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                },
            }
        )


        if (!response.ok) {
            console.log('STATUS:', response.status);
            console.log('RESULTADO:', JSON.stringify(response, null, 2));
            return false
        }

        const dados = await response.json()

        //console.log('Dados recebidos:', dados)

        sessionStorage.setItem(
            "dados",
            JSON.stringify(dados)
        )
        
        //console.log('dados da sessão:', sessionStorage.getItem("dados"))
        //console.log('nome', sessionStorage.getItem("dados"))

        return true;
    }

}