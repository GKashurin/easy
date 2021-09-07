import React, {useEffect} from "react";
import { useHistory} from "react-router-dom";
import { Popup, AnimatedButton} from "../../components/";
import lottie from "lottie-web";
import "./info.scss"
import vfxSvg from "../../json-img/VFX.json"

const Vfx = ({anim, visiblePopup, setVisiblePopup }) => {

	const history = useHistory()

	if (!anim) {
		setTimeout(() => history.push("/"), 805);
	}

	useEffect(() => {
		lottie.loadAnimation({
			container: document.querySelector("#lottie-container"),
			animationData: vfxSvg,
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
						<h2 className="info__secondTitle">СОЗ<br/>ДА<br/>ЕМ</h2>
						<h1 className="info__title">ВИЗУАЛЬНЫЕ ЭФФЕКТЫ(VFX)</h1>
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
					<h4 className="info__subtitle">Сделаем ваше видео захватывающим и запоминающимся</h4>
					<AnimatedButton onClick={() => setVisiblePopup(true)}>Обсудить проект</AnimatedButton>
				</div>
				{visiblePopup ? <Popup
					setVisiblePopup={setVisiblePopup}
				/> : null}
			</div>
		</>
	)
}

export default Vfx

