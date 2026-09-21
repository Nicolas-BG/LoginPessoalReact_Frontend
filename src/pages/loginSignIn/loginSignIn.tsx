import styles from './loginSignIn.module.css';


interface LoginProps {
  children: React.ReactNode;
}

function LoginSignIn ( { children }:LoginProps ) {

    return (
        <div className={styles.area}>
            <div className={styles.box}>
                {children}
            </div>        
        </div>
    )

}

export default LoginSignIn