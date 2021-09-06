import React, {useEffect, useRef, useState} from 'react';
import InputMask from "react-input-mask";
import { AnimatedButton} from "../../index";
import "./FormMobile.scss"

const FormMobile = ({visibleFormMobile, setVisibleFormMobile, visibleFormContainer, setVisibleFormContainer}) => {
	const [seconds, setSeconds] = useState(3);//состояние для таймера
	const [timerActive, setTimerActive] = useState(false);//состояние для таймера
	const [visibleThanksModal, setVisibleThanksModal] = useState(false) //состояние для окна с благодарностью
	const handleOutsideClick = (event) => { //закрытие формы по клику вне ее
		event.preventDefault();
		setVisibleFormMobile(false)
		setVisibleFormContainer(false)
	};

	const [error, setError] = useState(false)
	const [formState, setFormState] = useState({
		name: "",
		phone: "",
		description: "",
	})
	const values = { //объединенные данные с формы
		name: formState.name,
		phone: formState.phone,
		description: formState.description,
		}

	useEffect(() => {
		if (seconds > 0 && timerActive) {
			setTimeout(setSeconds, 1000, seconds - 1);
		} else {
			setTimerActive(false);
		}
		return () => console.log(".")
	}, [seconds, timerActive]);//таймер

	const changeHandler = (e) => {
		e.preventDefault();
		if (formState.phone.length !== 18) { //валидация инпута с телефоном
			setError(true)
		} else {
			setTimerActive(true); //запуск таймера
			setVisibleThanksModal(true);
			setTimeout(() => {
				setVisibleFormMobile(false);
				setVisibleThanksModal(false);
				setTimerActive(false);
				setVisibleFormContainer(false);
			}, 3002);
			setTimeout(() => setSeconds(3),4000)
			console.log(values);
		}
	}

	const input = useRef()
	const form = useRef()

	// useEffect(() => {
	// 	input.current.addEventListener('focus', function () {
	// 		form.current.style.transform = "translateY(-15%)"
	// 		document.scrollTo(0, 0)
	// 	})
	// })
	return (
		<div onClick={handleOutsideClick} className={visibleFormContainer ? "formMobile__wrapper" : "formMobile__wrapper formMobile__wrapper_invisible"}>
			<form ref={form} className={visibleFormMobile ? "formMobile" : "formMobile formMobile_invisible"}
				  onClick={e => e.stopPropagation()}>
				<h2 className="formMobile__title">{!visibleThanksModal ? "Обсудим проект?" : "Спасибо за заявку"}</h2>
				{!visibleThanksModal ?
					<div className="formMobile__inputsWrapper">
						<div className="formMobile__item">
						<input //имя
							ref={input}
							id="name"
							type="text"
							placeholder="Ваше имя"
							value={formState.name}
							onChange={e => setFormState({...formState, name: e.target.value})}
							autoComplete="off"
						/>
						{/*<label htmlFor="name">Ваше имя</label>*/}
					</div>
					<div className="formMobile__item">
						<InputMask //  телефон
							id="phone"
							className={!error || formState.phone.length === 18 ? "" : "error-input"}
							value={formState.phone}
							onChange={e => setFormState({...formState, phone: e.target.value})}
							mask="+7\ (999) 999-99-99"
							maskChar=""
							placeholder="+7 (999) 999-99-99"
							required
							autoComplete="off"
						/>
						<span className={!error || formState.phone.length === 18 ? "formMobile__reminder" : "error-reminder"}>Введите номер телефона</span>
					</div>
					<div className="formMobile__item">
					<textarea //проект
						id="comment"
						placeholder="Комментарии"
						value={formState.description}
						onChange={e => setFormState({...formState, description: e.target.value})}
					/>
					</div>
				</div>
				:
					<div className="formMobile__greeting">
						<img src="/image/high-five.svg" alt="high-five"/>
						<p>Совсем чуть-чуть и мы вам перезвоним.</p>
						<div> Окно закроется через {seconds} секунд </div>
					</div>
				}
				{!visibleThanksModal ? <AnimatedButton onClick={changeHandler} className="formMobile__btn">Обсудить проект</AnimatedButton> : null}
				{!visibleThanksModal ? <span className="formMobile__agreement">
					Нажимая на кнопку, вы даете согласие на <br/> обработку своих персональных данных.
				</span> : null}
			</form>
		</div>
	);
};

export default FormMobile;