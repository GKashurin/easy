import React, {useEffect} from "react";
import { useHistory} from "react-router-dom";
import { Popup, AnimatedButton} from "../../components/";
import lottie from "lottie-web";
import "./info.scss"
import vrSvg from "../../json-img/AR-VR.json"

const Vr = ({anim, visiblePopup, setVisiblePopup }) => {

	const history = useHistory()

	if (!anim) {
		setTimeout(() => history.push("/"), 805);
	}

	useEffect(() => {
		lottie.loadAnimation({
			container: document.querySelector("#lottie-container"),
			animationData: vrSvg,
			renderer: "svg",
			loop: true,
			autoplay: true,
		});
	}, []);

	return (
		<>
			<div className={anim ? "info" : "info info_animBack"}>
				<div className="info__columns">
					<div className={anim ? "info__col info__col_left" : "info__col info__col_left-animBack"}>
						<h2 className="info__secondTitle">ПОГ<br/>РУЗ<br/>ИМ</h2>
						<h1 className="info__title">В ВИРТУАЛЬНУЮ РЕАЛЬНОСТЬ (VR)</h1>
					</div>
					<div
						id="lottie-container"
						className={anim ? "info__col info__col_right" : "info__col info__col_right-anim"}
						style={{
							background: "url(/image/Background.svg)",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center"
						}}></div>
				</div>
				<div className="info__bottomContainer">
					<h4 className="info__subtitle">Когда нужно снизить ошибки персонала, сократить затраты на обучение и расширить границы бизнеса</h4>
					<AnimatedButton onClick={() => setVisiblePopup(true)}>Обсудить проект</AnimatedButton>
				</div>
				{visiblePopup ? <Popup
					setVisiblePopup={setVisiblePopup}
				/> : null}
			</div>
		</>
	)
}

export default Vr

