import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/home.tsx'
import Info from './pages/info/info.tsx'
import Tarefas from './pages/tarefas/tarefas.tsx'
import Config from './pages/config/config.tsx'
import Login from './pages/loginSignIn/login/login.tsx'
import SignIn from './pages/loginSignIn/signIn/SignIn.tsx'

function Page_Router() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/Home" element={<Navigate to="/home" replace /> } />

          <Route path="/info" element={<Info />} />
          <Route path="/Info" element={<Navigate to="/info" replace /> } />

          <Route path="/tarefas" element={<Tarefas />} />
          <Route path="/Tarefas" element={<Navigate to="/tarefas" replace /> } />

          <Route path="/config" element={<Config />} />
          <Route path="/Config" element={<Navigate to="/config" replace /> } />

          
          <Route path='/login' element={<Login/>} />
          <Route path='/Login' element={<Navigate to="/login" replace />} />

          <Route path='/signin' element={<SignIn/>} />
          <Route path='/Signin' element={<Navigate to="/signin" replace />} />
          <Route path='/SignIn' element={<Navigate to="/signin" replace />} />

        </Routes>
      </Router>
    </>
  )
}

export default Page_Router
