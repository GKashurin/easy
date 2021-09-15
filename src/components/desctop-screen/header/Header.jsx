import React, {useState} from "react";
import "./Header.scss"

import {Link, useHistory} from "react-router-dom";
import {OverlayMobile, HeaderMenu, Hamburger} from "../../index";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const Header = ({ setAnim, setCollapseGridDesktop }) => {
	const [burgerOpen, setBurgerOpen] = useState(false);
	const history = useHistory();
	const { width } = useWindowDimensions();

	return (
		<header className="header">
			<div className="header__logo">
				<Link
					onClick={
					e => {
						e.preventDefault();
						setAnim(true);
						history.location.pathname !== "/" ? setCollapseGridDesktop(true) : setCollapseGridDesktop(false)
						setTimeout(() => {
							setCollapseGridDesktop(false);
							if (width <= 550 ) {
								history.push("/mobile-version");
							} else {
								history.push("/");
							}
						}, 1505);
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