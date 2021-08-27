import React, {useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, {Controller, Navigation} from 'swiper/core';
import "./_TeamSlider.scss"

SwiperCore.use([Navigation, Controller]);

const TeamSlider = ({teamData, setTeamData}) => {
	const [controlledSwiper, setControlledSwiper] = useState(null)

	return (
		<Swiper
			controller={{control: controlledSwiper}}
			autoHeight={true}
			className="slider-team"
			navigation={true}
			loop={true}
			onSlideChange={(swiper) => {
				console.log(swiper)
					setTeamData(teamData.map((elem, index) =>
					swiper.activeIndex % teamData.length === index
						?
						{...elem, active: true }
						:
						{...elem, active: false }))
				}
			}
				onSwiper={setControlledSwiper}
		>
			{teamData.map((person, i) => <SwiperSlide key={person.id}>{person.description}</SwiperSlide>)}
			<br/>
		</Swiper>
	);
};

export default TeamSlider;