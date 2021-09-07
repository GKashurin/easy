import React, {useEffect, useState} from "react";
import {Route, Switch, useHistory} from "react-router-dom";
import {Header, Footer, FooterMobile, SliderMobile, AppRouter, FormMobile} from "./components/";
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
	const [collapseGrid, setCollapseGrid] = useState(false)

	const { height, width } = useWindowDimensions();
	const history = useHistory()

	if (width <= 550 ) {
		history.push("/mobile-version")
	} else if (width > 550 && width < 600) {
		history.push("/")
	}

	useEffect(() => {
		setTimeout(() => setCollapseGrid(false), 550)
	}, [collapseGrid])

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
						<SliderMobile mainData={mainData} setCollapseGrid={setCollapseGrid}/>
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
			<img className={!collapseGrid ? "background-mobile" : "background-mobile background-mobile_collapsed"} src="/image/grid.svg" alt="grid"/>
			</main>
		</div>
	);
}

export default App;
