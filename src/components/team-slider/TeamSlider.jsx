import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, {Navigation} from 'swiper/core';
import "./_TeamSlider.scss"

SwiperCore.use([Navigation]);

const TeamSlider = () => {
	return (
		<Swiper
			className="slider-team"
			navigation={true}

			onSlideChange={() => console.log("slide change")}
			onSwiper={(swiper) => console.log(swiper)}
		>
			<SwiperSlide>
				Бесконечно можно смотреть на три вещи: горящий огонь, бегущую воду и на ожидаемый результат работы нашей команды. Бесконечно можно смотреть на три вещи: горящий огонь, бегущую воду и на ожидаемый результат работы нашей команды.
			</SwiperSlide>
			<SwiperSlide>
				Slide 2 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
			</SwiperSlide>
			<SwiperSlide>Slide 3</SwiperSlide>
			<SwiperSlide>Slide 4</SwiperSlide>
			<SwiperSlide>Slide 5</SwiperSlide>
			<SwiperSlide>Slide 6</SwiperSlide>
			<SwiperSlide>Slide 7</SwiperSlide>
			<SwiperSlide>Slide 8</SwiperSlide>
			...
		</Swiper>
	);
};

export default TeamSlider;