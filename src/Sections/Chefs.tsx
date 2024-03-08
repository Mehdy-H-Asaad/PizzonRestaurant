import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {
	Container,
	MainTitle,
	TopSectionImg,
} from "../GlobalComponents/GlobalComponents";
import { DarkColor, MainTransition, YellowColor } from "../Styles/Styles";
import { ChefsData } from "../Data/ChefsData";
import BottomImg from "../Assets/imgs/menu-bottom-bg.png";

function Chefs() {
	const splideOption = {
		pagination: false,
		drag: "free",
		perPage: 4,
		arrows: true,
		type: "loop",
		gap: "1rem",
		perMove: 1,
		breakpoints: {
			991: {
				perPage: 3,
			},
			767: {
				perPage: 2,
				arrows: false,
			},
			576: {
				perPage: 1,
				arrows: false,
			},
			1200: {
				perPage: 4,
			},
		},
		autoplay: {
			delay: 1000,
		},
	};

	const ChefsArray = ChefsData.map((ele, index) => {
		return (
			<SplideSlide key={index}>
				<Box>
					<img src={ele.chefImg} className="img-fluid" alt="" />
					<h6>{ele.name}</h6>
				</Box>
			</SplideSlide>
		);
	});

	return (
		<ChefsSection>
			<ChefsContainer>
				<MainTitle>
					<h6>Meet our experts</h6>
					<h3 className="light-color">OUR BEST CHEF</h3>
				</MainTitle>
				<Splide options={splideOption}>{ChefsArray}</Splide>
			</ChefsContainer>
			<TopSectionImg src={BottomImg} className="img-fluid" />
		</ChefsSection>
	);
}

const ChefsSection = styled.div`
	padding: 90px 0;
	background-color: ${DarkColor};
	position: relative;
`;
const ChefsContainer = styled(Container)`
	margin-bottom: 120px;
	@media (max-width: 991px) {
		margin-bottom: 40px;
	}
`;
const Box = styled.div`
	&:hover {
		h6 {
			color: ${YellowColor};
		}
		img {
			transform: scale(1.1);
		}
	}
	margin-top: 40px;
	h6 {
		color: #fff;
		font-weight: bold;
		text-transform: capitalize;
		text-align: center;
		font-size: 24px;
		margin: 15px 0;
		transition: ${MainTransition};
	}
	img {
		width: 250px;
		border-radius: 50%;
		transition: 0.3s;
		margin: 0 auto;
		display: block;
	}
`;
export default Chefs;
