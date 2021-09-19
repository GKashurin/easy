import React from 'react';
import { Route, Switch} from "react-router-dom";
import {Chat, Home, Instamask, Mobile, Tours360, Vfx, Vr, Web} from "../../pages";

const AppRouter = ({visiblePopup, setVisiblePopup, setAnim, anim, mainData, collapseGridDesktop, setCollapseGridDesktop}) => {
	return (
		<Switch>
			<Route exact path="/">
				<Home
					mainData={mainData}
					setAnim={setAnim}
					anim={anim}
					setVisiblePopup={setVisiblePopup}
					visiblePopup={visiblePopup}
					collapseGridDesktop={collapseGridDesktop}
					setCollapseGridDesktop={setCollapseGridDesktop}
				/>
			</Route>
			<Route path="/sozdanie-web-prilozhenij">
				<Web visiblePopup={visiblePopup}
					 setVisiblePopup={setVisiblePopup}
					 collapseGridDesktop={collapseGridDesktop}
					 anim={anim}
				/>
			</Route>
			<Route path="/zakazat-instagram-masku">
				<Instamask visiblePopup={visiblePopup}
						   setVisiblePopup={setVisiblePopup}
						   collapseGridDesktop={collapseGridDesktop}
						   anim={anim}
				/>
			</Route>
			<Route path="/razrabotka-mobilnykh-prilozhenij">
				<Mobile visiblePopup={visiblePopup}
						setVisiblePopup={setVisiblePopup}
						collapseGridDesktop={collapseGridDesktop}
						anim={anim}
				/>
			</Route>
			<Route path="/razrabotka-virtualnoj-realnosti-vr">
				<Vr visiblePopup={visiblePopup}
					setVisiblePopup={setVisiblePopup}
					collapseGridDesktop={collapseGridDesktop}
					anim={anim}
				/>
			</Route>
			<Route path="/sozdaem-vizualnye-effekty-vfx">
				<Vfx visiblePopup={visiblePopup}
					 setVisiblePopup={setVisiblePopup}
					 collapseGridDesktop={collapseGridDesktop}
					 anim={anim}
				/>
			</Route>
			<Route path="/proektirovanie-i-razrabotka-3d-modelej-tury-360">
				<Tours360 visiblePopup={visiblePopup}
						  setVisiblePopup={setVisiblePopup}
						  collapseGridDesktop={collapseGridDesktop}
						  anim={anim}
				/>
			</Route>
			<Route path="/razrabotka-chat-botov">
				<Chat visiblePopup={visiblePopup}
					  setVisiblePopup={setVisiblePopup}
					  anim={anim}
					  collapseGridDesktop={collapseGridDesktop}
				/>
			</Route>
		</Switch>
	);
};

export default AppRouter;