import React, {useState} from "react";
import "../style/components/Popup.scss"
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import InputMask from "react-input-mask";
import cn from "classnames"

const Popup = ({ visiblePopup, setVisiblePopup }) => {
	const [checkedItems, setCheckedItems] = useState({ })
	const checkboxes = [ //состояние для видов проекта
		{
			name: 'AR',
			text: 'AR',
		},
		{
			name: 'VR',
			text: 'VR',
		},
		{
			name: 'mobile',
			text: 'Мобильное приложение',
		},
		{
			name: 'web',
			text: 'Веб-разработка',
		},
		{
			name: '3D',
			text: '3D моделирование',
		},
		{
			name: 'chatbot',
			text: 'чат-бот',
		},
		{
			name: 'VFX',
			text: 'VFX',
		},
		{
			name: 'instaMask',
			text: 'Инстаграм-маска',
		},
		{
			name: 'another',
			text: 'не знаю',
		},
		
	];

	const budgetItems = [
		{
			id: 1,
			price: "до 500 тыс. ₽",
			left: "3px"
		},
		{
			id: 2,
			price: "до 1 млн. ₽",
			left: "127px"
		},
		{
			id: 3,
			price: "от 1 млн. ₽",
			left: "232px"
		},
		{
			id: 4,
			price: "не знаю",
			left: "334px"
		},
	] //состояние для бюджета
	const [budgetItem, setBudgetItem] = useState(budgetItems[0])
	const [deadline, setDeadline] = useState("")
	const [description, setDescription] = useState("")
	const [name, setName] = useState("")
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [company, setCompany] = useState("");

	const values = { //объединенные данные с формы
		project: checkedItems,
		budget: budgetItem,
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
	// setTimeout(() => setVisiblePopup(false), 1000);//ререндер на главную??
	}

	const onSelectBudgetItem = index => { //изменение активной вкладки бюджета
		setBudgetItem(index)
	};

	return (
		<div className="popup__wrapper">
			<div className="overlay"></div>
			<div className="popup">
				<div className="popup__form-container">
					<form className="popup__form">
						<h2 className="popup__form-title">Расскажите сами</h2>
						<h2 className="popup__form-title--mobile">Обсудим проект</h2>
						<p className="popup__form-subtitle">выберите тип интересуемого проекта</p>
						<ul className="popup__form-tabs">
							{checkboxes.map(item => (
								<li className="popup__form-tab tab" key={item.name}>
									<label className="tab__checkbox checkbox">
										<input 
											type="checkbox" 
											className="checkbox__input"
											name={item.name}
											checked={checkedItems[item.name]}
											value={" "}
											onChange={e => (setCheckedItems({...checkedItems, [e.target.name] : e.target.checked }))}
										/>
										<span className="checkbox__text">{item.text}</span>
									</label>
								</li>
							))}							
						</ul>
						<div className="popup__form-wrapper">
							<div className="wrapper-form__col">
								<p className="popup__form-subtitle">Укажите бюджет проекта:</p>
								{/*<Tabs >*/}
								{/*	<TabList className="popup__form-slider">*/}
								{/*		{budgetItems && budgetItems.map((item, i) => (*/}
								{/*			<Tab*/}
								{/*				key={item.id}*/}
								{/*				onClick={() => onSelectBudgetItem(item.price)}*/}
								{/*				className={cn( "popup__form-slider-item", {*/}
								{/*				"active-slider-item" : budgetItem === item.price*/}
								{/*			})}>{item.price}*/}
								{/*			</Tab>*/}
								{/*		))}*/}
								{/*	</TabList>*/}
								{/*	<TabPanel />*/}
								{/*	<TabPanel />*/}
								{/*	<TabPanel />*/}
								{/*	<TabPanel />*/}
								{/*</Tabs>*/}
								<div className="popup__form-slider">
									{
										budgetItems && budgetItems.map((item, i) => (
										<span
											key={item.id}
											onClick={() => onSelectBudgetItem(item.price)}
											className="popup__form-slider-item"
											style={
												budgetItem === item.price ? {
													boxShadow: "0 0 0 1px indigo",
													borderRadius: "8px",
											} : null}
										>{item.price}
										</span>
									))
									}
								</div>
							</div>



							<div className="wrapper-form__col popup__form-deadline">
								<p className="popup__form-subtitle">дедлайн</p>
								<input
									type="date"
									id="deadline"
									placeholder="укажите дату"
									className="popup__form-deadline-input"
									value={deadline}
									onChange={e => setDeadline(e.target.value)}
								/>
							</div>
						</div>

						<textarea
							className="popup__form-textarea"
							placeholder="Расскажите о проекте подробнее"
							value={description}
							onChange={e => setDescription(e.target.value)}
						/>
						<div className="popup__form-inputs">
							<input
								type="text"
								className="popup__form-input-name popup__form-input"
								placeholder="введите ваше имя"
								value={name}
								onChange={e => setName(e.target.value)}
							/>
							<InputMask
								className="popup__form-input"
								value={phone}
								onChange={e => setPhone(e.target.value)}
								mask="+7\(999) 999-9999"
								maskChar=" "
								placeholder="ваш мобильный номер"
							/>
							<input
								className="popup__form-input-email popup__form-input"
								placeholder="оставьте ваш емейл"
								type="email"
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
							<input
								type="text"
								className="popup__form-input-company popup__form-input"
								placeholder="компания или сфера деятельности"
								value={company}
								onChange={e => setCompany(e.target.value)}
							/>
						</div>
						<div className="popup__form-btn-wrapper">
							<button 
							onClick={changeHandler} 
							className="popup__form-btn animated-button-popup"
							>отправить запрос
							</button>
						</div>
						<span className=" popup__form-btn-span">Нажимая на кнопку, вы даете согласие на обработку своих персональных данных.</span>
					</form>
				</div>
				<div className=" popup__inner">
					<div className=" popup__inner-wrapper">
						<h2 className=" popup__inner-title">Обсудим проект вместе?</h2>
						<p className=" popup__inner-text">
							Расскажите о себе и задаче. Или можете позвонить нам и мы сами все
							заполним:
						</p>
						<a href="tel:73435215031" className=" popup__inner-phone">
							+7 (343) 521-50-31
						</a>
						<div className="popup__inner-address">
							<span>Студия EASY</span>
							620144, г. Екатеринбург. ул. Степана Разина, 2, оф. 6
						</div>
					</div>
					<div className="popup__inner-animation">
						<h2 className=" popup__inner-animation-title">
							Спасибо <br/>
							за заявку!
						</h2>
						<p className="popup__inner-animation-text">
							Совсем чуть-чуть и мы вам перезвоним, чтобы обсудить ваш проект и
							предложить решение!
						</p>
						<div className="popup__inner-animation-close">
							Окно закроется через секунд
						</div>
						<div className="popup__inner-animation-images">
							{/*<img src="('../assets/image/hands.webp')" alt=""/>*/}
						</div>
					</div>
				</div>
			</div>
			<div className="popup__inner-mobile">
				<div className="popup__inner-animation-mobile">
					<h2 className="popup__inner-animation-title-mobile">
						Спасибо <br/>
						за заявку!
					</h2>
					<p className="popup__inner-animation-text-mobile">
						Совсем чуть-чуть и мы вам перезвоним, чтобы обсудить ваш проект и
						предложить решение!
					</p>
					<div className="popup__inner-animation-close-mobile">
						{/*Окно закроется через {{countDown}} секунд*/}
					</div>
					<div className="popup__inner-animation-images-mobile">
						{/*<img src="('../assets/image/hands.webp')" alt=""/>*/}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Popup