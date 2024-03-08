import styled from "styled-components";
import { Col, Container, Row } from "../GlobalComponents/GlobalComponents";
import { DarkColor, MainTransition, YellowColor } from "../Styles/Styles";
import FooterLogo from "../Assets/imgs/logo.png";
import { Link } from "react-router-dom";
import { FooterData } from "../Data/FooterData";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};
	const FooterOpeningArray = FooterData.map((ele, index) => {
		return (
			<OpeningDetails key={index}>
				<dt>{ele.day}</dt>
				<dd className={`${index === FooterData.length - 1 ? "closed" : ""}`}>
					{ele.time}
				</dd>
			</OpeningDetails>
		);
	});
	return (
		<FooterSection>
			<Container>
				<Row>
					<Col className="col-lg-4 col-md-6">
						<Box>
							<img src={FooterLogo} alt="" className="img-fluid" />
							<p>
								20 Carrochan Rd, Balloch, Alexandria G83 8EG, UK 69QJ+2F
								Alexandria, United Kingd
							</p>
							<span>
								PHONE - <a href="#">+91 123 456 789 0</a>,{" "}
								<a href="a">+91 123 456 789 0</a>
							</span>
							<span>
								EMAIL - <a href="mailto:Info@gmail.com">@Info@gmail.com</a>
							</span>
						</Box>
					</Col>
					<Col className="col-lg-4 col-md-6 ">
						<Opening>
							<h3>OPENING HOURS</h3>
							<dl>{FooterOpeningArray}</dl>
						</Opening>
					</Col>
					<Col className="col-lg-4 col-md-6 ">
						<UsefulBox>
							<h3>USEFUL LINKS</h3>
							<UsefulLinks>
								{["home", "menu", "about", "contact"].map((ele, index) => {
									return (
										<Link
											className="useful-link"
											to={`/${ele === "home" ? "" : ele}`}
											key={index}
											onClick={scrollToTop}
										>
											{ele}
										</Link>
									);
								})}
							</UsefulLinks>
						</UsefulBox>
					</Col>
				</Row>
				<Social>
					<CopyRights>
						<p>
							© Pizzon all Rights Reserved. Designed by{" "}
							<a
								target="_blank"
								href="https://templatescoder.com/?_gl=1%2A1es5xiw%2A_ga%2ANzY2NDUxOTYzLjE3MDcwNjk2ODc.%2A_ga_28BX7P925Z%2AMTcwNzk1NjE3Mi4yMy4xLjE3MDc5NTkyODUuNjAuMC4w"
							>
								TemplatesCoder
							</a>
						</p>
						<p>
							Coded With React By{" "}
							<a
								target="_blank"
								href="https://www.linkedin.com/in/mehdy-asaad/"
							>
								Mehdy Asaad
							</a>
						</p>
					</CopyRights>
					<SocialLinks>
						<FaFacebook className="social-link" />
						<FaInstagram className="social-link" />
						<FaLinkedin className="social-link" />
					</SocialLinks>
				</Social>
			</Container>
		</FooterSection>
	);
}

const FooterSection = styled.div`
	padding: 90px 0 0;
	background-color: ${DarkColor};
`;
const Box = styled.div`
	color: #fff;
	font-size: 14px;
	@media (max-width: 767px) {
		text-align: center;
		p {
			margin: 0 auto 20px;
		}
	}
	a {
		text-decoration: none;
		color: #fff;
		transition: ${MainTransition};
		&:hover {
			color: ${YellowColor};
		}
	}
	img {
		margin-bottom: 20px;
	}
	span:last-of-type {
		display: block;
		margin-top: 20px;
	}
	p {
		max-width: 290px;
	}
`;
const Opening = styled.div`
	@media (max-width: 767px) {
		text-align: center;
		margin: 50px 0;
	}
	h3 {
		color: #fff;
		margin-bottom: 40px;
		text-transform: uppercase;
		font-weight: bold;
		font-size: 20px;
	}
`;

const OpeningDetails = styled.div`
	display: flex;
	justify-content: space-between;
	color: #fff;
	margin-top: 10px;
	@media (max-width: 767px) {
		justify-content: space-around;
	}
	dt,
	dd {
		font-weight: normal;
	}
	.closed {
		background-color: ${YellowColor};
		padding: 5px 10px;
	}
`;

const UsefulBox = styled.div`
	padding: 0 100px;
	@media (max-width: 991px) {
		padding: 0;
	}
	@media (max-width: 767px) {
		text-align: center;
	}
	h3 {
		text-transform: uppercase;
		color: #fff;
		font-weight: bold;
		font-size: 20px;
		margin-bottom: 40px;
	}
`;
const UsefulLinks = styled.div`
	display: flex;
	flex-direction: column;

	.useful-link {
		@media (max-width: 767px) {
			margin: 0 auto 15px;
		}
		text-decoration: none;
		color: #fff;
		margin-bottom: 15px;
		transition: ${MainTransition};
		width: fit-content;
		text-transform: capitalize;
		&:hover {
			color: ${YellowColor};
			transform: translateX(5px);
		}
	}
`;
const Social = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 60px;
	border-top: 1px solid #2b2c2d;
	padding: 60px 0;
	flex-wrap: wrap;
	@media (max-width: 991px) {
		justify-content: center;
		text-align: center;
	}
	P {
		color: #fff;
	}
	a {
		color: ${YellowColor};
		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
	}
`;
const SocialLinks = styled.div`
	.social-link {
		@media (max-width: 767px) {
			margin-right: 20px;
			margin-left: 0;
		}
		color: #fff;
		background-color: #2b2c2d;
		width: 50px;
		height: 50px;
		margin-left: 20px;
		padding: 15px;
		cursor: pointer;
		transition: ${MainTransition};
		&:hover {
			background-color: ${YellowColor};
		}
	}
`;
const CopyRights = styled.div``;
export default Footer;
