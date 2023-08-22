import  LoginPage from './pages/LoginPage'
import SettingPage from './pages/SettingPage';
import RegisterPage from './pages/RegisterPage';
import AdminPage from './pages/AdminPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
      <div className="app">
        <BrowserRouter>
        
          <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="setting" element={<SettingPage />} />
            <Route path="regist" element={<RegisterPage />} />
            <Route path="admin" element={<AdminPage />} />
          </Routes>
          
        </BrowserRouter>
      </div>
    );
  }
  export default App;