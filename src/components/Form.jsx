import React, {useState} from "react";
import InputMask from "react-input-mask";
import {useHistory} from "react-router-dom";

const Form = ({ setTimerActive, timerActive, setVisiblePopup, setVisibleThanksModal, visibleThanksModal }) => {

	const [checkedItems, setCheckedItems] = useState({})
	const checkboxes = [ //состояние для видов проекта
		{
			name: 'AR',
			text: 'AR',
			pathname: '/vr-ar'
		},
		{
			name: 'VR',
			text: 'VR',
			pathname: '/vr-ar'
		},
		{
			name: 'mobile',
			text: 'Мобильное приложение',
			pathname: '/mobile'
		},
		{
			name: 'web',
			text: 'Веб-разработка',
			pathname: '/web'
		},
		{
			name: '3D',
			text: '3D моделирование',
			pathname: '/tours360'
		},
		{
			name: 'chatbot',
			text: 'чат-бот',
			pathname: '/chat'
		},
		{
			name: 'VFX',
			text: 'VFX',
			pathname: '/vfx'
		},
		{
			name: 'instaMask',
			text: 'Инстаграм-маска',
			pathname: '/instamask'
		},
		{
			name: 'another',
			text: 'не знаю',
			pathname: '/'
		},

	]; //вытащить в отдельный файлы js, прокидывать в контейнерные компоненнты. Под каждую контейнерную компоненту создаем свою дату. Один файл для всех страниц

	const prices = [
		{
			id: 0,
			price: "до 500 тыс. ₽",
		},
		{
			id: 1,
			price: "до 1 млн. ₽",
		},
		{
			id: 2,
			price: "от 1 млн. ₽",
		},
		{
			id: 3,
			price: " не знаю",
		},
	] //состояние для бюджета
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
	//Валидация почты
	// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	// const validateEmail = (event) => {
	// 	setEmail(event.target.value)
	// 	if (emailRegex.test(event.target.value)) {
	// 		setIsValidMail(true);
	// 	} else {
	// 		setIsValidMail(false);
	// 	}
	// };

	//Валидация имени
	// const nameRegex = /^(?=.{2,15}$)[a-zA-Z][a-zA-Z0-9]*(?: [a-zA-Z0-9]+)*$/
	// const validateName = (event) => {
	// 	setName(event.target.value)
	// 	if (nameRegex.test(event.target.value)) {
	// 		setIsValidName(true);
	// 	} else {
	// 		setIsValidName(false);
	// 	}
	// }; useEffect => function => default type check => передать урл => history.location.pathname

	const history = useHistory()
	console.log(checkedItems)

	return (
		<form className={ !visibleThanksModal ? "popup__form" : "popup__form hide-popup-form" }>
			<h2 className="popup__form-title">Расскажите сами</h2>
			<h2 className="popup__form-title--mobile">Обсудим проект</h2>
			<p className="popup__form-subtitle">выберите тип интересуемого проекта</p>
			<ul className="popup__form-tabs">
				{checkboxes.map((item) => (
					<li className="popup__form-tab tab" key={item.name}>
						<label className="tab__checkbox checkbox">
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
			<div className="popup__form-wrapper">
				<div className="wrapper-form__col">
					<p className="popup__form-subtitle">Укажите бюджет проекта:</p>
					<div className="popup__form-slider">
						{prices?.map((item) => (
							<span
								className="popup__form-slider-item"
								key={item.price}
								onClick={() => { setBudgetItem(item) }}
							>{item.price}
                    					</span>
						))}
						<div style={{left: 25 * budgetItem.id + "%"}}/>
					</div>
				</div>
				<div className="wrapper-form__col popup__form-deadline">
					<p className="popup__form-subtitle">дедлайн</p>
					<input
						type="date"
						placeholder="укажите дату"
						className="popup__form-deadline-input"
						value={deadline}
						onChange={(e) => setDeadline(e.target.value)}
					/>
				</div>
			</div>
			<textarea //проект
				className="popup__form-textarea"
				placeholder="Расскажите о проекте подробнее"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>

			<div className="popup__form-inputs">
				<input //имя
					type="text"
					className="popup__form-input-name popup__form-input"
					placeholder="введите ваше имя"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<InputMask //  телефон
					className="popup__form-input"
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					mask="+7\(999) 999-9999"
					maskChar=" "
					placeholder="ваш мобильный номер*"
					required
				/>
				<input //почта
					className="popup__form-input-email popup__form-input"
					placeholder="оставьте ваш емейл"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="text" //компания или сфера
					className="popup__form-input-company popup__form-input"
					placeholder="компания или сфера деятельности"
					value={company}
					onChange={(e) => setCompany(e.target.value)}
				/>
			</div>
			<div className="popup__form-btn-wrapper">
				<button
					onClick={changeHandler}
					className="popup__form-btn animated-button-popup"
					disabled={phone === ""}
				>отправить запрос
				</button>
			</div>
			<span className="popup__form-btn-span">
							Нажимая на кнопку, вы даете согласие на обработку своих персональных данных.
						</span>
		</form>
	)
}
export default Form