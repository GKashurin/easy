import React, {useEffect, useState} from "react";
import InputMask from "react-input-mask";
import {useHistory} from "react-router-dom";
import {prices, checkboxes} from "./data"

const Form = ({ setTimerActive, timerActive, setVisiblePopup, setVisibleThanksModal, visibleThanksModal }) => {

	const [checkedItems, setCheckedItems] = useState({})
	const [budgetItem, setBudgetItem] = useState(prices[3])
	const [deadline, setDeadline] = useState("")
	const [description, setDescription] = useState("")
	const [name, setName] = useState("")
	// const [isValidName, setIsValidName] = useState(false);
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	// const [isValidMail, setIsValidMail] = useState(false);
	const [company, setCompany] = useState("");

	const values = { //объединенные данные с формы
		project: checkedItems,
		budget: budgetItem.price,
		deadline: deadline,
		description: description,
		name: name,
		phone: phone,
		email: email,
		company: company
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
		<form className={ !visibleThanksModal ? "form" : "form hide-popup-form" }>
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
					<div className="budget__slider slider">
						{prices?.map((item) => (
							<span
								className="slider__item"
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
						placeholder="укажите дату"
						value={deadline}
						onChange={(e) => setDeadline(e.target.value)}
					/>
				</div>
			</div>
			<textarea //проект
				placeholder="Расскажите о проекте подробнее"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>

			<div className="form__userInfo userInfo">
				<input //имя
					type="text"
					placeholder="введите ваше имя"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<InputMask //  телефон
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					mask="+7\(999) 999-9999"
					maskChar=" "
					placeholder="ваш мобильный номер*"
					required
				/>
				<input //почта
					placeholder="оставьте ваш емейл"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="text" //компания или сфера
					placeholder="компания или сфера деятельности"
					value={company}
					onChange={(e) => setCompany(e.target.value)}
				/>
			</div>
			<div className="form__btnWrapper btnWrapper">
				<button
					onClick={changeHandler}
					className="popup__form-btn animated-button-popup"
					// disabled={phone === ""}
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