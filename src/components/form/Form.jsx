import React, {useEffect, useState} from "react";
import InputMask from "react-input-mask";
import {useHistory} from "react-router-dom";
import {prices, checkboxes} from "./data"

const Form = ({ setTimerActive, timerActive, setVisiblePopup, setVisibleThanksModal, visibleThanksModal }) => {

	const [formState, setFormState] = useState({
		deadline: "",
		description: "",
		name: "",
		phone: "",
		email: "",
		company: "",
	})
	const [checkedItems, setCheckedItems] = useState({})
	const [budgetItem, setBudgetItem] = useState(prices[3])

	const values = { //объединенные данные с формы
		project: checkedItems,
		budget: budgetItem.price,
		deadline: formState.deadline,
		description: formState.description,
		name: formState.name,
		phone: formState.phone,
		email: formState.email,
		company: formState.company
	}
	const changeHandler = (e) => {
		e.preventDefault();
		console.log(values);
		setTimerActive(!timerActive); //запуск таймера
		setTimeout(() => setVisiblePopup(false), 5002);//ререндер на главную??
		setVisibleThanksModal(true);
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
				<div className="budget__deadline">
					<p className="form__subtitle">дедлайн</p>
					<input
						type="date"
						value={formState.deadline}
						onChange={e => setFormState({...formState, deadline: e.target.value})}
					/>
				</div>
			</div>
			<textarea //проект
				placeholder="Расскажите о проекте подробнее"
				value={formState.description}
				onChange={e => setFormState({...formState, description: e.target.value})}
			/>

			<div className="form__userInfo userInfo">
				<input //имя
					type="text"
					placeholder="введите ваше имя"
					value={formState.name}
					onChange={e => setFormState({...formState, name: e.target.value})}
				/>
				<InputMask //  телефон
					value={formState.phone}
					onChange={e => setFormState({...formState, phone: e.target.value})}
					mask="+7\(999) 999-9999"
					maskChar=" "
					placeholder="ваш мобильный номер*"
					required
				/>
				<input //почта
					placeholder="оставьте ваш емейл"
					type="email"
					value={formState.email}
					onChange={e => setFormState({...formState, email: e.target.value})}
				/>
				<input
					type="text" //компания или сфера
					placeholder="компания или сфера деятельности"
					value={formState.company}
					onChange={e => setFormState({...formState, company: e.target.value})}
				/>
			</div>
			<div className="form__btnWrapper btnWrapper">
				<button
					onClick={changeHandler}
					className="popup__form-btn animated-button-popup"
					disabled={formState.phone === ""}
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