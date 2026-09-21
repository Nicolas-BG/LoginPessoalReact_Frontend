import LoginSignIn from "../loginSignIn.tsx"
import styles from './signIn.module.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import UserService from "../../../services/UserService.tsx";

function SignIn() {
    const [image, setImagem] = useState<File | null>(null);
    const navigate = useNavigate();   

    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];

        if (file) {
            setImagem(file);
        }
    }

    function verificarSenhas(e: React.ChangeEvent<HTMLInputElement>) {
        const form = e.target.form;

        if (!form) return;

        const senha = form.elements.namedItem("senha") as HTMLInputElement;

        if (e.target.value !== senha.value) {
            e.target.setCustomValidity("As senhas não são iguais.");
        } else {
            e.target.setCustomValidity("");
        }
    }

    async function SignInSubmit(e: any) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);


        //
        const userService = new UserService();
        if (await userService.SignIn(formData)){
            
            navigate('/login');
        } else {
            alert("Ouve um erro na hora de cadastrar")
        };
        

        //



    }

    return (
        <LoginSignIn>
            <h2>Faça sua conta</h2>
            <form onSubmit={SignInSubmit}>
                <div className={styles.formGroup}>
                    <label>Nome:</label>
                    <input name="nome" type="text" className={styles.input} required></input>
                </div>
                <div className={styles.formGroup}>
                    <label>Sombrenome:</label>
                    <input name="sobrenome" type="text" className={styles.input} required></input>
                </div>
                <div className={styles.formGroup}>
                    <label>Email:</label>
                    <input name="email" type="email" className={styles.input} required></input>
                </div>
                <div className={styles.formGroup}>
                    <label>Senha:</label>
                    <input name="senha" type="password" className={styles.input} required></input>
                </div>
                <div className={styles.formGroup}>
                    <label>Repita a Senha:</label>
                    <input name="senha_repeat" type="password" className={styles.input} required onChange={verificarSenhas}></input>

                </div>

                <div className={styles.formGroup}>
                    <label>Cargo:</label>

                    <label className={styles.option}>
                        <input type="radio" name="cargo" value="Funcionario" required />
                        Funcionário
                    </label>

                    <label className={styles.option}>
                        <input type="radio" name="cargo" value="Administrador" required />
                        Administrador
                    </label>

                    <label >
                        <input type="radio" name="cargo" value="Temporario" required />
                        Temporário
                    </label>
                </div>

                <div className={styles.formGroup}>
                    <label>Foto de perfil:</label>
                    <input name="foto" type="file" accept="image/*" className={styles.input} required onChange={handleImageChange} />

                </div>
                <div className={styles.imagePreview}>
                    {image && (
                        <img
                            src={URL.createObjectURL(image)}
                            alt="Prévia da foto de perfil"
                        />
                    )}
                </div>


                <input type="submit" value="Criar Conta"></input>
            </form>
        </LoginSignIn>
    )
}

export default SignIn;