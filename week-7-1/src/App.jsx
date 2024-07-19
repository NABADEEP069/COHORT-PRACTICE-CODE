
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'

function App() {
  const navigate = useNavigate();
 
  return (
    <div>
      <div>
        <button onClick={() => navigate('/')}>Landing page</button>
        <button onClick={() => navigate('/dashboard')}>Dashboard</button>
      </div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
