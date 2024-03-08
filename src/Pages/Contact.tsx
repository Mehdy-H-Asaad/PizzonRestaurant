import { Link } from "react-router-dom";
import {
	Col,
	Container,
	MainButton,
	MainTitle,
	PagePath,
	Row,
} from "../GlobalComponents/GlobalComponents";
import Header from "../Sections/Header";
import Footer from "../Sections/Footer";
import { FaHome } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import styled from "styled-components";
import { MainTransition, YellowColor } from "../Styles/Styles";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = () => toast.success("Submitted!");

	const errorsValidationMsgs = {
		email: "Email is not valid",
		phoneNumber: "Phone number is not valid",
	};

	const inputFieldMsg = "This field is required";

	return (
		<>
			<Header />
			<PagePath>
				<h3>Contact</h3>
				<h6>
					<Link className="home-link" to={"/"}>
						Home
					</Link>
					{""} / Contact
				</h6>
			</PagePath>
			<Container>
				<Row>
					<Col className="col-lg-5">
						<Info>
							{" "}
							<h3>Contact Details</h3>
							<p>
								Have a question or craving our delicious pizzas? Get in touch
								with us effortlessly! Reach out for orders, inquiries, or
								special requests through our user-friendly website or call our
								friendly customer support team. We’re here to make your pizza
								experience exceptional.
							</p>
							<Address>
								<Box>
									<FaHome className="contact-icon" />
									<span>55 Drumburgh Ave, Carlisle CA3 0PD, UK</span>
								</Box>
								<Box className="phone-number">
									<IoCall className="contact-icon" />
									<span>+91 123 456 7890,</span>
									<span> +91 123 456 789</span>
								</Box>
								<Box>
									<MdOutlineMail className="contact-icon" />
									<a className="email-link" href="tomail:Info@gmail.com">
										Info@gmail.com
									</a>
								</Box>
								<Box>
									<IoTimeOutline className="contact-icon" />
									<span className="time">
										Monday – Friday: 10 am – 10pm Sunday: 11 am – 9pm
									</span>
								</Box>
							</Address>
						</Info>
					</Col>
					<Col className="col-lg-7">
						<ContactMainTitle>
							<h6>Get in touch</h6>
							<h3>CONTACT US</h3>
						</ContactMainTitle>
						<ContactBox>
							<form onSubmit={handleSubmit(onSubmit)}>
								{errors.email && (
									<p className="contact-error">
										{errors.email.type === "required"
											? inputFieldMsg
											: errorsValidationMsgs.email}
									</p>
								)}
								<input
									type="text"
									placeholder="Email"
									className="email"
									{...register("email", {
										required: true,
										pattern: /^\S+@\S+\.\S+$/,
									})}
								/>

								{errors.text && (
									<p className="contact-error">{inputFieldMsg}</p>
								)}
								<input
									type="text"
									placeholder="Subject"
									className="subject"
									{...register("text", { required: true })}
								/>

								{errors.phone && (
									<p className="contact-error">
										{errors.phone.type === "required"
											? inputFieldMsg
											: errorsValidationMsgs.phoneNumber}
									</p>
								)}
								<input
									type="text"
									placeholder="Phone"
									className="number"
									{...register("phone", {
										required: true,
										pattern: /^[0-9]+$/,
									})}
								/>

								{errors.textarea && (
									<p className="contact-error">{inputFieldMsg}</p>
								)}
								<textarea
									placeholder="Message"
									{...register("textarea", { required: true })}
								></textarea>
								<MainButton>send a message</MainButton>
							</form>
						</ContactBox>
					</Col>
				</Row>
			</Container>
			<Toaster position="top-center" />
			<Footer />
		</>
	);
}

const Address = styled.div``;
const Info = styled.div`
	h3 {
		font-weight: bold;
	}
	p {
		color: #666;
		max-width: 400px;
		font-size: 14px;
		margin: 20px 0;
	}
`;

const Box = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
	.contact-icon {
		color: ${YellowColor};
		font-size: 30px;
		margin-right: 15px;
	}
	&.phone-number > span {
		cursor: pointer;
		transition: ${MainTransition};
		&:hover {
			color: ${YellowColor};
		}
	}
	.email-link {
		text-decoration: none;
		color: black;
		transition: ${MainTransition};
		&:hover {
			color: ${YellowColor};
		}
	}
	.time {
		max-width: 300px;
	}
`;
const ContactMainTitle = styled(MainTitle)`
	margin: 0;
	h6,
	h3 {
		text-align: left;
	}
`;
const ContactBox = styled.div`
	margin-top: 20px;
	form {
		display: flex;
		flex-direction: column;
		input,
		textarea {
			margin-bottom: 20px;
			border: 1px solid #666;
			outline: none;
			width: 100%;
			padding: 10px 20px;
		}
		textarea {
			height: 200px;
		}
		input:focus,
		textarea:focus {
			border: 1px solid ${YellowColor};
		}
	}
	.contact-error {
		color: red;
		font-weight: bold;
	}
`;
export default Contact;
