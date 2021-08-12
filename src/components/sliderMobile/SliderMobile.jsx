import React, {useState} from "react"
import "./_sliderMobile.scss"
import { homePageState } from "../../pages/mainData"

const SliderMobile = () => {
	const [angle, setAngle] = useState(0);
 	const transitionTime = 0.3

	return (
		<div className="slider">
			<div className="slider__center"
				 onClick={() => setAngle(angle => angle + 51.42857)}
				 style={{
				 	transform: `rotateZ(${angle}deg)`,
					transition: `transform ${transitionTime}s`
				 }}
			>
				{
					homePageState.flat().map((obj, index) => (
						<div className="slider__item"
							 key={obj.id}
							style={{
								transform: `rotateZ(calc(51.42857deg * ${index})) translateY(100px) rotateZ(calc(-51.42857deg * ${index} - ${angle}deg))`,
								transition: `transform ${transitionTime}s`
							}}
						><img
							src={obj.imageUrl}
							alt={obj.link}
							width="90px"
							height="90px"
						/>
						</div>
						)
					)
				}
			</div>
		</div>
	)
}

export default SliderMobile;

