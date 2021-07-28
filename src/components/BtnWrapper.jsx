import React from "react";
import {Link, useHistory} from "react-router-dom";

const BtnWrapper = ({ anim, setAnim, setVisiblePopup }) => {
	const history = useHistory()
	return (
		<div className="info__btnWrapper">
			<div className="info__nav">
				<Link className="info__link animated-button"
					  style={{padding: 0}}
					  onClick={
						  (e) => {
							  e.preventDefault();
							  setAnim(!anim)
							  setTimeout(() => history.push("/"), 805);
						  }
					  }
					  to="#"
				>
					<svg
						width="23"
						height="41"
						viewBox="0 0 23 41"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M5.19715 20.5C6.16673 18.884 21.8416 4.34025 22.1648 3.20907C22.6496 1.9163 21.5184 0.62352 20.0641 0.946714C19.2561 1.10831 15.701 4.82504 14.893 5.63303C13.277 7.249 11.8226 8.70337 10.0451 10.4809C8.42909 12.0969 6.81312 13.7129 5.19715 15.3288C-1.10513 21.6311 -1.42833 19.0456 10.0451 30.519C11.3378 31.8117 19.0945 39.8916 19.9025 40.0532C21.3568 40.3764 22.488 39.0836 21.8416 37.6292C21.5184 36.6596 5.84354 21.7927 5.03555 20.5H5.19715Z"
						/>
					</svg>
				</Link>
			</div>
			<button onClick={() => setVisiblePopup(true)} className="info__btn animated-button">Обсудить проект</button>
		</div>
	)
}

export default BtnWrapper