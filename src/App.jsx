
import Main from './pages/Main/Main'
import  LoginPage from './pages/LoginPage'
import SettingPage from './pages/SettingPage';
import RegisterPage from './pages/SignupPage';
import AdminPage from './pages/AdminPage';
import {MainProvider} from './contexts/MainContext'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import AdminMain from './pages/Admin/Index';
import SignupPage from './pages/SignupPage';


function App() {


  return (
    <MainProvider>
    <div className='app'>
      <BrowserRouter>
      <Routes>
        <Route path='main' element = {<Main/>}/>
        <Route path="login" element={<LoginPage />} />
        <Route path="setting" element={<SettingPage />} />
        <Route path="signup" element={<SignupPage/>} />
        <Route path="admin" element={<AdminPage />} />  
         <Route path="admin/main" element={<AdminMain />} />  
      </Routes>
      </BrowserRouter>
    </div>
    </MainProvider>
  )
}

export default App;

