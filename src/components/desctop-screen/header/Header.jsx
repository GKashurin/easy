import React, {useState} from "react";
import "./Header.scss"

import {Link, useHistory} from "react-router-dom";
import {OverlayMobile, HeaderMenu, Hamburger} from "../../index";

const Header = ({ setAnim }) => {
	const [burgerOpen, setBurgerOpen] = useState(false);
	const history = useHistory();
	return (
		<header className="header">
			<div className="header__logo">
				<Link
					onClick={
					(e) => {
						e.preventDefault();
						setAnim(false)
						setTimeout(() => history.push("/"), 805);
					}
				}
				to={"#"}
				>
					<img src={"/image/LOGO.svg"} alt={"logo"}/>
				</Link>
			</div>
			<HeaderMenu/>
			<Hamburger
				burgerOpen={burgerOpen}
				setBurgerOpen={setBurgerOpen}
			/>
			<OverlayMobile burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />
		</header>
	)
}

export default Header