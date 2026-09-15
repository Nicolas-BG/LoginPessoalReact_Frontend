import styles from './config.module.css'
import Base_userpage from '../base_userpage/base_userpage.tsx'

function Config() {

  return (
    <Base_userpage numero={4}>
      <div>Olá config</div>
    </Base_userpage>
  )
}

export default Config
