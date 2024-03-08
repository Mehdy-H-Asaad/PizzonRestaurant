import styled from "styled-components";
import { Container, MainButton } from "../GlobalComponents/GlobalComponents";
import { Link, NavLink, useParams } from "react-router-dom";
import Logo from "../Assets/imgs/logo.png";
import { FiPhone } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { DarkColor, MainTransition, YellowColor } from "../Styles/Styles";
import { IoMdMenu } from "react-icons/io";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useRecipeContext } from "../Hooks/Context";
import { IoIosClose } from "react-icons/io";

function Header() {
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};
	const NavArray = ["home", "menu", "about", "contact"].map((ele, index) => {
		return (
			<NavLink
				key={index}
				to={`/${ele === "home" ? "" : ele}`}
				className="nav-item nav-link"
				onClick={scrollToTop}
			>
				{ele}
			</NavLink>
		);
	});
	const [showCart, setShowCart] = useState<boolean>(false);

	const { totalPrice, cuisineType, setCuisineType, deleteCartItem, cartArray } =
		useRecipeContext();

	const { cuisine } = useParams();

	useEffect(() => {
		if (cuisine && cuisineType !== cuisine) {
			setCuisineType(cuisine);
		}
	}, [cuisineType, cuisine]);

	return (
		<HeaderSection className="sticky-top">
			<nav className="navbar navbar-expand-lg ">
				<Container>
					<Link to={"/"}>
						<img src={Logo} alt="" />
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span>
							<IoMdMenu className="menu-tab" />
						</span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">{NavArray}</ul>
						<PhoneBox>
							<FiPhone className="phone-icon" />
							<a href="#">
								<span>+1 123456789</span>
							</a>
							<CartBox onClick={() => setShowCart(true)}>
								<>
									<FaShoppingCart className="cart-icon" />
									<span>Cart</span>
								</>
							</CartBox>
						</PhoneBox>
					</div>
				</Container>
			</nav>
			{showCart && (
				<CartItem>
					<CartHeader>
						<h3>Shopping Cart</h3>
						<IoClose
							className="close-cart"
							onClick={() => setShowCart(false)}
						/>
					</CartHeader>
					<RecipeContainer>
						{!totalPrice ? (
							<EmptyMSg> There Are No Products</EmptyMSg>
						) : (
							cartArray.map((e: any, index: number) => {
								return (
									<RecipeData key={index}>
										<img src={e.itemImg} alt="" className="img-fluid" />
										<RecipeInfo>
											<h3>{e.itemName}</h3>

											<QuanAndDelete>
												<h5>
													{e.itemQuantity}
													<span>
														<IoIosClose />
													</span>
													₹{e.itemPrice}
												</h5>
												<span>{e.totalPrice}</span>
												<MdDelete
													className="item-delete"
													onClick={() => deleteCartItem(e)}
												/>
											</QuanAndDelete>
										</RecipeInfo>
									</RecipeData>
								);
							})
						)}
					</RecipeContainer>
					<BillContainer>
						<SubTotal>
							<h3>SubTotal</h3>
							<span>₹{totalPrice}</span>
						</SubTotal>
						<MainButton className="check-out">Check Out</MainButton>
					</BillContainer>
				</CartItem>
			)}
		</HeaderSection>
	);
}

const HeaderSection = styled.div`
	background-color: ${DarkColor};
	padding: 15px 0;
	button.navbar-toggler {
		border: 0;
		box-shadow: none;
	}
	.menu-tab {
		color: #fff;
		font-size: 30px;
	}
	.nav-link {
		text-transform: capitalize;
		color: #fff !important;
		margin: 0 10px;
		font-weight: 600;
		letter-spacing: 1px;
		position: relative;
		transition: ${MainTransition};
		@media (max-width: 1200px) {
			margin: 0 5px;
		}
		@media (max-width: 991px) {
			text-align: center;
			margin: 10px auto;
			&::before {
				position: unset !important;
			}
			&:hover {
				transform: translateX(5px);
			}
		}
		&::before {
			content: "";
			position: absolute;
			width: 0;
			height: 0;
			background-color: ${YellowColor};
			bottom: 0;
			left: 0;
			transition: ${MainTransition};
		}
		&:hover {
			color: ${YellowColor} !important;
			&::before {
				width: 100%;
				height: 2px;
			}
		}
	}
`;

const PhoneBox = styled.div`
	display: flex;
	align-items: center;
	margin-left: 20px;
	color: #fff;
	font-size: 16px;
	.phone-icon {
		font-size: 22px;
		color: ${YellowColor};
	}

	& > a {
		margin-left: 10px;
		letter-spacing: 2px;
		text-decoration: none;
		color: #fff;
		transition: ${MainTransition};
		&:hover {
			color: ${YellowColor};
		}
	}
	.cart-link {
	}
`;
const CartBox = styled.div`
	display: flex;
	align-items: center;
	transition: ${MainTransition};
	.cart-icon {
		margin-left: 20px;
		cursor: pointer;
		margin-right: 10px;
		font-size: 22px;
		color: ${YellowColor};
	}
	&:hover {
		color: ${YellowColor};
	}
	span {
		cursor: pointer;
		font-weight: bold;
	}
`;

const CartItem = styled.div`
	background-color: #fff;
	width: 400px;
	height: 100vh;
	position: absolute;
	right: 0;
	top: 0;
	overflow-y: scroll;
	@media (max-width: 991px) {
		width: 100%;
	}
`;
const CartHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
	box-shadow: 0px 0px 10px 0px #e4ded9;
	h3 {
		font-weight: bold;
		text-transform: capitalize;
		margin: 0;
	}
	.close-cart {
		font-size: 24px;
		cursor: pointer;
	}
`;
const RecipeContainer = styled.div`
	display: flex;
	align-items: flex-start;
	padding: 20px;
	flex-wrap: wrap;
	height: 63%;
	overflow-y: auto;
	align-content: flex-start;
	img {
		width: 100px;
		border-radius: 50%;
	}
`;
const RecipeInfo = styled.div`
	margin-left: 20px;
	width: 100%;
	h3 {
		font-size: 18px;
	}
`;

const QuanAndDelete = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	h5 {
		margin: 0;
		color: ${YellowColor};
		font-weight: bold;
	}
	.item-delete {
		cursor: pointer;
		font-size: 24px;
		color: unset;
		transition: ${MainTransition};
		&:hover {
			color: ${YellowColor};
		}
	}
`;

const RecipeData = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	margin-bottom: 30px;
`;
const BillContainer = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	padding: 20px;
	.check-out {
		margin: 20px auto;
		display: block;
	}
`;

const SubTotal = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	span {
		font-size: 24px;
		font-weight: bold;
		color: #fd9d3e;
	}
	h3 {
		margin: 0;
		font-weight: bold;
	}
`;
const EmptyMSg = styled.div`
	font-size: 24px;
	color: ${YellowColor};
	font-weight: bold;
`;
export default Header;
