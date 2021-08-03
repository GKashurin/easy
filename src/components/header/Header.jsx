import React from "react";
import "./Header.scss"
import HeaderMenu from "../headerMenu/HeaderMenu";
import {Link, useHistory} from "react-router-dom";

const Header = ({ setAnim }) => {
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
		</header>
	)
}

export default Header