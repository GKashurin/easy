import React, { useState} from "react";
import {Header, Footer, FooterMobile, Popup, SliderMobile, AppRouter} from "./components/";
import {mainData} from "./mainData";
import "./style/app.scss";
import "./components/mobile-screen/sliderMobile/_sliderMobile.scss";
import "./style/_AnimatedLink.scss"

const App = () => {

	const [anim, setAnim] = React.useState(false) //переменная, ответственная за анимацию
	const [visiblePopup, setVisiblePopup] = useState(false)

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
				{visiblePopup ? <Popup
					setVisiblePopup={setVisiblePopup}
				/> : null}
				<FooterMobile setVisiblePopup={setVisiblePopup}/>
			</main>
		</div>
	);
}

export default App;
