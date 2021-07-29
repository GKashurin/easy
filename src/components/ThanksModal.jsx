import React from "react"

const ThanksModal = ({visibleThanksModal, seconds}) => {
	return (
		<div className={!visibleThanksModal ? "popup__inner-animation" : "popup__inner-animation show-animation"}>
			<h2 className=" popup__inner-animation-title">
				Спасибо <br/>
				за заявку!
			</h2>
			<p className="popup__inner-animation-text">
				Совсем чуть-чуть и мы вам перезвоним, чтобы обсудить ваш проект и
				предложить решение!
			</p>
			<div className="popup__inner-animation-close">
				Окно закроется через {seconds} секунд
			</div>
			<div className="popup__inner-animation-images">
				<img src={"/image/hands.webp"} alt={"hands up"}/>
			</div>
		</div>
	)
}

export default ThanksModal