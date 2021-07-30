import React from "react";
import "../style/components/info.scss"
import {useHistory} from "react-router-dom";
import {BtnWrapper, Popup} from "../components/"

const Web = ({anim, setAnim, visiblePopup, setVisiblePopup }) => {
	const history = useHistory()

	if (!anim) {
		setTimeout(() => history.push("/"), 805);
	}

	return (
		<div className="info">
			<div className={anim ? "info__col-left" : "info__col-left-animBack"}>
				<h2 className="info__secondTitle">СОЗ<br/>ДА<br/>ДИМ</h2>
				<h1 className="info__title">WEB-ПРИЛОЖЕНИЕ</h1>
				<h4 className="info__subtitle">Обновить сайт, создать соверменный сайт с нуля, повысить
					производительность текущего сайта</h4>
				<BtnWrapper
					anim={anim}
					setAnim={setAnim}
					setVisiblePopup={setVisiblePopup}
				/>
			</div>
			<div className={anim ? "info__col-right" : "info__col-right-anim"}>
				<img src={"image/WEB.webp"} alt="img web"/>
			</div>
			{visiblePopup ? <Popup
				visiblePopup={visiblePopup}
				setVisiblePopup={setVisiblePopup}
			/> : null}
		</div>
	)
}

export default Web
