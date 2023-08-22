import Main from './pages/Main/Main'
import {MainProvider} from './contexts/MainContext'
import  { BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {


  return (
    <MainProvider>
    <div className='app'>
      <BrowserRouter>
      <Routes>
        <Route path='main' element = {<Main/>}/>



        
      </Routes>
      </BrowserRouter>
    </div>
    </MainProvider>
  )
}

export default App;