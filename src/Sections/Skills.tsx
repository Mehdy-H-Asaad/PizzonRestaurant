import styled from "styled-components";
import {
	Col,
	Container,
	MainTitle,
	Row,
} from "../GlobalComponents/GlobalComponents";

import { SkillsData } from "../Data/SkillsData";

function Skills() {
	const SkillsArray = SkillsData.map((ele, index) => {
		return (
			<Col className="col-lg-4 col-md-6" key={index}>
				<Box>
					<img src={ele.img} alt="" className="img-fluid" />
					<h6>{ele.skill}</h6>
					<p>{ele.description}</p>
				</Box>
			</Col>
		);
	});
	return (
		<SkillsSection>
			<Container>
				<MainTitle>
					<h6>Our Skills</h6>
					<h3 className="dark-color">Team of Professionals</h3>
				</MainTitle>
				<Row>{SkillsArray}</Row>
			</Container>
		</SkillsSection>
	);
}

const SkillsSection = styled.div`
	margin-bottom: 80px;
`;

const Box = styled.div`
	margin-top: 40px;
	img {
		border-radius: 12px;
	}
	h6 {
		font-size: 20px;
		margin-top: 10px;
		text-transform: capitalize;
		font-weight: 600;
	}
	p {
		color: #666;
	}
`;

export default Skills;
