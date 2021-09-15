import React, {useEffect, useState} from "react";
import {Route, Switch, useHistory} from "react-router-dom";
import {Header, Footer, FooterMobile, SliderMobile, AppRouter, FormMobile, Error} from "./components/";
import {mainData} from "./mainData";
import useWindowDimensions from "./hooks/useWindowDimensions";
import "./app.scss";
import "./components/mobile-screen/sliderMobile/_sliderMobile.scss";
import "./components/UI/_AnimatedLink.scss"

const App = () => {

	const [anim, setAnim] = React.useState(false) //переменная, ответственная за анимацию
	const [visiblePopup, setVisiblePopup] = useState(false) //модальное оно на десктопе
	const [visibleFormMobile, setVisibleFormMobile] = useState(false) //модальное оно на мобильных
	const [visibleFormContainer, setVisibleFormContainer] = useState(false)// состояние для темного контейнера
	const [collapseGridMobile, setCollapseGridMobile] = useState(false) //сужение сетки на моб. версии
	const [collapseGridDesktop, setCollapseGridDesktop] = useState(false) //сужение сетки на десктопной версии
	// const [orientationError, setOrientationError] = useState(false) //Если пользователь перевернет мобильный в горионтальную ориентацию, всплывет модалка

	const { width } = useWindowDimensions();
	const history = useHistory()

	if (width <= 550 ) {
		history.push("/mobile-version")
	} else if (width > 550 && width < 560) {
		history.push("/")
	}

	useEffect(() => {//сужение сетки на моб. версии
		setTimeout(() => setCollapseGridMobile(false), 550)
		return () => console.log(".")
	}, [collapseGridMobile])

	useEffect(() => {//сужение сетки на десктопной версии
		setTimeout(() => setCollapseGridDesktop(false), 1550)
		return () => console.log(".")
	}, [collapseGridDesktop])

	return (
		<div className="App">
			<main className="container">
				<Header
					setAnim={setAnim}
					anim={anim}
					setCollapseGridDesktop={setCollapseGridDesktop}
				/>
				<section className="content" >
					<AppRouter visiblePopup={visiblePopup}
							   setVisiblePopup={setVisiblePopup}
							   setAnim={setAnim}
							   anim={anim}
							   mainData={mainData}
							   collapseGridDesktop={collapseGridDesktop}
							   setCollapseGridDesktop={setCollapseGridDesktop}
					/>
				</section>

				<Footer setVisiblePopup={setVisiblePopup}/>

				{/*мобильная версия*/}
				<Switch>
					<Route path="/mobile-version">
						<SliderMobile mainData={mainData} setCollapseGridMobile={setCollapseGridMobile}/>
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
						<Error/>
					</Route>
				</Switch>
			<img className={!collapseGridMobile ? "background-mobile" : "background-mobile background-mobile_collapsed"} src="/image/grid.svg" alt="grid"/>
			</main>
		</div>
	);
}

export default App;
