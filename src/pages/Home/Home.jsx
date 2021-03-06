import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import cn from "classnames";
import ReactImageFallback from "react-image-fallback";
import {Popup} from "../../components/";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import "./Home.scss";

const Home = ({ setAnim, visiblePopup, setVisiblePopup, mainData, collapseGridDesktop, setCollapseGridDesktop }) => {
	const [animationDisabled, setAnimationDisabled] = useState(false)//ЧБ анимация
	const [animationActive, setAnimationActive] = useState(false)//анимация цветных картинок
	const [items, setItems] = useState(mainData);

	const toggleAnimationDisabled = () => {
		setAnimationDisabled(true)
	}
	const toggleAnimationActive = () => {
		setAnimationActive(true)
	}
	const toggleAnimationGrid = () => {
		setCollapseGridDesktop(true)
	}

	const toggleAnimation = () => {
		toggleAnimationDisabled();
		toggleAnimationActive();
		toggleAnimationGrid()
	}

	const history = useHistory();
	const { width } = useWindowDimensions();

	return (
		<>
			<div className={!collapseGridDesktop ? "background-desktop" : "background-desktop background-desktop_collapsed"} style={{
				height: "100%",
				background: "url(/image/Background.svg)",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
				display: "flex",
				alignItems: "center",
			}}>
				<div className="activities" >
					{
						items.map((arr, index_r) => (
							<div className="activities__row" key={index_r}> {
								arr.map((elem, idx_r) => (
									<Link onClick={
										e => {
											e.preventDefault();
											toggleAnimation();
											setAnim(true)
											setTimeout(() => {
												history.push(`${elem.link}`);
												setAnim(false)
												setItems(items.map(
													arr => (arr.map(elem => {
															elem.active = true;
															return elem;
														})
													)
												))
											}, 1500)
										}
									}
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
										  className={cn(
											  `${elem.selector}`,{
												  disabled: !elem.active,
												  disabledAnimation: animationDisabled && !elem.active,
												  activeAnimation: animationActive,
											  })}
										  to={"#"}
										  key={elem.id}
									>
										<img className="png"
											src={elem.imageUrl}
											alt={elem.link}
										/>

										{width > 1025 ? <ReactImageFallback
											className="webp"
											fallbackImage={elem.imageUrl}
											src={elem.webpUrl}
											initialImage={elem.imageUrl}
											alt={elem.link}
										/> :
											<img className="webp"
												 src={elem.imageUrl}
												 alt={elem.link}
											/>}
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
