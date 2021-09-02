import React, {useEffect, useState} from "react";
import InputMask from "react-input-mask";
import {useHistory} from "react-router-dom";
import {prices, checkboxes} from "./data"

const Form = ({ setTimerActive, timerActive, setVisiblePopup, setVisibleThanksModal, visibleThanksModal }) => {
	const [error, setError] = useState(false)
	const [formState, setFormState] = useState({
		description: "",
		name: "",
		phone: "",
		messenger: false,
	})
	const [checkedItems, setCheckedItems] = useState({})
	const [budgetItem, setBudgetItem] = useState(prices[3])

	const values = { //объединенные данные с формы
		project: checkedItems,
		budget: budgetItem.price,
		description: formState.description,
		name: formState.name,
		phone: formState.phone,
		messenger: formState.messenger,
	}
	const changeHandler = (e) => {
		e.preventDefault();
		if (formState.phone.length !== 18) { //валидация инпута с телефоном
			setError(true)
		} else {
			setTimerActive(!timerActive); //запуск таймера
			setTimeout(() => setVisiblePopup(false), 5002);//ререндер на главную??
			setVisibleThanksModal(true);
			console.log(values);
		}
	}

	const history = useHistory()
	useEffect(() => {
		checkboxes.map((item) => {
			if (item.pathname === history.location.pathname) {
				item.checked = true
				setCheckedItems(
					{...checkedItems, [item.name]: item.checked}
				)
			}
			return checkedItems
		})
	}, [])//получение чекбокса из адресной строки

	console.log(values)
	return (
		<form onClick={e => e.stopPropagation()} className={ !visibleThanksModal ? "form" : "form hide-popup-form" }>
			<h2 className="form__title">Расскажите сами</h2>
			<p className="form__subtitle">выберите тип интересуемого проекта</p>
			<ul className="form__checkboxes checkboxes">
				{checkboxes.map((item) => (
					<li className="checkbox" key={item.name}>
						<label className="checkbox__label">
							<input
								type="checkbox"
								className="checkbox__input"
								name={item.name}
								checked={checkedItems[item.name]}
								defaultChecked={item.pathname === history.location.pathname}
								value={" "}
								onChange={ e =>
									setCheckedItems({
										...checkedItems,
										[e.target.name]: e.target.checked,
									})
								}
							/>
							<span className="checkbox__text">{item.text}</span>
						</label>
					</li>
				))}
			</ul>

			<div className="form__budget budget">
				<div className="budget__sum">
					<p className="form__subtitle">Укажите бюджет проекта:</p>
					<div className="budget__slider slider-budget">
						{prices?.map((item) => (
							<span
								className="slider-budget__item"
								key={item.price}
								onClick={() => { setBudgetItem(item) }}
							>{item.price}
							</span>
						))}
						<div style={{left: 25 * budgetItem.id + "%"}}/>
					</div>
				</div>
			</div>
			<textarea //проект
				placeholder="Описание проекта или задачи"
				value={formState.description}
				onChange={e => setFormState({...formState, description: e.target.value})}
			/>

			<div className="form__userInfo userInfo">
				<input //имя
					type="text"
					placeholder="Ваше имя"
					value={formState.name}
					onChange={e => setFormState({...formState, name: e.target.value})}
				/>
				<InputMask //  телефон
					className={!error || formState.phone.length === 18 ? "" : "error"}
					value={formState.phone}
					onChange={e => setFormState({...formState, phone: e.target.value})}
					mask="+7\ (999) 999-99-99"
					maskChar=""
					placeholder="+7 (999) 999-99-99"
					required
				/>
			</div>

			<div className="messenger">
				<label className="messenger__label">
					<input
						className="messenger__input"
						type="checkbox"
						name="messenger"
						checked={formState.messenger}
						// value={" "}
						onChange={() => setFormState({...formState, messenger: !formState.messenger}) }
					/>
					<span className="messenger__text">Не звонить, а написать мне в мессенджер</span>
					<span className="messenger__checkmark"></span>
				</label>
			</div>
			<div className="form__btnWrapper btnWrapper">
				<button
					onClick={changeHandler}
					className="popup__form-btn animated-button-popup"
				>отправить запрос
				</button>
				<span>
					Нажимая на кнопку, вы даете согласие на обработку своих персональных данных.
				</span>
			</div>
		</form>
	)
}
export default Form