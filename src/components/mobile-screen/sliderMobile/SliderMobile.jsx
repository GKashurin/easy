import React, {useState} from "react"
import "./_sliderMobile.scss"
import {useSwipeable} from "react-swipeable";

const SliderMobile = ({mainData}) => {
	const [angle, setAngle] = useState(0);
	const transitionTime = 0.3
	const [activeItem, setActiveItem] = React.useState(0);
	const mainDataFlat = mainData.flat()
	const itemsCount = mainDataFlat.length

	const stepAngle = 360 / itemsCount

	const changeAngle = (angle, deg) => {
		setAngle(angle + deg)
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

	return (
		<div {...handlers} className="slider">
			<div className="slider__wrapper">
				<div className="slider__center"
					 style={{
						 transform: `rotateZ(${angle}deg)`,
						 transition: `transform ${transitionTime}s`
					 }}
				>
					{
						mainDataFlat.map((obj, index) => (
							<div

								className={activeItem === index ? "slider__item" : "slider__item_disabled"}
								key={obj.id}
								style={{
									transform: `rotateZ(calc(${stepAngle}deg * ${index})) translateX(25vh) rotateZ(calc(-${stepAngle}deg * ${index} - ${angle}deg))`,
									transition: `transform ${transitionTime}s`,
								}}
							>
								<img style={{
									width: "25vw",
									height: "25vw",
								}}
									 src={obj.imageUrl}
									 alt={obj.link}
								/>
							</div>
							)
						)
					}
				</div>
			</div>
			{mainDataFlat.map((obj, index) => (
				<div key={obj.id} className="slider__description infoMobile">
					{
						activeItem === index ?
							<div>
								<h1>
									<span>{obj.h1_Mobile["1"]}</span>
									<span>{obj.h1_Mobile["2"]}</span>
									<span>{obj.h1_Mobile["3"]}</span>
								</h1>
								<h4>{obj.h4_Mobile}</h4>
								<p>{obj.p_Mobile}</p>
							</div>
							: null
					}
				</div>
			))}
			<div className="gradientOval"></div>
		</div>
	)
}

export default SliderMobile;