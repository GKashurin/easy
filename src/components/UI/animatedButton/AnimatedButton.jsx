import React from "react";
import "./_AnimatedButton.scss"

const AnimatedButton = ({ children, ...props }) => {
	return (
		<button {...props} className="animated-button_blick">{children}</button>
	)
}

export default AnimatedButton