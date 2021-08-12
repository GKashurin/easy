import React from "react";
import "./Footer.scss"
import {Link} from "react-router-dom";


const Footer = ({setVisiblePopup}) => {
	return (
		<footer className="footer">
			<div className="footer__contacts contacts">
				<address>
					<Link to="#">
						620144, г. Екатеринбург. ул. Степана Разина, 2, оф. 6
					</Link>
				</address>
				<div>
					<a href="mailto:namaste@easycg.ru">namaste@easycg.ru, </a>
					<a href="tel:3435215031">+7 (343) 521-50-31</a>
				</div>
			</div>
			<div className="footer__socials socials">
				<div className="socials__item">
					<Link to={"https://www.instagram.com/easy.cg/"}
						className="socials__link animated-button"
					>
						<svg
							width="16"
							height="16"
							viewBox="-1 0 16 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M7.38905 13.5554C5.28523 13.5554 2.56564 13.6324 1.92423 11.6312C1.43676 10.1431 1.71898 6.03808 1.71898 4.34476C1.71898 3.44678 2.15514 2.77972 2.69393 2.39487C3.61756 1.7278 6.08057 1.49689 7.64562 1.7278C8.364 1.83043 11.3145 1.75346 11.6993 1.9074C12.9052 2.36921 13.1361 3.60072 13.29 4.62698C13.5979 6.47424 13.8288 11.5799 12.3151 12.8114C11.7763 13.2475 8.51794 13.5298 7.38905 13.5298V13.5554ZM0 5.75586C0 7.96232 0 11.349 0.71838 12.914C1.07757 13.7094 1.66767 14.3251 2.56564 14.6073C4.7721 15.2744 7.90218 14.8896 10.2369 14.8896C11.8276 14.8896 12.5203 14.9152 13.444 14.1712C14.188 13.5554 14.5472 12.6831 14.8294 11.6055C14.9577 11.0667 15.0347 10.5023 15.1116 9.9122C15.163 9.57867 15.1116 9.24514 15.1373 8.9116C15.2399 7.93666 15.2143 7.26959 15.1373 6.29465C15.0347 5.01183 15.3939 3.4981 14.188 1.80477C12.4947 -0.581277 8.21006 0.0857907 5.20826 0.0857907C1.69332 0.0857907 0.0256564 1.59952 0.0256564 5.75586H0Z"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M7.23474 5.39566C10.1596 5.39566 10.2622 7.90999 9.28726 9.11584C8.54322 10.0395 6.82424 10.0651 5.90061 9.16715C4.59213 7.88433 5.46445 5.42131 7.20909 5.42131L7.23474 5.39566ZM3.61719 7.52514C3.61719 9.32109 4.38688 10.5526 5.90061 11.1427C9.15898 12.3742 12.5969 9.75725 11.2371 6.13969C11.1602 5.93444 11.0576 5.70353 10.9293 5.52394C10.6214 5.06212 10.4161 4.85687 9.95433 4.52334C9.72342 4.34374 9.56948 4.26677 9.31292 4.13849C7.02949 3.03526 3.61719 4.3694 3.61719 7.5508V7.52514Z"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M10.8789 3.62719C10.8789 3.8581 10.8789 3.93507 11.0585 4.11466C11.6229 4.65345 12.3413 3.80678 11.9052 3.31931C11.6229 3.01143 10.8789 3.11406 10.8789 3.65285V3.62719Z"
								strokeWidth="0.994007"
								strokeMiterlimit="22.9256"
							/>
						</svg>
					</Link>
				</div>
				<div className="socials__item">
					<Link to={"https://t.me/easy_cg"}
						className="socials__link animated-button"
					>
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 14"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M11.1182 3.65182C10.8616 4.01101 10.7847 4.11364 10.4768 4.42152L6.73095 7.83382C5.88429 8.65483 6.01258 8.44958 6.01258 10.0146C5.26854 9.80937 4.80672 7.75685 4.75541 7.19241C5.9356 6.62797 5.55076 7.03847 7.19277 5.93525C7.44934 5.75565 7.65459 5.60171 7.93681 5.42212C8.57822 5.01161 10.3485 3.72879 11.1439 3.65182H11.1182ZM0.111595 6.16615C0.111595 6.34575 0.676038 6.75625 0.829976 6.85888C2.83118 7.88513 3.57522 6.11484 4.72976 10.3482C4.83238 10.6817 5.42248 12.4007 5.67904 12.4007C6.57702 12.4007 7.34671 11.1178 8.27034 10.5021C9.32226 11.0665 11.5544 13.0934 12.1958 13.0934C13.1451 13.0934 13.3247 11.7849 13.6325 10.5021C13.8378 9.68108 15.4285 1.72759 15.4285 0.957897C15.4285 -0.14533 14.6845 -0.119673 13.6582 0.29083L9.73276 1.88153C9.01438 2.16375 8.37297 2.369 7.65459 2.65122L0.547754 5.21687C0.239877 5.34515 0.0859375 5.78131 0.0859375 6.16615H0.111595Z"
							/>
						</svg>
					</Link>
				</div>
				<div className="socials__item">
					<Link to={"https://clck.ru/VC5TX"}
						className="socials__link animated-button"
					>
						<svg
							width="16"
							height="16"
							viewBox="0 0 15 15"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								clipRule="evenodd"
								d="M1.86662 7.73063C1.86662 3.08682 6.20256 0.880362 9.89708 2.2145C10.3846 2.39409 11.2056 2.83025 11.5648 3.13813C11.9753 3.52297 12.4627 4.06176 12.7193 4.57489C13.3864 5.90902 13.2581 6.78134 13.2581 8.26941C13.2581 11.5021 9.38396 14.1704 6.07428 13.0159C4.89408 12.6054 4.53489 11.9639 2.55934 12.9132C2.55934 11.3738 3.43166 11.81 2.30278 9.47527C2.09753 9.06476 1.86662 8.29507 1.86662 7.70497V7.73063ZM0.532486 6.47346C0.532486 7.8076 0.558142 9.06476 1.04561 10.2963C1.48177 11.4508 1.4048 11.6048 0.814706 13.1185C0.635111 13.5546 0.275922 14.5552 0.224609 14.9657C1.32784 14.9657 3.22641 14.0165 4.07307 14.0165C4.79145 14.0165 7.33144 15.5045 10.5898 14.1704C12.9759 13.1955 14.9257 10.7837 14.9257 8.11548V7.16619C14.9257 4.57489 13.0528 1.85531 10.8207 0.829049C7.74194 -0.607711 4.22701 0.367233 2.04622 2.85591C1.27652 3.72823 0.532486 5.16499 0.532486 6.44781V6.47346Z"
							/>
							<path
								clipRule="evenodd"
								d="M4.15039 4.96044C4.15039 6.96164 4.43261 8.06487 5.81806 9.34769C6.02331 9.52728 6.33119 9.78385 6.5621 9.93779C6.84432 10.143 7.07522 10.2713 7.3831 10.4509C10.2823 12.2212 12.6427 9.93779 10.7954 8.68062C10.4106 8.3984 9.10208 7.70568 9.10208 8.96284C8.07583 8.96284 7.33179 8.62931 6.69038 7.83396C5.74109 6.60245 6.66472 7.26952 6.66472 5.57619C6.66472 3.44671 4.15039 3.19014 4.15039 4.93478V4.96044Z"
							/>
						</svg>
					</Link>
				</div>
				<button className="socials__button animated-button" onClick={(() => setVisiblePopup(true))}>
					отправить запрос
				</button>
			</div>
		</footer>
	)
}

export default Footer
