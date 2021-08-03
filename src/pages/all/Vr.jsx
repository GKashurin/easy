import React from "react";
import "./info.scss"
import {useHistory} from "react-router-dom";
import {BtnWrapper, Popup} from "../../components/"

const Vr = ({ anim, setAnim, visiblePopup, setVisiblePopup }) => {
	const history = useHistory()

	if (!anim) {
		setTimeout(() => history.push("/"), 805);
	}

	return (
		<div className="info">
			<div className={anim ? "info__col-left" : "info__col-left-animBack"}>
				<h2 className="info__secondTitle">ПОГ<br/>РУЗ<br/>ИМ</h2>
				<h1 className="info__title">В ВИРТУАЛЬНУЮ РЕАЛЬНОСТЬ (VR)</h1>
				<h4 className="info__subtitle">Когда нужно снизить ошибки персонала, сократить затраты на обучение и расширить границы бизнеса</h4>
				<BtnWrapper
					anim={anim}
					setAnim={setAnim}
					setVisiblePopup={setVisiblePopup}
				/>
			</div>
			<div className={anim ? "info__col-right" : "info__col-right-anim"}>
				<img src={"image/AR-VR.webp"} alt="img AR-VR" />
			</div>
			{visiblePopup ? <Popup
				visiblePopup={visiblePopup}
				setVisiblePopup={setVisiblePopup}
			/> : null}
		</div>
	)
}

export default Vr