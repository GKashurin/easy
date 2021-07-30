import React, {useEffect, useState, useRef} from "react";
import "../style/components/Popup.scss"
import "../style/components/Form.scss"
import {ThanksModal, Form} from "./index"

const Popup = ({setVisiblePopup}) => {
	const ref = useRef();
	const [seconds, setSeconds] = useState(5);//состояние для таймера
	const [timerActive, setTimerActive] = useState(false);//состояние для таймера
	const [visibleThanksModal, setVisibleThanksModal] = useState(false) //состояние для окна с благодарностью

	const [changeFormContainer, setChangeFormContainer] = useState(false); //меняет класс у popup__form-container. Отвечает за анимацию закрытия

	useEffect(() => {
		if (seconds > 0 && timerActive) {
			setTimeout(setSeconds, 1000, seconds - 1);
		} else {
			setTimerActive(false);
		}
	}, [seconds, timerActive]);//таймер

	const animClosePopup = (e) => {
		e.preventDefault();
		setChangeFormContainer(true)
		setTimeout(() => setVisiblePopup(false), 600)
	}

	const handleOutsideClick = (event) => {
		const path = event.path || (event.composedPath && event.composedPath());
		if (!path.includes(ref.current)) {
			event.preventDefault();
			setChangeFormContainer(true)
			setTimeout(() => setVisiblePopup(false), 600)
		}
	};

	useEffect(() => {
		document.body.addEventListener('click', handleOutsideClick);
		return () => {
			document.body.removeEventListener('click', handleOutsideClick);
		}
	}, []);

	return (
		<div className="popup__wrapper">
			<div className="overlay"></div>
			<div className={!visibleThanksModal ? "popup" : "popup hide-popup"}>
				<div ref={ref} className={!changeFormContainer ? "popup__form-container" : "popup__form-container-animBack"}>
					<Form
						setTimerActive={setTimerActive}
						timerActive={timerActive}
						setVisiblePopup={setVisiblePopup}
						setVisibleThanksModal={setVisibleThanksModal}
						visibleThanksModal={visibleThanksModal}
					/>
					<div className={!visibleThanksModal ? "popup__inner" : "popup__inner position-inner"}>
						<div className={ !visibleThanksModal ? "popup__inner-wrapper" : "popup__inner-wrapper hide-wrapper" } >
							<h2 className="popup__inner-title">Обсудим проект вместе?</h2>
							<p className="popup__inner-text">
								Расскажите о себе и задаче. Или можете позвонить нам и мы сами
								все заполним:
							</p>
							<a href="tel:73435215031" className="popup__inner-phone">
								+7 (343) 521-50-31
							</a>
							<div className="popup__inner-address">
								<span>Студия EASY</span>
								620144, г. Екатеринбург. ул. Степана Разина, 2, оф. 6
							</div>
						</div>
						<ThanksModal
							visibleThanksModal={visibleThanksModal}
							seconds={seconds}
						/>
					</div>
					{/*<div className="popup__inner-mobile">*/}
					{/*	<div className="popup__inner-animation-mobile">*/}
					{/*		<h2 className="popup__inner-animation-title-mobile">*/}
					{/*			Спасибо <br/>*/}
					{/*			за заявку!*/}
					{/*		</h2>*/}
					{/*		<p className="popup__inner-animation-text-mobile">*/}
					{/*			Совсем чуть-чуть и мы вам перезвоним, чтобы обсудить ваш проект и*/}
					{/*			предложить решение!*/}
					{/*		</p>*/}
					{/*		<div className="popup__inner-animation-close-mobile">*/}
					{/*			/!*Окно закроется через {{countDown}} секунд*!/*/}
					{/*		</div>*/}
					{/*		<div className="popup__inner-animation-images-mobile">*/}
					{/*			/!*<img src="('../assets/image/hands.webp')" alt=""/>*!/*/}
					{/*		</div>*/}
					{/*	</div>*/}
					{/*</div>*/}
					<button className="popup__close-btn" onClick={animClosePopup}>
						<img
							width="25px"
							height="25px"
							src={"/image/Close_Box_Red.png"}
							alt="кнопка закрытия"
						/>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Popup