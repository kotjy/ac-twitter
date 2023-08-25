import SideBar from "../../components/SideBar/SideBar";
import MainSection from "../../components/MainSection/MainSection";
import PopularList from "../../components/PopularList/PopularList";
import TweetModal from "../../components/TweetModal/TweetModal";
import ReplyModal from "../../components/ReplyModal/ReplyModal";


function Main() {


  return(



    <div>
      
      <SideBar/>
      <MainSection />
      <PopularList />
      <TweetModal/>
      <ReplyModal/>
    </div>
  )
}





export default Main;
