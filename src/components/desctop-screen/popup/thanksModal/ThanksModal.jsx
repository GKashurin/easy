import React from "react"
import "./ThanksModal.scss"

const ThanksModal = ({visibleThanksModal, seconds}) => {
	return (
		<div className={!visibleThanksModal ? "thanksModal" : "thanksModal _visible"}>
			<h2 className="thanksModal__title">
				Спасибо <br/>
				за заявку!
			</h2>
			<p className="thanksModal__text">
				Совсем чуть-чуть и мы вам перезвоним, чтобы обсудить ваш проект и
				предложить решение!
			</p>
			<div className="thanksModal__close">
				Окно закроется через {seconds} секунд
			</div>
			<div className="thanksModal__images">
				<img src={"/image/hands.webp"} alt={"hands up"}/>
			</div>
		</div>
	)
}

export default ThanksModal