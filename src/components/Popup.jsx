import React, {useEffect, useState} from "react";
import "../style/components/Popup.scss"
import InputMask from "react-input-mask";
import ThanksModal from "./ThanksModal";

const Popup = ({ setVisiblePopup }) => {
	const [ seconds, setSeconds ] = useState(5);
	const [ timerActive, setTimerActive ] = useState(false);

	const [visibleThanksModal, setVisibleThanksModal] = useState(false)

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

	const prices = [
		{
			id: 1,
			price: "до 500 тыс. ₽",
		},
		{
			id: 2,
			price: "до 1 млн. ₽",
		},
		{
			id: 3,
			price: "от 1 млн. ₽",
		},
		{
			id: 4,
			price: " не знаю",
		},
	] //состояние для бюджета
	const [budgetItem, setBudgetItem] = useState(0)
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

	useEffect(() => {
		if (seconds > 0 && timerActive) {
			setTimeout(setSeconds, 1000, seconds - 1);
		} else {
			setTimerActive(false);
		}
	}, [ seconds, timerActive ]);//таймер


const changeHandler = (e) => {
	e.preventDefault();
	console.log(values);
	setTimerActive(!timerActive);


	setTimeout(() => setVisiblePopup(false), 5002);//ререндер на главную??
	setVisibleThanksModal(true);
	}

	return (
    <div className="popup__wrapper">
      <div className="overlay"></div>
      <div className={!visibleThanksModal ? "popup" : "popup hide-popup"}>
        <div className="popup__form-container">
          <form
            className={
              !visibleThanksModal
                ? "popup__form"
                : "popup__form hide-popup-form"
            }
          >
            <h2 className="popup__form-title">Расскажите сами</h2>
            <h2 className="popup__form-title--mobile">Обсудим проект</h2>
            <p className="popup__form-subtitle">
              выберите тип интересуемого проекта
            </p>
            <ul className="popup__form-tabs">
              {checkboxes.map((item) => (
                <li className="popup__form-tab tab" key={item.name}>
                  <label className="tab__checkbox checkbox">
                    <input
                      type="checkbox"
                      className="checkbox__input"
                      name={item.name}
                      checked={checkedItems[item.name]}
                      value={" "}
                      onChange={(e) =>
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
                  {prices?.map((item, index) => (
                    <span
                      className="popup__form-slider-item"
                      key={item.price}
                      onClick={() => {
                        setBudgetItem(index);
                      }}
                    >
                      {item.price}
                    </span>
                  ))}
                  <div style={{ left: 26 * budgetItem + "%"}} 
				  />
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
                  onChange={(e) => setDeadline(e.target.value)}
                />
              </div>
            </div>

            <textarea
              className="popup__form-textarea"
              placeholder="Расскажите о проекте подробнее"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="popup__form-inputs">
              <input
                type="text"
                className="popup__form-input-name popup__form-input"
                placeholder="введите ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <InputMask
                className="popup__form-input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                mask="+7\(999) 999-9999"
                maskChar=" "
                placeholder="ваш мобильный номер"
              />
              <input
                className="popup__form-input-email popup__form-input"
                placeholder="оставьте ваш емейл"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
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
              >
                отправить запрос
              </button>
            </div>
            <span className=" popup__form-btn-span">
              Нажимая на кнопку, вы даете согласие на обработку своих
              персональных данных.
            </span>
          </form>
          <div
            className={
              !visibleThanksModal
                ? "popup__inner"
                : "popup__inner position-inner"
            }
          >
            <div
              className={
                !visibleThanksModal
                  ? "popup__inner-wrapper"
                  : "popup__inner-wrapper hide-wrapper"
              }
            >
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
        </div>
      </div>
    </div>
  );
}

export default Popup