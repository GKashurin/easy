import React, {useEffect} from "react";
import {Popup} from "../../components/";
import lottie from "lottie-web";
import "./info.scss"
import vrSvg from "../../json-img/AR-VR.json"

const Vr = ({anim, visiblePopup, setVisiblePopup, collapseGridDesktop}) => {

	useEffect(() => {
		lottie.loadAnimation({
			container: document.querySelector("#lottie-container"),
			animationData: vrSvg,
			renderer: "svg",
			loop: true,
			autoplay: true,
		});
		return () => console.log(".")
	}, []);

	return (
		<>
			<div
				className={!collapseGridDesktop ? "background-desktop" : "background-desktop background-desktop_collapsed"}
				style={{
					background: "url(/image/Background.svg)",
					backgroundSize: "85%",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flex: "auto",
				}}>
				<div className={!anim ? "info" : "info info_animBack"}>
					<div className="info__columns">
						<div className="info__column">
							<h2 className="info__secondTitle">ПОГ<br/>РУЗ<br/>ИМ</h2>
							<h1 className="info__title">В ВИРТУАЛЬНУЮ РЕАЛЬНОСТЬ (VR)</h1>
							<h4 className="info__subtitle">Когда нужно снизить ошибки персонала, сократить затраты на обучение и расширить границы бизнеса</h4>
						</div>
						<div className="info__column">
							<div id="lottie-container"></div>
							<div>
								<button
									className="info__btn"
									onClick={() => setVisiblePopup(true)}>Обсудить проект
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{visiblePopup ? <Popup
				setVisiblePopup={setVisiblePopup}
			/> : null}
		</>
	)
}

export default Vr