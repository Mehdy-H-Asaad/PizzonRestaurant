import styled from "styled-components";
import { DarkColor, MainTransition, YellowColor } from "../Styles/Styles";
import { Col, Container, Row } from "../GlobalComponents/GlobalComponents";
import { WhyUsData, whyUsIcons } from "../Data/WhyUsData";

function WhyUs() {
	const WhyUsArray = WhyUsData.map((ele, index) => {
		return (
			<Col className="col-lg-4 col-md-6" key={ele.id}>
				<Box>
					{whyUsIcons[index]}
					<h5>{ele.title}</h5>
					<p>{ele.description}</p>
				</Box>
			</Col>
		);
	});

	return (
		<WhyUsSection>
			<Container>
				<Row>{WhyUsArray}</Row>
			</Container>
		</WhyUsSection>
	);
}

const WhyUsSection = styled.div`
	padding-top: 90px;
	background-color: ${YellowColor};
	position: relative;
`;

const Box = styled.div`
	text-align: center;
	margin-bottom: 60px;
	.why-icon {
		font-size: 80px;
		margin-bottom: 20px;
		color: ${DarkColor};
		transition: ${MainTransition};
		&:hover {
			color: #fff;
		}
	}
	h5 {
		font-weight: bold;
		text-transform: uppercase;
	}
	p {
		font-size: 14px;
		line-height: 1.5;
		font-weight: 500;
		max-width: 300px;
		margin: 0 auto;
	}
`;

export default WhyUs;
