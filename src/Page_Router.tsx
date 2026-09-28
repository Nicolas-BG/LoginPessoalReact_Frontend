import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/home/home.tsx'
import Info from './pages/info/info.tsx'
import Tarefas from './pages/tarefas/tarefas.tsx'
import Config from './pages/config/config.tsx'
import Login from './pages/loginSignIn/login/login.tsx'
import SignIn from './pages/loginSignIn/signIn/SignIn.tsx'
import AdicionarTarefa from './pages/adicionarTarefa/adicionarTarefa.tsx';
import EditarTarefa from './pages/editarTarefa/editarTarefa.tsx';

function Page_Router() {
  const [temToken, setTemToken] = useState(false);

  useEffect(() => {
      TokenExist();
    }, []);

  function TokenExist() {
    if (localStorage.getItem('token')) {
      setTemToken(true);
    } else {
      console.log('Não tem token');
    }
  }
   

  return (
    <>
      <Router>
        <Routes>
          {temToken
            ? <Route path="/" element={<Navigate to="/home" replace />} />
            : <Route path="/" element={<Navigate to="/login" replace />} />
          }

          <Route path="/home" element={<Home />} />
          <Route path="/Home" element={<Navigate to="/home" replace />} />

          <Route path="/info" element={<Info />} />
          <Route path="/Info" element={<Navigate to="/info" replace />} />

          <Route path="/tarefas" element={<Tarefas />} />
          <Route path="/Tarefas" element={<Navigate to="/tarefas" replace />} />

          <Route path="/config" element={<Config />} />
          <Route path="/Config" element={<Navigate to="/config" replace />} />


          <Route path='/login' element={<Login />} />
          <Route path='/Login' element={<Navigate to="/login" replace />} />

          <Route path='/signin' element={<SignIn />} />
          <Route path='/Signin' element={<Navigate to="/signin" replace />} />
          <Route path='/SignIn' element={<Navigate to="/signin" replace />} />

          <Route path='/adicionar' element={<AdicionarTarefa />} />
          <Route path='/Adicionar' element={<Navigate to="/adicionar" replace />} />

          <Route path='/editar/:id' element={<EditarTarefa />} />
          <Route path='/Editar/:id' element={<Navigate to="/editar" replace />} />
        </Routes>
      </Router>
    </>
  )
}

export default Page_Router
