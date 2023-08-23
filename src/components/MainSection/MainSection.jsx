import Header from '../Header/Header.jsx'
import { useMainFunction } from '../../contexts/MainContext'
import TweetInput from '../TweetInput/TweetInput.jsx';

function MainSection () {
  const { otherUserData, activeSection } = useMainFunction();

 function HomePage() {
  return(
    <>
     <TweetInput />
    </>
  )
 }


  return(
    <div className= {StyleSheet.container}>

      <Header />


      {/*Main Page */}
      {activeSection === 'main' && <HomePage />} 

    </div>
  )
}

export default MainSection;