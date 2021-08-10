import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import "./Home.scss";
import cn from "classnames";
import {Popup} from "../../components/";
import ReactFreezeframe from 'react-freezeframe';
// import pic from ""


const Home = ({ anim, setAnim, visiblePopup, setVisiblePopup, homePageState }) => {
	const [animationDisabled, setAnimationDisabled] = useState(false)//ЧБ анимация
	const [animationActive, setAnimationActive] = useState(false)//анимация цветных картинок
	const [items, setItems] = useState(homePageState);

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
			<div style={{
				background: "url(/image/Background.png)",
				backgroundSize: "100%",
				width: "80%",
				margin: "0 auto"
			}}>
				<div className="activities" >
					{/*<ReactFreezeframe src="/image/mask.webp" />*/}
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
										<ReactFreezeframe key={elem.id}
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
			</div>
			{visiblePopup ? <Popup
				setVisiblePopup={setVisiblePopup}
			/> : null}
		</>
	);
}

export default Home;