import React, { useState} from "react";
import {Header, Footer, FooterMobile, SliderMobile, AppRouter, FormMobile} from "./components/";
import {mainData} from "./mainData";
import "./style/app.scss";
import "./components/mobile-screen/sliderMobile/_sliderMobile.scss";
import "./style/_AnimatedLink.scss"

const App = () => {

	const [anim, setAnim] = React.useState(false) //переменная, ответственная за анимацию
	const [visiblePopup, setVisiblePopup] = useState(false) //модальное оно на десктопе
	const [visibleFormMobile, setVisibleFormMobile] = useState(false) //модальное оно на мобильных
	const [visibleFormContainer, setVisibleFormContainer] = useState(false)// состояние для темного контейнера


	return (
		<div className="App">
			<main className="container">
				<Header setAnim={setAnim} anim={anim} />
				<section className="content" >
					<AppRouter visiblePopup={visiblePopup}
							   setVisiblePopup={setVisiblePopup}
							   setAnim={setAnim}
							   anim={anim}
							   mainData={mainData}
					/>
				</section>
				<Footer setVisiblePopup={setVisiblePopup}/>

				{/*мобильная версия*/}
				<SliderMobile mainData={mainData}/>
				<FormMobile
					visibleFormMobile={visibleFormMobile}
					setVisibleFormMobile={setVisibleFormMobile}
					setVisibleFormContainer={setVisibleFormContainer}
					visibleFormContainer={visibleFormContainer}
				/>
				<FooterMobile
					setVisibleFormMobile={setVisibleFormMobile}
					setVisibleFormContainer={setVisibleFormContainer}
				/>
			</main>
		</div>
	);
}

export default App;
