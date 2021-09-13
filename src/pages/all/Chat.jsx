import React, {useEffect} from "react";
import {Popup, AnimatedButton} from "../../components/";
import lottie from "lottie-web";
import "./info.scss"
import chatSvg from "../../json-img/Chat-bot.json"

const Chat = ({anim, visiblePopup, setVisiblePopup, collapseGridDesktop}) => {

	useEffect(() => {
		lottie.loadAnimation({
			container: document.querySelector("#lottie-container"),
			animationData: chatSvg,
			renderer: "svg",
			loop: true,
			autoplay: true,
		});
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
					display: "flex",
					justifyContent: "center",
				}}>
				<div className={!anim ? "info" : "info info_animBack"}>
					<div className="info__columns">
						<div className="info__column">
							<h2 className="info__secondTitle">НА<br/>ПИ<br/>ШЕМ</h2>
							<h1 className="info__title">ЧАТ-БОТА</h1>
						</div>
						<div id="lottie-container" className="info__column"></div>
					</div>
					<div className="info__bottomContainer">
						<div className="bottom-container__item">
							<h4 className="info__subtitle">используйте роботов вместо<br/> тысячи слов </h4>
						</div>
						<div className="bottom-container__item">
							<button
								className="info__btn"
								onClick={() => setVisiblePopup(true)}>Обсудить проект
							</button>
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

export default Chat

