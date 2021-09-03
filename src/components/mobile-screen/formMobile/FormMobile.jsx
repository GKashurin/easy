import React, {useEffect, useState} from 'react';
import InputMask from "react-input-mask";
import {ThanksModal, AnimatedButton} from "../../index";
import "./FormMobile.scss"

const FormMobile = ({visibleFormMobile, setVisibleFormMobile, visibleFormContainer, setVisibleFormContainer}) => {
	const [seconds, setSeconds] = useState(5);//состояние для таймера
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
			}, 5002);
			setTimeout(() => setSeconds(5),6000)
			console.log(values);
		}
	}

	return (
		<div onClick={handleOutsideClick} className={visibleFormContainer ? "formMobile__wrapper" : "formMobile__wrapper formMobile__wrapper_invisible"}>
			<form className={visibleFormMobile ? "formMobile" : "formMobile formMobile_invisible"}
				  onClick={e => e.stopPropagation()}>
				<h2 className="formMobile__title">Обсудим проект?</h2>
				<div className="formMobile__inputsWrapper">
					<div className="formMobile__item">
						<input //имя
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
				<AnimatedButton
					onClick={changeHandler}
					className="formMobile__btn"
				>Обсудить проект
				</AnimatedButton>
				<span className="formMobile__agreement">
					Нажимая на кнопку, вы даете согласие на <br/> обработку своих персональных данных.
				</span>
			</form>
			<ThanksModal
				visibleThanksModal={visibleThanksModal}
				seconds={seconds}
			/>
		</div>
	);
};

export default FormMobile;