import styled from "styled-components";
import { Col, Container, Row } from "../GlobalComponents/GlobalComponents";
import LandingImg from "../Assets/imgs/pizza-landing.png";
import LandingBackGround from "../Assets/imgs/chef-bg-1.png";
import { DarkColor, YellowColor } from "../Styles/Styles";
import TopImg from "../Assets/imgs/order-top.png";
import { TopSectionImg } from "../GlobalComponents/GlobalComponents";
function Landing() {
	return (
		<LandingSection>
			<Container>
				<LandingRow className="align-items-center">
					<Col className="col-lg-5">
						<img src={LandingImg} alt="" className="img-fluid pizza-img" />
					</Col>
					<Col className="col-lg-7">
						<Text>
							<h1>
								quality f<span>oo</span>d
							</h1>
							<p>healthy food for healthy body</p>
						</Text>
					</Col>
				</LandingRow>
			</Container>
			<TopSectionImg src={TopImg} />
		</LandingSection>
	);
}

const LandingSection = styled.div`
	/* padding-top: 100px; */
	padding-bottom: 100px;
	background-image: url(${LandingBackGround});
	background-repeat: no-repeat;
	background-position: center;
	background-color: ${DarkColor};
	position: relative;
	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgb(18, 22, 25, 0.7);
	}
	@media (max-width: 991px) {
		background-position: top;
		background-repeat: repeat;
		padding-bottom: 30px;
	}
`;
const LandingRow = styled(Row)`
	align-items: center;
	position: relative;
	@media (max-width: 991px) {
		flex-direction: column-reverse;
		.pizza-img {
			margin: 0 auto;
			display: block;
		}
	}
`;

const Text = styled.div`
	text-align: center;

	@media (max-width: 991px) {
		margin-top: 50px;
	}
	h1,
	p,
	span {
		text-transform: uppercase;
	}
	h1,
	span {
		color: #fff;
		font-size: 132px;
		letter-spacing: 7px;
		font-family: "Anton", sans-serif;
	}
	span {
		color: ${YellowColor};
	}
	p {
		color: ${YellowColor};
		letter-spacing: 10px;
		font-size: 22px;
	}
	@media (max-width: 767px) {
		h1,
		span {
			font-size: 70px;
		}
		p {
			font-size: 12px;
		}
	}

	@media (max-width: 567px) {
		h1,
		span {
			font-size: 50px;
		}
	}
`;
export default Landing;
