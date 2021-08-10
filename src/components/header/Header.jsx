import React, {useState} from "react";
import "./Header.scss"
import { Divide as Hamburger } from "hamburger-react";
import {Link, useHistory} from "react-router-dom";
import {OverlayMobile, HeaderMenu} from "../index";

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
					<img src={"/image/logo.png"} alt={"logo"}/>
				</Link>
			</div>
			<HeaderMenu/>
			<div className="burger">
				<Hamburger size={25} toggled={burgerOpen} toggle={setBurgerOpen} />
			</div>
			{burgerOpen ? <OverlayMobile burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} /> : null}
		</header>
	)
}

export default Header