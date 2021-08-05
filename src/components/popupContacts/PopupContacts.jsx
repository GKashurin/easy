import React from "react"
import "./_popupContacts.scss"
import {ThanksModal} from "../index";

const PopupContacts = ({ visibleThanksModal, seconds }) => {
	return (
		<>
			<div className={!visibleThanksModal ? "popup-contacts" : "popup-contacts popup-contacts__hide"}>
				<div className={"popup-contacts__wrapper" } >
					<h2 className="popup-contacts__title">Обсудим проект вместе?</h2>
					<p className="popup-contacts__text">
						Расскажите о себе и задаче. Или можете позвонить нам и мы сами
						все заполним:
					</p>
					<a href="tel:73435215031" className="popup-contacts__phone">
						+7 (343) 521-50-31
					</a>
					<div className="popup-contacts__address">
						<span>Студия EASY</span>
						620144, г. Екатеринбург. ул. Степана Разина, 2, оф. 6
					</div>
				</div>
			</div>

		</>
	)
}
export default PopupContacts