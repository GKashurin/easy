import React from "react";
import "../style/components/info.scss"
import { useHistory} from "react-router-dom";
import BtnWrapper from "../components/BtnWrapper";
import Popup from "../components/Popup";

const Chat = ({anim, setAnim }) => {
	const [visiblePopup, setVisiblePopup] = React.useState(false)
	const history = useHistory()

	// if (!anim) {
	// 	setTimeout(() => history.push("/"), 805);
	// }
	console.log(visiblePopup)
	return (
		<div className="info">
			<div className={anim ? "info__col-left" : "info__col-left-animBack"}>
				<h2 className="info__secondTitle">НА<br/>ПИ<br/>ШЕМ</h2>
				<h1 className="info__title">ЧАТ-БОТА</h1>
				<h4 className="info__subtitle">используйте роботов вместо тысячи слов </h4>
				<BtnWrapper
					anim={anim}
					setAnim={setAnim}
					setVisiblePopup={setVisiblePopup}
				/>
			</div>
			<div className={anim ? "info__col-right" : "info__col-right-anim"}>
				<img src={"image/chat.webp"} alt="img chatbot"/>
			</div>
			{visiblePopup ? <Popup
				visiblePopup={visiblePopup}
				setVisiblePopup={setVisiblePopup}
			/> : null}
		</div>
	)
}

export default Chat

