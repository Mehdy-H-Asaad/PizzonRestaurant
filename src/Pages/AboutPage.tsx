import styled from "styled-components";
import Header from "../Sections/Header";
import Footer from "../Sections/Footer";
import {
	Col,
	Container,
	MainTitle,
	PagePath,
	Row,
} from "../GlobalComponents/GlobalComponents";
import { Link } from "react-router-dom";
import AboutImg from "../Assets/imgs/about-1.jpg";
import Signature from "../Assets/imgs/story.png";
import Reviews from "../Sections/Reviews";
import Booking from "../Sections/Booking";

function AboutPage() {
	return (
		<>
			<Header />
			<PagePath>
				<h3>About Us</h3>
				<h6>
					<Link className="home-link" to={"/"}>
						Home
					</Link>{" "}
					/ About Us
				</h6>
			</PagePath>
			<Container>
				<Row className="align-items-center">
					<Col className="col-lg-6">
						<img src={AboutImg} alt="" className="img-fluid" />
					</Col>
					<Col className="col-lg-6">
						<MainTitleAbout>
							<h6>Delicious Restaurant</h6>
							<h3 className="dark-color">ABOUT PIZZON</h3>
							<p>
								Founded on a passion for delivering not just pizzas, but
								memorable moments, Pizzon is more than a pizza place—it’s a
								culinary journey. Join us in savoring the artistry of flavors,
								where every bite tells a story of quality, creativity, and
								devotion. Come, indulge in the pizza experience you deserve.
								Welcome to the home of extraordinary pizzas, where every slice
								is an invitation to culinary delight.
							</p>
						</MainTitleAbout>
					</Col>
				</Row>
				<OurStory>
					<MainTitle>
						<h6>Discover</h6>
						<h3 className="dark-color">OUR STORY</h3>
					</MainTitle>
					<p>
						At Pizzon, our story begins with a passion for perfecting the art of
						pizza. Founded by food enthusiasts who dreamed of bringing an
						exceptional culinary experience to pizza lovers worldwide, our
						journey started with a commitment to quality and innovation.
						Inspired by traditional recipes and guided by a desire to explore
						new flavors, we embarked on a quest to create pizzas that not only
						tantalize taste buds but also tell a story with each slice. Our
						chefs, driven by creativity and expertise, meticulously craft every
						pizza, from the handcrafted dough to the finest, locally sourced
						ingredients.
					</p>
					<img src={Signature} alt="" />
				</OurStory>
			</Container>
			<div style={{ marginBottom: "100px" }}>
				<Reviews />
			</div>
			<Booking />
			<Footer />
		</>
	);
}

const MainTitleAbout = styled(MainTitle)`
	h3,
	h6 {
		text-align: left;
	}
`;

const OurStory = styled.div`
	margin: 100px 0;
	background-color: #f4f4f4;
	padding: 40px;
	width: 100%;
	p {
		max-width: 800px;
		margin: 0 auto;
		text-align: center;
	}
	img {
		margin: 20px auto;
		display: block;
	}
`;
export default AboutPage;
