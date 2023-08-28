import SideBar from "../../components/SideBar/SideBar";
import MainSection from "../../components/MainSection/MainSection";
import PopularList from "../../components/PopularList/PopularList";
import TweetModal from "../../components/TweetModal/TweetModal";
import ReplyModal from "../../components/ReplyModal/ReplyModal";
import styles from './Main.module.scss'

function Main() {


  return(
<div
			className={styles.container}
		>
			<div className={styles.sidebarSection}>
				<SideBar
				/>
			</div>
			<div className={styles.mainSection}>
				<MainSection
					
				/>
			</div>
			<div className={styles.popularListSection}>
				<PopularList  />
			</div>
			<div
				className={styles.tweetModal}
			>
				<TweetModal
					
				/>
			</div>
			<div
				className={styles.replyModal}
			>
				<ReplyModal
					
				/>
			</div>
		</div>
  )
}





export default Main;
