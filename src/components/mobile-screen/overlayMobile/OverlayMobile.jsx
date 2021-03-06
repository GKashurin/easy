import React from "react"
import "./_OverlayMobile.scss"
import "../../desctop-screen/header/Header.scss"

const OverlayMobile = ({burgerOpen}) => {
	return (
		<div className={burgerOpen ? "overlayMobile" : "overlayMobile overlayMobile_invisible"}>
			<div className="overlayMobile__wrapper">
				<div className="header">
					<div className="header__logo">
						<img src={"/image/LOGO_black.svg"} alt={"logo"}/>
					</div>
				</div>
				<nav className="overlayMobile__menu overlayMobile-menu">
					<ul className="overlayMobile-menu__list">
						<li className="overlayMobile-menu__item">
							<address>
								<a href="tel: +73435215031" className="overlayMobile-menu__link">+7 (343) 521-50-31</a>
							</address>
						</li>
						<li className="overlayMobile-menu__item">
							<address>
								<a href="mailto:hello@easycgmailto:namaste@easycg.ru" className="overlayMobile-menu__link">namaste@easycg.ru</a>
							</address>
						</li>
					</ul>
				</nav>
				<div className="overlayMobile__footer">
					<a target="_blank" rel="noreferrer" href="https://yandex.ru/maps/54/yekaterinburg/?ll=60.607184%2C56.824544&mode=routes&no-distribution=1&rtext=~56.824797%2C60.606731&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D97124593337&source=wizbiz_new_map_single&z=18">
						<img src="/image/map_icon.svg" alt="address icon"/>
						<span>Мы на карте</span>
					</a>
				</div>
			</div>
		</div>
	);
}

export default OverlayMobile;


