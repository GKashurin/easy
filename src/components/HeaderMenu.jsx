import React from "react";
import "../style/components/HeaderMenu.scss"
import {Link} from "react-router-dom";

const HeaderMenu = () => {
	return (
		<nav>
			<ul className="headerMenu">
				<li className="headerMenu__item">
					<Link to="/portfolio" className="animated-button">портфолио</Link>
				</li>
				<li className="headerMenu__item" >
					<Link to="/services" className="animated-button">команда</Link>
				</li>
				<li className="headerMenu__item">
					<address>
						<a href="mailto:hello@easycgmailto:namaste@easycg.ru"
							className="animated-button email"
						>
							<span style={
								{ 	background: "url(/image/letter.png) no-repeat left",
									padding: "0 0 0 25px",
								}
							}
							><span>namaste@easycg.ru</span>
							</span>
						</a>
					</address>
				</li>
				<li className="headerMenu__item">
					<address>
						<a href="tel: 3435215031"
							className="animated-button phone">
							<span style={
								{ 	background: "url(/image/Phone_white.png) no-repeat left",
									padding: "0px 0 0 23px",
								}
							}><span>(343) 521-50-31</span>
							</span>
						</a>
					</address>
				</li>
			</ul>
		</nav>
	)
}

export default HeaderMenu