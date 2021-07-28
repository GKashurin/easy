import React from "react";
import "../style/components/info.scss"
import {Link, useHistory} from "react-router-dom";
import BtnWrapper from "../components/BtnWrapper";
import Popup from "../components/Popup";

const Instamask = ({ anim, setAnim }) => {
	const [visiblePopup, setVisiblePopup] = React.useState(false)
	const history = useHistory()

	if (!anim) {
		setTimeout(() => history.push("/"), 805);
	}
	return (
		<div className="info">
			<div className={anim ? "info__col-left" : "info__col-left-animBack"}>
				<h2 className="info__secondTitle">СДЕ<br/>ЛА<br/>ЕМ</h2>
				<h1 className="info__title">INSTA МАСКУ</h1>
				<h4 className="info__subtitle">Инструмент вовлечения аудитории и повышения продаж</h4>
				<BtnWrapper
					anim={anim}
					setAnim={setAnim}
					setVisiblePopup={setVisiblePopup}
				/>
			</div>
			<div className={anim ? "info__col-right" : "info__col-right-anim"}>
				<img src={"image/mask.webp"} alt="img instamask" />
			</div>
			{visiblePopup ? <Popup
				visiblePopup={visiblePopup}
				setVisiblePopup={setVisiblePopup}
			/> : null}
		</div>
	)
}

export default Instamask