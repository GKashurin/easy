import React from "react"
import "./_OverlayMobile.scss"
import {Link, useHistory} from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";
import "../header/Header.scss"

const OverlayMobile = ({burgerOpen, setBurgerOpen}) => {
const history = useHistory()
	return (
		<div className="overlayMobile">
			<div className="header">
				<div className="header__logo">
					<Link to={"/"}>
						<img src={"/image/logo.png"} alt={"logo"}/>
					</Link>
				</div>
				<div className="burger">
					<Hamburger size={25} toggled={burgerOpen} toggle={setBurgerOpen} />
				</div>
			</div>
			<nav className="overlayMobile__menu overlayMobile-menu">
				<ul className="overlayMobile-menu__list">
					<li className="overlayMobile-menu__item"><Link to="/portfolio" className="overlayMobile-menu__link">Портфолио</Link></li>
					<li className="overlayMobile-menu__item"><Link to="/team" className="overlayMobile-menu__link">Команда</Link></li>
					<li className="overlayMobile-menu__item">
						<address>
							<a href="mailto:hello@easycgmailto:namaste@easycg.ru" className="overlayMobile-menu__link">namaste@easycg.ru</a>
						</address>
					</li>
					<li className="overlayMobile-menu__item">
						<address>
							<a href="tel: 3435215031" className="overlayMobile-menu__link">+7 (343) 521-50-31</a>
						</address>
					</li>
				</ul>
			</nav>
			<div className="overlayMobile__footer">
				<address>
					<Link to="#">
						620144, г. Екатеринбург. ул. Степана Разина, 2, оф. 6
					</Link>
				</address>
			</div>
		</div>
	);
}

export default OverlayMobile;


