import React from "react";
import "./HeaderMenu.scss"

const HeaderMenu = () => {
	return (
		<nav>
			<ul className="headerMenu">
				<li className="headerMenu__item">
					<address>
						<a href="mailto:hello@easycgmailto:namaste@easycg.ru"
							className="animated-link"
						>
							<img src={"/image/Mail.svg"} alt={"mail"}/>
							<span>namaste@easycg.ru</span>
						</a>
					</address>
				</li>
				<li className="headerMenu__item">
					<address>
						<a href="tel: 3435215031"
							className="animated-link">
							<img src={"/image/Tel.svg"} alt={"phone"}/>
							<span>+7 (343) 521-50-31</span>
						</a>
					</address>
				</li>
			</ul>
		</nav>
	)
}

export default HeaderMenu