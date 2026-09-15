import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/home.tsx'
import Info from './pages/info/info.tsx'
import Tarefas from './pages/tarefas/tarefas.tsx'
import Config from './pages/config/config.tsx'

function Page_Router() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace /> } />
          <Route path="/Home" element={<Navigate to="/" replace /> } />

          <Route path="/info" element={<Info />} />
          <Route path="/Info" element={<Navigate to="/info" replace /> } />

          <Route path="/tarefas" element={<Tarefas />} />
          <Route path="/Tarefas" element={<Navigate to="/tarefas" replace /> } />

          <Route path="/config" element={<Config />} />
          <Route path="/Config" element={<Navigate to="/config" replace /> } />

        </Routes>
      </Router>
    </>
  )
}

export default Page_Router
