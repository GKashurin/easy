import React from "react";
import "./info.scss"
import { useHistory} from "react-router-dom";
import {BtnWrapper, Popup} from "../../components/"
import AnimatedButton from "../../components/UI/animatedButton/AnimatedButton";

const Chat = ({anim, setAnim, visiblePopup, setVisiblePopup }) => {

	const history = useHistory()

	if (!anim) {
		setTimeout(() => history.push("/"), 805);
	}

	return (
		<>
			<div className="info">
				<div className={anim ? "info__col info__col_left" : "info__col info__col_left-animBack"}>
					<h2 className="info__secondTitle">НА<br/>ПИ<br/>ШЕМ</h2>
					<h1 className="info__title">ЧАТ-БОТА</h1>
					<h4 className="info__subtitle">используйте роботов вместо тысячи слов </h4>

				</div>
				<div className={anim ? "info__col info__col_right" : "info__col info__col_right-anim"}>
					<img src={"image/chat.webp"} alt="img chatbot"/>
					{/*<BtnWrapper*/}
					{/*	anim={anim}*/}
					{/*	setAnim={setAnim}*/}
					{/*	setVisiblePopup={setVisiblePopup}*/}
					{/*	visiblePopup={visiblePopup}*/}
					{/*/>*/}
					<AnimatedButton onClick={() => setVisiblePopup(true)}>Обсудить проект</AnimatedButton>
				</div>
				{visiblePopup ? <Popup
					setVisiblePopup={setVisiblePopup}
				/> : null}
			</div>
		</>
	)
}

export default Chat

