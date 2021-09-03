import React from 'react';
import { Route, Switch} from "react-router-dom";
import {Chat, Home, Instamask, Mobile, Team, Tours360, Vfx, Vr, Web} from "../../pages";

const AppRouter = ({visiblePopup, setVisiblePopup, setAnim, anim, mainData}) => {
	return (
		<Switch>
			<Route exact path="/">
				<Home
					mainData={mainData}
					setAnim={setAnim}
					anim={anim}
					setVisiblePopup={setVisiblePopup}
					visiblePopup={visiblePopup}
				/>
			</Route>

			<Route path="/team">
				<Team visiblePopup={visiblePopup} setVisiblePopup={setVisiblePopup}/>
			</Route>

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
					  anim={anim}
				/>
			</Route>
			{/*<Redirect to="/"/>*/}
		</Switch>
	);
};

export default AppRouter;