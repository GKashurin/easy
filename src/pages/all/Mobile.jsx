import React from "react";
import "./info.scss"
import {useHistory} from "react-router-dom";
import {BtnWrapper, Popup} from "../../components/"

const Mobile = ({ anim, setAnim, visiblePopup, setVisiblePopup }) => {
	const history = useHistory()

	if (!anim) {
		setTimeout(() => history.push("/"), 805);
	}

	return (
		<div className="info">
			<div className={anim ? "info__col-left" : "info__col-left-animBack"}>
				<h2 className="info__secondTitle">СОЗ<br/>ДА<br/>ДИМ</h2>
				<h1 className="info__title">МОБИЛЬНОЕ ПРИЛОЖЕНИЕ</h1>
				<h4 className="info__subtitle">простой способ быть рядом с клиентами или сотрудниками</h4>
				<BtnWrapper
					anim={anim}
					setAnim={setAnim}
					setVisiblePopup={setVisiblePopup}
				/>
			</div>
			<div className={anim ? "info__col-right" : "info__col-right-anim"}>
				<img src={"image/mobile.webp"} alt="img chatbot" />
			</div>
			{visiblePopup ? <Popup
				visiblePopup={visiblePopup}
				setVisiblePopup={setVisiblePopup}
			/> : null}
		</div>
	)
}

export default Mobile