import React, {useEffect} from "react";
import {Popup} from "../../components/";
import lottie from "lottie-web";
import "./info.scss"
import vfx from "../../json-img/VFX.json"

const Vfx = ({anim, visiblePopup, setVisiblePopup, collapseGridDesktop}) => {

	useEffect(() => {
		lottie.loadAnimation({
			container: document.querySelector("#lottie-container"),
			animationData: vfx,
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
							<h2 className="info__secondTitle">СОЗ<br/>ДА<br/>ЕМ</h2>
							<h1 className="info__title">ВИЗУАЛЬНЫЕ ЭФФЕКТЫ(VFX)</h1>
							<h4 className="info__subtitle">Сделаем ваше видео захватывающим и запоминающимся</h4>
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

export default Vfx

