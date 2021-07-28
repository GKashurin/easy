import React from "react";
import "./style/app.scss";
import { Route, Switch } from "react-router-dom";
import {Chat, Home, Instamask, Mobile, Tours360, Vfx, Vr, Web} from "./pages";
import {Header, Footer} from "./components/";
import Popup from "./components/Popup";


const App = () => {
	const [anim, setAnim] = React.useState(false) //переменная, ответственная за анимацию



	return (
			<div className="App">
				<main className="container">
					<Header setAnim={setAnim} anim={anim} />
					<section className="content">
						<Switch>
							{/*<Route exact path="/"> <Home setAnim={setAnim} anim={anim}/> </Route>*/}

							{/*<Route path="/web"> <Web setAnim={setAnim} anim={anim}/> </Route>*/}
							{/*<Route path="/instamask"> <Instamask setAnim={setAnim} anim={anim}/> </Route>*/}
							{/*<Route path="/mobile"> <Mobile setAnim={setAnim} anim={anim}/> </Route>*/}
							{/*<Route path="/vr-ar"> <Vr setAnim={setAnim} anim={anim}/> </Route>*/}
							{/*<Route path="/vfx"> <Vfx setAnim={setAnim} anim={anim}/> </Route>*/}
							{/*<Route path="/tours360"> <Tours360 setAnim={setAnim} anim={anim}/> </Route>*/}
							{/*<Route path="/chat"> <Chat setAnim={setAnim} anim={anim}/> </Route>*/}
							<Popup />
						</Switch>
					</section>
					<Footer />
				</main>
			</div>
	);
}

export default App;
