import React from "react";
import "./info.scss"
import { useHistory} from "react-router-dom";
import {BtnWrapper, Popup} from "../../components/"

const Chat = ({anim, setAnim, visiblePopup, setVisiblePopup }) => {

	const history = useHistory()

	if (!anim) {
		setTimeout(() => history.push("/"), 805);
	}

	return (
		<>
			<div className="info">
				<div className={anim ? "info__col-left" : "info__col-left-animBack"}>
					<h2 className="info__secondTitle">НА<br/>ПИ<br/>ШЕМ</h2>
					<h1 className="info__title">ЧАТ-БОТА</h1>
					<h4 className="info__subtitle">используйте роботов вместо тысячи слов </h4>
					<BtnWrapper
						anim={anim}
						setAnim={setAnim}
						setVisiblePopup={setVisiblePopup}
						visiblePopup={visiblePopup}
					/>
				</div>
				<div className={anim ? "info__col-right" : "info__col-right-anim"}>
					<img src={"image/chat.webp"} alt="img chatbot"/>
				</div>
				{visiblePopup ? <Popup
					setVisiblePopup={setVisiblePopup}
				/> : null}
			</div>
		</>
	)
}

export default Chat

