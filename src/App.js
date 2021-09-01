import React, { useState} from "react";
import {Route, Switch, useHistory} from "react-router-dom";
import {Header, Footer, FooterMobile, SliderMobile, AppRouter, FormMobile} from "./components/";
import {mainData} from "./mainData";
import useWindowDimensions from "./hooks/useWindowDimensions";
import "./style/app.scss";
import "./components/mobile-screen/sliderMobile/_sliderMobile.scss";
import "./style/_AnimatedLink.scss"

const App = () => {

	const [anim, setAnim] = React.useState(false) //переменная, ответственная за анимацию
	const [visiblePopup, setVisiblePopup] = useState(false) //модальное оно на десктопе
	const [visibleFormMobile, setVisibleFormMobile] = useState(false) //модальное оно на мобильных
	const [visibleFormContainer, setVisibleFormContainer] = useState(false)// состояние для темного контейнера
	const { height, width } = useWindowDimensions();
	const history = useHistory()

	if (width <= 550 || height <= 550) {
		history.push("/mobile-version")
	} else if (width > 550 && height > 550) {
		history.push("/")
	}

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
				<Switch>
					<Route path="/mobile-version">
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
					</Route>
				</Switch>
			</main>
		</div>
	);
}

export default App;
