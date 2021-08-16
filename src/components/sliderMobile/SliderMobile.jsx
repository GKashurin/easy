import React, {useState} from "react"
import "./_sliderMobile.scss"
import { useSwipeable } from "react-swipeable";

const SliderMobile = ({mainData}) => {
	const [angle, setAngle] = useState(0);
	const transitionTime = 0.3
	const [activeItem, setActiveItem] = React.useState(5);
	const mainDataFlat = mainData.flat()

	const onSelectItem = (index) => {
		setActiveItem(index);
	};

	const handlers = useSwipeable({

		preventDefaultTouchmoveEvent: true,
		trackMouse: true
	});

	return (
		<div className="slider">
			<div {...handlers} className="slider__wrapper">
							<div className="slider__center"
								 onClick={() => setAngle(angle => angle + 51.42857)}
								 style={{
									 transform: `rotateZ(${angle}deg)`,
									 transition: `transform ${transitionTime}s`
								 }}
							>
								{
									mainDataFlat.map((obj, index) => (
											<div onClick={() => onSelectItem(index)}
												 className={activeItem === index ? "slider__item" : "slider__item_disabled"}
												 key={obj.id}
												 style={{
													 transform: `rotateZ(calc(51.42857deg * ${index})) translateY(28vw) rotateZ(calc(-51.42857deg * ${index} - ${angle}deg))`,
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
							<div className="slider__description infoMobile">
								{
									activeItem === index ?
										<div>
											<h1>
												<span>{obj.h1_Mobile["1"]}</span><br/>
												<span>{obj.h1_Mobile["2"]}</span><br/>
												<span>{obj.h1_Mobile["3"]}</span><br/>
											</h1>
											<h4>{obj.h4_Mobile}</h4>
											<p>{obj.p_Mobile}</p>
										</div>
										: null
								}
							</div>
						))}
					</div>
				)
			}

			export default SliderMobile;

