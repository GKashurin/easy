import React, {useEffect, useState, useRef} from "react";
import "./Popup.scss"
import "../form/Form.scss"
import {Form, PopupContacts, ThanksModal} from "../index"

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

	// const animClosePopup = (e) => {
	// 	e.preventDefault();
	// 	setChangeFormContainer(true)
	// 	setTimeout(() => setVisiblePopup(false), 600)
	// }

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
	});

	return (
		<>
			<div className="popup">
				<div ref={ref} className={!changeFormContainer ? "popup__form-container" : "popup__form-container-animBack"}>
					<Form
						setTimerActive={setTimerActive}
						timerActive={timerActive}
						setVisiblePopup={setVisiblePopup}
						setVisibleThanksModal={setVisibleThanksModal}
						visibleThanksModal={visibleThanksModal}
					/>
					<PopupContacts
						seconds={seconds}
						visibleThanksModal={visibleThanksModal}
					/>
				</div>
			</div>
			<ThanksModal
				visibleThanksModal={visibleThanksModal}
				seconds={seconds}
			/>
		</>
	);
}

export default Popup