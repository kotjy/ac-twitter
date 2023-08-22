
import Main from './pages/Main/Main'
import  LoginPage from './pages/LoginPage'
import SettingPage from './pages/SettingPage';
import RegisterPage from './pages/RegisterPage';
import AdminPage from './pages/AdminPage';
import {MainProvider} from './contexts/MainContext'
import { BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {


  return (
    <MainProvider>
    <div className='app'>
      <BrowserRouter>
      <Routes>
        <Route path='main' element = {<Main/>}/>
        <Route path="login" element={<LoginPage />} />
        <Route path="setting" element={<SettingPage />} />
        <Route path="regist" element={<RegisterPage />} />
        <Route path="admin" element={<AdminPage />} />    
      </Routes>
      </BrowserRouter>
    </div>
    </MainProvider>
  )
}

export default App;

