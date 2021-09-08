import React, {useEffect} from "react";
import {useHistory} from "react-router-dom";
import {Popup, AnimatedButton} from "../../components/";
import lottie from "lottie-web";
import "./info.scss"
import chatSvg from "../../json-img/Chat-bot.json"

const Chat = ({anim, visiblePopup, setVisiblePopup, collapseGridDesktop,}) => {

	const history = useHistory()

	if (!anim) {
		setTimeout(() => history.push("/"), 805);
	}

	useEffect(() => {
		lottie.loadAnimation({
			container: document.querySelector("#lottie-container"),
			animationData: chatSvg,
			renderer: "svg",
			loop: true,
			autoplay: true,
		});
	}, []);

	console.log(collapseGridDesktop)
	return (
		<div className={!collapseGridDesktop ? "background-desktop" : "background-desktop background-desktop_collapsed"}
			 style={{
				 width: "80%",
				 margin: "0 auto",
				 background: "url(/image/Background.svg)",
				 backgroundSize: "cover",
				 backgroundRepeat: "no-repeat",
				 backgroundPosition: "center",
				 height: "100%"
			 }}>
			<div className={anim ? "info" : "info info_animBack"}>

				<div className="info__columns">
					<div className={anim ? "info__col info__col_left" : "info__col info__col_left-animBack"}>
						<h2 className="info__secondTitle">НА<br/>ПИ<br/>ШЕМ</h2>
						<h1 className="info__title">ЧАТ-БОТА</h1>
					</div>
					<div
						id="lottie-container"
						className={anim ? "info__col info__col_right" : "info__col info__col_right-anim"}
					></div>
				</div>
				<div className="info__bottomContainer">
					<h4 className="info__subtitle">используйте роботов вместо тысячи слов </h4>
					<AnimatedButton style={{
						marginRight: "6.25%",
						height: 72,
						width: "auto",
						fontSize: 36,
						whiteSpace: "nowrap",
						padding: 14,
						fontWeight: 300,
						borderRadius: 10,
						border: "3px solid #fff",
					}} onClick={() => setVisiblePopup(true)}>Обсудить проект</AnimatedButton>
				</div>
				{visiblePopup ? <Popup
					setVisiblePopup={setVisiblePopup}
				/> : null}
				<div/>
			</div>
		</div>
	)
}

export default Chat

