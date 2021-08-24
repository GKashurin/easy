import React from 'react';
import "./_Hamburger.scss"

const Hamburger = ({burgerOpen ,setBurgerOpen}) => {
	return (
		<div className={!burgerOpen ? "hamburger" : "hamburger hamburger--active"}
			 onClick={() => setBurgerOpen(!burgerOpen)}
		>
			<span className="hamburger__plank"></span>
			<span className="hamburger__plank"></span>
			<span className="hamburger__plank"></span>
		</div>
	);
};

export default Hamburger;