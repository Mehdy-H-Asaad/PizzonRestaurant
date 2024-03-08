import styled from "styled-components";
import {
	Col,
	Container,
	MainTitle,
	Row,
	SecondButton,
} from "../GlobalComponents/GlobalComponents";
import { VscCallOutgoing } from "react-icons/vsc";
import { YellowColor } from "../Styles/Styles";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

function Booking() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = () => toast.success("Submitted!");

	const errorMessagesValidation = {
		userName: "Name is not valid",
		email: "Email is not valid",
	};

	return (
		<BookingSection>
			<Container>
				<Row>
					<Col className="col-lg-6">
						<MenuMainTitle>
							<h6>fresh from pizzon</h6>
							<h3 className="dark-color">book online</h3>
						</MenuMainTitle>
						<Box>
							<p>
								Elevate your dining experience with ease! Reserve a table at our
								restaurant, where exquisite cuisine meets inviting ambiance.
								Enjoy impeccable service and create memorable moments with your
								loved ones, ensuring a delightful and unforgettable mealtime.
							</p>
							<PhoneBox>
								<VscCallOutgoing className="phone-icon" />
								<span>+1 123456789</span>
							</PhoneBox>
						</Box>
					</Col>
					<Col className="col-lg-6">
						<BookingForm onSubmit={handleSubmit(onSubmit)}>
							<h3>book online</h3>

							{errors.userName && (
								<p className="error-msg">
									{errors.userName.type === "required"
										? "This field in required"
										: "Name is not vaild"}
								</p>
							)}

							<input
								type="text"
								placeholder="Name"
								{...register("userName", {
									required: true,
									pattern: {
										value: /^[a-zA-Z]+$/,
										message: "Please enter a valid name",
									},
								})}
							/>

							{errors.email && (
								<p className="error-msg">
									{errors.email.type === "required"
										? "This field is required"
										: errorMessagesValidation.email}
								</p>
							)}

							<input
								type="text"
								placeholder="Email"
								{...register("email", {
									required: true,
									pattern: {
										value: /^\S+@\S+\.\S+$/,
										message: "Please enter a valid email address",
									},
								})}
							/>

							{errors.date && (
								<p className="error-msg">This field is required</p>
							)}

							<input
								type="date"
								placeholder="Date"
								{...register("date", { required: true })}
							/>

							<SecondButton>Book Now</SecondButton>
						</BookingForm>
					</Col>
				</Row>
			</Container>
			<Toaster position="top-center" />
		</BookingSection>
	);
}

const BookingSection = styled.div`
	position: relative;
	padding: 0 0 60px;
`;
const Box = styled.div`
	p {
		margin: 30px 0;
		max-width: 550px;
		@media (max-width: 991px) {
			margin: 30px auto;
			text-align: center;
		}
	}
`;
const MenuMainTitle = styled(MainTitle)`
	margin: 0;
	h6 {
		text-align: left;
	}
	@media (max-width: 991px) {
		margin: 0 auto;
		h6 {
			text-align: center;
		}
	}
`;
const PhoneBox = styled.div`
	background-color: #121619;
	color: #fff;
	padding: 20px 20px;
	width: fit-content;
	margin: 0;
	text-align: center;
	font-size: 26px;
	letter-spacing: 12px;
	border: 10px solid ${YellowColor};
	font-weight: bold;
	.phone-icon {
		margin-right: 25px;
	}
	@media (max-width: 991px) {
		margin: 0 auto;
		margin-bottom: 50px;
	}
	@media (max-width: 567px) {
		font-size: 16px;
	}
`;
const BookingForm = styled.form`
	display: flex;
	flex-direction: column;
	input {
		padding: 10px 20px;
		width: 100%;
		border: 1px solid #aaaa;
		outline: 0;
		margin-bottom: 40px;
	}
	input:focus {
		border-color: ${YellowColor};
	}

	h3 {
		text-transform: capitalize;
		text-align: center;
		font-weight: bold;
		font-size: 40px;
		margin-bottom: 20px;
	}
	.book-link {
		text-decoration: none;
	}
	p {
		color: red;
		font-weight: bold;
	}
`;
export default Booking;
