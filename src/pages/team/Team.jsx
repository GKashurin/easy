import React from 'react';
import "./_Team.scss"
import {Popup} from "../../components";

const Team = ({visiblePopup, setVisiblePopup}) => {
	return (
		<>
			<div className="team">
				<div className="team__wrapper"
					 style={{
					 	backgroundImage: "url(/image/Smoke.webp)",
						backgroundSize: "cover",
					 	backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
					 }}
				>
					<div
						style={{
						backgroundImage: "url(/image/SmokeText.svg)",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
					}}
						className="team__textWrapper">

					</div>
				</div>
			</div>
			{visiblePopup ? <Popup
				setVisiblePopup={setVisiblePopup}
			/> : null}
		</>
	);
};

export default Team;