import Header from "./Header";
import Footer from "./Footer";
import {
	Col,
	Container,
	MainButton,
	PagePath,
	Row,
	Spinner,
} from "../GlobalComponents/GlobalComponents";
import { useRecipeContext } from "../Hooks/Context";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { MainTransition, YellowColor } from "../Styles/Styles";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { Toaster } from "react-hot-toast";

interface RecipeData {
	itemName: string;
	itemImg: string;
	itemQuantity: number;
	itemPrice: number;
}

function ItemInfo() {
	const { recipeData, addToCart } = useRecipeContext();
	const { itemId } = useParams();
	const { cuisine } = useParams();
	const [quantity, setQuantity] = useState<number>(0);
	const initalvalues = recipeData?.find(e => e.idMeal === itemId);

	const [recipeInfo, setRecipeInfo] = useState<RecipeData>({
		itemName: initalvalues?.strMeal || <Spinner></Spinner>,
		itemImg: initalvalues?.strMealThumb || <Spinner></Spinner>,
		itemQuantity: quantity,
		itemPrice: Number(itemId) % 200,
	});

	useEffect(() => {
		setRecipeInfo(prevState => ({
			...prevState,
			itemName: initalvalues?.strMeal || <Spinner></Spinner>,
			itemImg: initalvalues?.strMealThumb || <Spinner></Spinner>,
		}));
	}, [initalvalues]);

	useEffect(() => {
		setRecipeInfo(prevState => ({
			...prevState,
			itemName: initalvalues?.strMeal || <Spinner></Spinner>,
			itemImg: initalvalues?.strMealThumb || <Spinner></Spinner>,
		}));
		const storedItemDataString = sessionStorage.getItem(`itemData_${itemId}`);
		try {
			if (storedItemDataString) {
				const storedItemData = JSON.parse(storedItemDataString);
				setRecipeInfo({
					itemName: storedItemData.itemName,
					itemImg: storedItemData.itemImg,
					itemQuantity: quantity,
					itemPrice: Number(itemId) % 200,
				});
			} else {
				const foundRecipe = recipeData?.find(e => e.idMeal === itemId);
				if (foundRecipe) {
					const itemData = {
						itemName: foundRecipe.strMeal,
						itemImg: foundRecipe.strMealThumb,
						itemQuantity: quantity,
						itemPrice: Number(itemId) % 200,
						itemIdPage: foundRecipe.idMeal,
					};
					sessionStorage.setItem(
						`itemData_${itemId}`,
						JSON.stringify(itemData)
					);
				}
			}
		} catch (error) {
			console.error("SessionStorage Error:", error);
		}
	}, [recipeData, itemId, quantity]);

	return (
		<>
			<Header />
			<PagePath>
				<h3>{recipeInfo && recipeInfo.itemName}</h3>
				<h6>
					<Link className="home-link" to={"/"}>
						Home
					</Link>{" "}
					/ recipe details
				</h6>
			</PagePath>
			<Container>
				<CustomRow>
					<Col className="col-lg-6">
						<ImgContainer>
							<img
								src={recipeInfo && recipeInfo.itemImg}
								alt=""
								className="img-fluid"
							/>
						</ImgContainer>
					</Col>
					<Col className="col-lg-6">
						<Info>
							<h3>{recipeInfo && recipeInfo.itemName}</h3>
							<h6 className="price">₹{recipeInfo.itemPrice}</h6>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
								quam reprehenderit! Sed quae eveniet similique? Unde ea
								doloremque dignissimos recusandae quod. Ducimus minima iste
								quisquam neque impedit repellat itaque tenetur!
							</p>
							<h6>
								cuisine :<span>{cuisine}</span>{" "}
							</h6>
							<CartAndQuantity>
								<ItemCount>
									<input
										type="text"
										value={
											!recipeInfo.itemQuantity
												? ""
												: parseInt(recipeInfo.itemQuantity.toString())
										}
										onChange={e => setQuantity(parseInt(e.target.value))}
									/>
									<Calc>
										<FaPlus
											onClick={() => setQuantity((e: number) => e + 1)}
											className="calc-sign"
										/>
										<FaMinus
											onClick={() =>
												setQuantity((e: number) => (e > 0 ? e - 1 : 0))
											}
											className="calc-sign"
										/>
									</Calc>
								</ItemCount>
								<AddToCartButton
									handlequan={recipeInfo.itemQuantity}
									onClick={() => {
										addToCart({
											...recipeInfo,
											itemQuantity: quantity,
										});
									}}
								>
									Add to cart
								</AddToCartButton>
							</CartAndQuantity>
						</Info>
					</Col>
				</CustomRow>
			</Container>
			<Toaster position="top-center" />
			<Footer />
		</>
	);
}

const Info = styled.div`
	@media (max-width: 991px) {
		text-align: center;
		p {
			margin-inline: auto;
			color: #666;
		}
	}
	h6 {
		text-transform: capitalize;
		span {
			color: #666;
			text-transform: capitalize;
			margin-left: 10px;
		}
	}
	.price {
		color: ${YellowColor};
		font-size: 24px;
		font-weight: bold;
		margin-bottom: 20px;
	}
	p {
		max-width: 500px;
	}
`;

const ItemCount = styled.div`
	display: flex;
	border: 1px solid #e4ded9;
	padding: 10px 20px;
	border-radius: 40px;
	align-items: center;
	input {
		width: 50px;
		border: 0;
		outline: 0;
		font-size: 18px;
		user-select: none;
		font-weight: bold;
	}
`;

const ImgContainer = styled.div`
	img {
		border-radius: 50%;
		margin: 0 auto;
		display: block;
		transition: ${MainTransition};
		width: 350px;
		margin-bottom: 100px;
	}
`;

const Calc = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	.calc-sign {
		margin: 2px 0;
		color: #777777;
		transition: ${MainTransition};
		cursor: pointer;
		&:hover {
			color: ${YellowColor};
		}
	}
`;

const CartAndQuantity = styled.div`
	display: flex;
	margin-top: 20px;
	@media (max-width: 991px) {
		justify-content: center;
		margin-bottom: 60px;
	}
`;

const CustomRow = styled(Row)`
	@media (max-width: 991px) {
		flex-direction: column-reverse;
	}
`;
const AddToCartButton = styled(MainButton)<{ handlequan?: number }>`
	margin: 0 0 0 20px;
	user-select: none;
	pointer-events: ${({ handlequan }) => (!handlequan ? "none" : "auto")};
	opacity: ${({ handlequan }) => (!handlequan ? 0.5 : 1)};
`;

export default ItemInfo;
