import React, {useState} from "react"
import "./_sliderMobile.scss"
import {useSwipeable} from "react-swipeable";

const SliderMobile = ({mainData, setCollapseGrid}) => {
	const [angle, setAngle] = useState(0);
	const transitionTime = 0.3
	const [activeItem, setActiveItem] = React.useState(0);
	const mainDataFlat = mainData.flat()
	const itemsCount = mainDataFlat.length

	const stepAngle = 360 / itemsCount

	const changeAngle = (angle, deg) => {
		setAngle(angle + deg)
		setCollapseGrid(true)
	}

	const handlers = useSwipeable({
		onSwipedUp: () => {
			changeAngle(angle, -stepAngle);
			setActiveItem((activeItem + 1 + itemsCount) % itemsCount)
		},
		onSwipedDown: () => {
			changeAngle(angle, stepAngle);
			setActiveItem((activeItem - 1 + itemsCount) % itemsCount)
		},
	});

	const current_object = mainDataFlat[activeItem];

	return (
		<>
			<section className="content-mobile"
			>
				<div className="content-mobile__wrapper">
					<div className="content-mobile__col content-mobile__col-left">
						<div {...handlers} className="slider"
							 style={{
								 transform: `translateX(-50%)rotateZ(${angle}deg)`,
								 transition: `transform ${transitionTime}s`
							 }}
						>
							{
								mainDataFlat.map((obj, index) => (
										<div
											className={activeItem === index ? "slider__item" : "slider__item disabled-mobile"}
											key={obj.id}
											style={{
												transform: `rotateZ(calc(${stepAngle}deg * ${index})) translateX(70%) rotateZ(calc(-${stepAngle}deg * ${index} - ${angle}deg))`,
												transition: `transform ${transitionTime}s`,
											}}
										>
											<img style={{
												width: "60%"
											}}
												 src={obj.imageUrl_mobile}
												 alt={obj.link}
											/>
										</div>
									)
								)
							}
						</div>
					</div>
					<div className="content-mobile__col content-mobile__col-right">
						<div key={current_object.id} className="description-wrapper">
							<img src={current_object.h1_Mobile} alt="text"/>
							<pre className="content-mobile__subtitle">{current_object.h4_Mobile}</pre>
							<pre className="content-mobile__text">{current_object.p_Mobile}</pre>
							<div className="gradientOval"></div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default SliderMobile;


