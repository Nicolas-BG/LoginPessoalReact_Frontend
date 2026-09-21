import LoginSignIn from "../loginSignIn.tsx"
import styles from './login.module.css';
import UserService from "../../../services/UserService.tsx";
import { useNavigate } from 'react-router-dom';

function Login () {
    const navigate = useNavigate();   
    
    async function LoginSubmit (e:any) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const email = formData.get("email") as string;
        const senha = formData.get("senha") as string;
        const userService = new UserService();
        if (await userService.login(email, senha)){                       
            if (await userService.setarUsuario()){
                navigate('/home');
            }            
        }
        else {
            alert("Aconteceu algum erro no login");
        }
    }

    return (
        <LoginSignIn>
            <h2>Entre na sua conta</h2>
            <form onSubmit={LoginSubmit}>
                <div className={styles.formGroup}>
                    <label>Email:</label>
                    <input name="email" type="email" className={styles.input} required></input>
                </div>
                <div className={styles.formGroup}>
                    <label>Senha:</label>
                    <input name="senha" type="password" className={styles.input} required></input>
                </div>
                <input type="submit" value="Fazer Login"></input>
            </form>
        </LoginSignIn>
    )
}

export default Login;