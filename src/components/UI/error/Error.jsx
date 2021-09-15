import React from 'react';
import "./Error.scss"

const Error = () => {
	return (
		<div className="error__wrapper">
			<img src={"/image/rotation.svg"} alt={"rotation"}/>
			<div>ПОЖАЛУЙСТА, РАЗВЕРНИТЕ ТЕЛЕФОН ВЕРТИКАЛЬНО</div>
			<span>ЭТО ТРЕБУЕТСЯ ДЛЯ КОРРЕКТНОЙ РАБОТЫ НАШЕГО САЙТА</span>
		</div>
	);
};

export default Error;