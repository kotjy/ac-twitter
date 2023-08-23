import Header from '../Header/Header.jsx'
import { useMainFunction } from '../../contexts/MainContext'


function MainSection () {


  const { otherUserData } = useMainFunction();


  return(
    <div className= {StyleSheet.container}>

      <Header />
    </div>
  )
}

export default MainSection;