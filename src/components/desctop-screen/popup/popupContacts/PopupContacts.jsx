import React from "react"
import "./_popupContacts.scss"

const PopupContacts = ({visibleThanksModal}) => {
	return (
		<>
			<div onClick={e => e.stopPropagation()}
				 className={!visibleThanksModal ? "popup-contacts" : "popup-contacts popup-contacts__hide"}>
				<div className={"popup-contacts__wrapper"}>
					<h2 className="popup-contacts__title">Обсудим проект вместе?</h2>
					<p className="popup-contacts__text">
						Расскажите о себе и задаче. Или можете позвонить нам и мы сами
						все заполним.
					</p>
					<a href="tel:+73435215031" className="popup-contacts__phone">
						+7 (343) 521-50-31
					</a>
					<div className="popup-contacts__address">
						<a href="https://yandex.ru/maps/54/yekaterinburg/?ll=60.607184%2C56.824544&mode=routes&no-distribution=1&rtext=~56.824797%2C60.606731&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D97124593337&source=wizbiz_new_map_single&z=18"
						   target="_blank"
						   rel="noreferrer"
						>
							Студия <span>EASY</span>
							<br/>620144, г. Екатеринбург,
							<br/> ул. Степана Разина, 2, оф. 6
						</a>
					</div>
				</div>
			</div>
		</>
	)
}
export default PopupContacts