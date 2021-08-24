import React from 'react';
import "./_Team.scss"
import {Popup, TeamSlider} from "../../components";

const Team = ({visiblePopup, setVisiblePopup}) => {
	return (
		<>
			<div className="team">
				<div className="team__description description-team">
					<div className="description-team">
						<div className="description-team__col">
							<img src="/image/logo-team.svg" alt=""/>
						</div>
						<div className="description-team__col">
							<h1 className="description-team__title">
								Что делаем? <br/>Абы что не делаем.
							</h1>
							<h6 className="description-team__subtitle">
								<span>“</span>
								Бесконечно можно смотреть на три вещи: горящий огонь, бегущую воду и на ожидаемый результат работы нашей команды.
							</h6>
							<div className="description-team__signature signature">
								<div className="signature__col">
									<img src="/image/logo-team.svg" alt=""/>
								</div>
								<div className="signature__col">
									<div>EASY CG</div>
									<div>Команда full-stack разработчиков</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<TeamSlider />
			</div>
			{visiblePopup ? <Popup
				setVisiblePopup={setVisiblePopup}
			/> : null}
		</>
	);
};

export default Team;