import styles from './home.module.css'
import Base_userpage from '../base_userpage/base_userpage.tsx'
import TaskBox from '../../components/taskComp/taskBox/taskBox.tsx';

function Home() {

  return (
    <Base_userpage numero={1}>
      <div className={styles.area}>
        <h1 className={styles.titulos}>Bem-vindo à sua página inicial</h1>
        <h2 className={styles.titulos}>Tarefas Pendentes mais recentes:</h2>
        <TaskBox type={1} limite={4}></TaskBox>

      </div>
    </Base_userpage>
  )
}

export default Home
