import React, {useState} from "react";
import "./style/app.scss";
import { Route, Switch } from "react-router-dom";
import {Chat, Home, Instamask, Mobile, Tours360, Vfx, Vr, Web} from "./pages";
import {Header, Footer} from "./components/";

//инпуты, баттоны, свг сделать отдельными компонентами

const App = () => {
	const [anim, setAnim] = React.useState(false) //переменная, ответственная за анимацию
	const [visiblePopup, setVisiblePopup] = useState(false)

	return (
			<div className="App">
				<main className="container">
					<Header setAnim={setAnim} anim={anim} />
					<section className="content">
						<Switch>
							<Route exact path="/"> <Home setAnim={setAnim} anim={anim}/> </Route>
							<Route path="/web">
								<Web visiblePopup={visiblePopup}
									 setVisiblePopup={setVisiblePopup}
									 setAnim={setAnim}
									 anim={anim}
								/>
							</Route>
							<Route path="/instamask">
								<Instamask visiblePopup={visiblePopup}
										   setVisiblePopup={setVisiblePopup}
										   setAnim={setAnim}
										   anim={anim}
								/>
							</Route>
							<Route path="/mobile">
								<Mobile visiblePopup={visiblePopup}
										setVisiblePopup={setVisiblePopup}
										setAnim={setAnim}
										anim={anim}
								/>
							</Route>
							<Route path="/vr-ar">
								<Vr visiblePopup={visiblePopup}
									setVisiblePopup={setVisiblePopup}
									setAnim={setAnim}
									anim={anim}
								/>
							</Route>
							<Route path="/vfx">
								<Vfx visiblePopup={visiblePopup}
									 setVisiblePopup={setVisiblePopup}
									 setAnim={setAnim}
									 anim={anim}
								/>
							</Route>
							<Route path="/tours360">
								<Tours360 visiblePopup={visiblePopup}
									 setVisiblePopup={setVisiblePopup}
									 setAnim={setAnim}
									 anim={anim}
								/>
							</Route>
							<Route path="/chat">
								<Chat visiblePopup={visiblePopup}
									 setVisiblePopup={setVisiblePopup}
									 setAnim={setAnim}
									 anim={anim}
								/>
							</Route>
						</Switch>
					</section>
					<Footer />
				</main>
			</div>
	);
}

export default App;
