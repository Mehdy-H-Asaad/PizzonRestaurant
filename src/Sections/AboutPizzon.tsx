import styled from "styled-components";
import {
	Col,
	Container,
	MainButton,
	MainTitle,
	Row,
} from "../GlobalComponents/GlobalComponents";
import { Link } from "react-router-dom";
import AboutImg from "../Assets/imgs/reservation-pizza.png";
function AboutPizzon() {
	return (
		<AboutSection>
			<Container>
				<Row className="align-items-center">
					<Col className="col-lg-6">
						<AboutMainTitle>
							<h6>Delicious Restaurant</h6>
							<h3>ABOUT PIZZON</h3>
						</AboutMainTitle>
						<p>
							Founded on a passion for delivering not just pizzas, but memorable
							moments, Pizzon is more than a pizza place—it’s a culinary
							journey. Join us in savoring the artistry of flavors, where every
							bite tells a story of quality, creativity, and devotion. Come,
							indulge in the pizza experience you deserve. Welcome to the home
							of extraordinary pizzas, where every slice is an invitation to
							culinary delight.
						</p>
						<Link to={"/about"} className="about-link">
							<AboutMainButtom>view more</AboutMainButtom>
						</Link>
					</Col>
					<CustomCol className="col-lg-6">
						<div>
							<img src={AboutImg} alt="" className="img-fluid" />
						</div>
					</CustomCol>
				</Row>
			</Container>
		</AboutSection>
	);
}

const AboutSection = styled.div`
	position: relative;
	padding: 90px 0;

	.about-link {
		text-decoration: none;
	}
	p {
		margin: 20px 0;
		max-width: 550px;
	}
	@media (max-width: 991px) {
		margin-top: 40px;
		P {
			text-align: center;
			margin: 20px auto;
		}
	}
`;
const AboutMainTitle = styled(MainTitle)`
	margin: 0;
	h6 {
		text-align: left;
	}
	@media (max-width: 991px) {
		margin: auto;
		h6 {
			text-align: center;
		}
	}
`;
const AboutMainButtom = styled(MainButton)`
	margin: 0;
	@media (max-width: 991px) {
		margin: 0 auto;
		display: block;
	}
`;
const CustomCol = styled(Col)`
	@media (max-width: 991px) {
		img {
			width: 400px;
			margin: 40px auto;
			display: block;
		}
	}
`;
export default AboutPizzon;
