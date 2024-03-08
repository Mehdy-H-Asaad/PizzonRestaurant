import styled from "styled-components";
import { Container, MainTitle } from "../GlobalComponents/GlobalComponents";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { DarkColor, YellowColor } from "../Styles/Styles";
import { ReviewsData } from "../Data/ReviewsData";

function Reviews() {
	const splideOptions = {
		arrows: false,
	};

	const ReviewsArray = ReviewsData.map((ele, index) => {
		return (
			<SplideSlide key={index}>
				<Box>
					<ImageContainer>
						<img src={ele.img} alt="" className="img-fluid" />
						<span>{ele.clinetName}</span>
					</ImageContainer>
					<Text>
						<p>{ele.reviewPara}</p>
					</Text>
				</Box>
			</SplideSlide>
		);
	});

	return (
		<ReviewsSection>
			<Container>
				<MainTitle>
					<h6>What Say Our Clients</h6>
					<h3 className="light-color">CUSTOMER REVIEWS</h3>
				</MainTitle>
				<CustomSplide options={splideOptions}>{ReviewsArray}</CustomSplide>
			</Container>
		</ReviewsSection>
	);
}

const ReviewsSection = styled.div`
	padding: 90px 0;
	background-color: ${DarkColor};
`;

const Box = styled.div`
	display: flex;
	align-items: center;
	margin-top: 50px;
	@media (max-width: 991px) {
		flex-direction: column;
	}
`;

const Text = styled.div`
	color: black;
	margin: 20px 0 0 50px;
	background-color: #fff;
	padding: 40px;
	color: #666;
	position: relative;
	&::before {
		content: "";
		position: absolute;
		border: 14px solid;
		border-color: transparent #fff transparent transparent;
		left: -27px;
		top: 50%;
		transform: translateY(-50%);
	}
	p {
		font-style: italic;
		font-weight: 700;
		line-height: 1.8;
	}
	@media (max-width: 991px) {
		margin: 20px auto;
	}
`;

const ImageContainer = styled.div`
	margin-left: 20px;
	img {
		border-radius: 50%;
		border: 5px solid ${YellowColor};
		width: 500px;
		@media (max-width: 991px) {
			width: 200px;
			height: 200px;
		}
	}
	span {
		color: #fff;
		text-align: center;
		margin: 5px auto 0;
		display: block;
		text-transform: uppercase;
		color: ${YellowColor};
		font-weight: bold;
	}
`;

const CustomSplide = styled(Splide)`
	.splide__pagination {
		bottom: -30px;
	}
	.splide__pagination__page {
		background-color: ${YellowColor};
		width: 10px;
		height: 10px;
	}
`;

export default Reviews;
