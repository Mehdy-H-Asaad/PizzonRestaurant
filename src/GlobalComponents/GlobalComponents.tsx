import styled from "styled-components";
import { DarkColor, MainTransition, YellowColor } from "../Styles/Styles";
import PagePathImg from "../Assets/imgs/pages-banner-7.jpg";

export const Container = styled.div.attrs(() => ({
	className: "container",
}))``;

export const Col = styled.div.attrs(props => ({
	className: props.className,
}))``;

export const Row = styled.div.attrs(() => ({
	className: "row",
}))``;

export const MainButton = styled.button`
	text-transform: uppercase;
	background-color: #fd9d3e;
	width: fit-content;
	color: #fff;
	padding: 20px 40px;
	margin: 20px auto;
	border-radius: 40px;
	cursor: pointer;
	text-decoration: none;
	font-weight: bold;
	outline: none;
	border: 0;
`;

export const SecondButton = styled.button`
	text-transform: uppercase;
	background-color: ${DarkColor};
	width: fit-content;
	color: #fff;
	padding: 20px 40px;
	margin: 20px auto;
	border-radius: 40px;
	cursor: pointer;
	text-decoration: none;
	font-weight: bold;
	outline: none;
	border: 0;
`;

export const TopSectionImg = styled.img.attrs(() => ({
	className: "img-fluid",
}))`
	position: absolute;
	bottom: -1px;
`;

export const BottomSectionImg = styled.img.attrs(() => ({
	className: "img-fluid",
}))`
	position: absolute;
	transform: rotate(180deg);
	top: 99%;
`;

export const MainTitle = styled.div`
	margin: 0 auto;
	display: block;
	width: fit-content;
	h6 {
		font-family: "Pacifico", Sans-serif;
		text-transform: capitalize;
		font-size: 24px;
		color: ${YellowColor};
		text-align: center;
	}
	h3 {
		text-transform: uppercase;
		font-weight: bold;
		font-size: 40px;
		text-align: center;
		@media (max-width: 767px) {
			font-size: 30px;
		}
	}
	h3.dark-color {
		color: ${DarkColor};
	}
	h3.light-color {
		color: #fff;
	}
`;

export const PagePath = styled.div.attrs(props => ({
	children: props.children,
}))`
	padding: 100px 0;
	margin-bottom: 50px;
	position: relative;
	&::before {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-color: #121619;
		opacity: 0.8;
	}
	background-image: url(${PagePathImg});
	background-repeat: no-repeat;
	background-position: center;
	margin-bottom: 100px;
	h3 {
		position: relative;
		color: #fff;
		margin: 0 auto;
		width: fit-content;
		text-transform: uppercase;
		font-size: 35px;
		letter-spacing: 3px;
		font-family: "Anton", sans-serif;
	}
	h6 {
		position: relative;
		color: #fff;
		margin: 10px auto;
		width: fit-content;
		text-transform: uppercase;
		font-weight: bold;
		letter-spacing: 3px;
		font-size: 12px;
	}
	.home-link {
		text-decoration: none;
		color: #fff;
		transition: ${MainTransition};
		&:hover {
			color: ${YellowColor};
		}
	}
`;

export const Spinner = styled.span`
	width: 48px;
	height: 48px;
	border: 5px solid #fd9d3e;
	border-bottom-color: transparent;
	border-radius: 50%;
	display: inline-block;
	box-sizing: border-box;
	animation: rotation 1s linear infinite;
	display: block;
	margin: 50px auto;
	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
