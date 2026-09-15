import styles from './tarefas.module.css'
import Base_userpage from '../base_userpage/base_userpage.tsx'
import { useState } from 'react';
import TaskBox from '../../components/taskComp/taskBox/taskBox.tsx';


function Tarefas() {

  return (
    <Base_userpage numero={3}>

      <div className={styles.area}>
        <h1 className={styles.titulo}>Terafas do Usuário</h1>

        <h2> Tarefas Pendentes</h2>
        <TaskBox type={1} />

        <h2> Tarefas Em Andamento</h2>
        <TaskBox type={2} />

        <h2> Tarefas Concluídas</h2>
        <TaskBox type={3} />
      </div>

      </Base_userpage>
    )
}

export default Tarefas
