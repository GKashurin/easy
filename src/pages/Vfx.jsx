import React from "react";
import "../style/components/info.scss"
import {useHistory} from "react-router-dom";
import BtnWrapper from "../components/BtnWrapper";
import Popup from "../components/Popup";

const Vfx= ({ anim, setAnim }) => {
	const [visiblePopup, setVisiblePopup] = React.useState(false)
	const history = useHistory()

	if (!anim) {
		setTimeout(() => history.push("/"), 805);
	}
	return (
		<div className="info">
			<div className={anim ? "info__col-left" : "info__col-left-animBack"}>
				<h2 className="info__secondTitle">СОЗ<br/>ДА<br/>ЕМ</h2>
				<h1 className="info__title">ВИЗУАЛЬНЫЕ ЭФФЕКТЫ(VFX)</h1>
				<h4 className="info__subtitle">Сделаем ваше видео захватывающим и запоминающимся</h4>
				<BtnWrapper
					anim={anim}
					setAnim={setAnim}
					setVisiblePopup={setVisiblePopup}
				/>
			</div>
			<div className={anim ? "info__col-right" : "info__col-right-anim"}>
				<img src={"image/VFX.webp"} alt="img WFX" />
			</div>
			{visiblePopup ? <Popup
				visiblePopup={visiblePopup}
				setVisiblePopup={setVisiblePopup}
			/> : null}
		</div>
	)
}

export default Vfx