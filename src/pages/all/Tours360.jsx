import React from "react";
import "./info.scss"
import {useHistory} from "react-router-dom";
import {AnimatedButton, Popup} from "../../components/"

const Tours360 = ({ anim, setAnim, visiblePopup, setVisiblePopup }) => {
	const history = useHistory()

	if (!anim) {
		setTimeout(() => history.push("/"), 805);
	}
	return (
		<div className="info">
			<div className={anim ? "info__col-left" : "info__col-left-animBack"}>
				<h2 className="info__secondTitle">МО<br/>ДЕЛИ<br/>РУЕМ</h2>
				<h1 className="info__title">И СКАНИРУЕМ В 3D</h1>
				<h4 className="info__subtitle">+</h4>
				<AnimatedButton
					anim={anim}
					setAnim={setAnim}
					setVisiblePopup={setVisiblePopup}
				/>
			</div>
			<div className={anim ? "info__col-right" : "info__col-right-anim"}>
				<img src={"image/3D.webp"} alt="img chatbot" />
			</div>
			{visiblePopup ? <Popup
				visiblePopup={visiblePopup}
				setVisiblePopup={setVisiblePopup}
			/> : null}
		</div>
	)
}

export default Tours360