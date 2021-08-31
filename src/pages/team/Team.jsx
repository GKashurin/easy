import React from 'react';
import "./_Team.scss"
import {Popup, TeamSlider} from "../../components";

const Team = ({visiblePopup, setVisiblePopup}) => {
	const [teamData, setTeamData] = React.useState([
		{
			id: "Tony",
			url: "/image/logo-team.svg",
			active: false,
			description: "Tony is a real man"
		},
		{
			id: "Egor",
			url: "/image/logo.png",
			active: false,
			description: "Egor is a real man"
		},
		{
			id: "Nikita",
			url: "/image/logo_mobile.jpg",
			active: false,
			description: "Nikita is a real man"
		},
	]);



	return (
		<>
			<div className="team">
				<div className="team__description description-team">
					<div className="description-team">
						<div className="description-team__col">
							{
								teamData.map((person, index) =>
									<img
										onClick={() => setTeamData(
											teamData.map((elem, idx) => {
												elem.active = idx === index;
												return elem
											})
										)}
										src={person.url}
										alt={person.id}
										key={person.url}
										className={person.active ? "person-active" : "person-disabled"}
									/>
								)
							}
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
				<TeamSlider teamData={teamData} setTeamData={setTeamData}/>
			</div>
			{visiblePopup ? <Popup
				setVisiblePopup={setVisiblePopup}
			/> : null}
		</>
	);
};

export default Team;