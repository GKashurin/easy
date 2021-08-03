import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import "../style/pages/Home.scss";
import cn from "classnames";
import {Popup} from "../components";

const Home = ({ anim, setAnim, visiblePopup, setVisiblePopup }) => {
	const [animationDisabled, setAnimationDisabled] = useState(false)//ЧБ анимация
	const [animationActive, setAnimationActive] = useState(false)//анимация цветных картинок
	const [items, setItems] = useState([
		[{
			"id": 1,
			"imageUrl": "/image/mask.webp",
			"link": "/instamask",
			"active": true,
			"selector": "active",
		}],
		[{
			"id": 2,
			"imageUrl": "/image/WEB.webp",
			"link": "/web",
			"active": true,
			"selector": "active"
		},
		{
			"id": 3,
			"imageUrl": "/image/mobile.webp",
			"link": "/mobile",
			"active": true,
			"selector": "active"
		}],
		[{
			"id": 4,
			"imageUrl": "/image/AR-VR.webp",
			"link": "/vr-ar",
			"active": true,
			"selector": "active"
		}],
		[{
			"id": 5,
			"imageUrl": "/image/VFX.webp",
			"link": "/vfx",
			"active": true,
			"selector": "active"
		},
		{
			"id": 6,
			"imageUrl": "/image/chat.webp",
			"link": "/chat",
			"active": true,
			"selector": "active"
		}],
		[{
			"id": 7,
			"imageUrl": "/image/3D.webp",
			"link": "/tours360",
			"active": true,
			"selector": "active"
		}]
	]);

	const toggleAnimationDisabled = () => {
		setAnimationDisabled(true)
	}
	const toggleAnimationActive = () => {
		setAnimationActive(true)
	}

	const toggleAnimation = () => {
		toggleAnimationDisabled();
		toggleAnimationActive();
	}

	const history = useHistory();

	return (
		<>
			<div className="activities" >
				{
					items.map((arr, index_r) => (
						<div className="activities__row" key={index_r}> {
							arr.map((elem, idx_r) => (
								<Link onClick={
									(e) => {
										e.preventDefault();
										toggleAnimation();
										setAnim(!anim)
										setTimeout(() => history.push(`${elem.link}`), 1500);
									}
								}
									  className={cn(
										  `${elem.selector}`,{
											  disabled: !elem.active,
											  disabledAnimation: animationDisabled && !elem.active,
											  activeAnimation: animationActive,
										  })}
									  to={"#"}
									  key={elem.id}
								>
									<img key={elem.id}
										 onMouseEnter={() => {
											 setItems(items.map((arr, index_e) => (
												 arr.map((elem, idx_e) => {
													 elem.active = idx_e === idx_r && index_e === index_r;
													 return elem
												 })
											 )))}}
										 onMouseLeave={animationDisabled || animationActive ? null : () => {
											 setItems(items.map(
												 arr => (arr.map(elem => {
														 elem.active = true;
														 return elem;
													 })
												 )
											 ))}}
										 src={elem.imageUrl}
										 alt={elem.link}
									/>
								</Link>
							))
						}</div>
					))
				}
			</div>
			{visiblePopup ? <Popup
				setVisiblePopup={setVisiblePopup}
			/> : null}
		</>
	);
}

export default Home;
