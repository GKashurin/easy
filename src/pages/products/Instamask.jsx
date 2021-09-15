import React, {useEffect} from "react";
import {Popup} from "../../components/";
import lottie from "lottie-web";
import "./info.scss"
import instSvg from "../../json-img/INSTA-MASK.json"

const Instamask = ({anim, visiblePopup, setVisiblePopup, collapseGridDesktop}) => {

	useEffect(() => {
		lottie.loadAnimation({
			container: document.querySelector("#lottie-container"),
			animationData: instSvg,
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
							<h2 className="info__secondTitle">СДЕ<br/>ЛА<br/>ЕМ</h2>
							<h1 className="info__title">INSTA МАСКУ</h1>
							<h4 className="info__subtitle">Инструмент вовлечения аудитории и повышения продаж</h4>
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

export default Instamask