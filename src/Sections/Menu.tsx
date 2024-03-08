import styled from "styled-components";
import {
	Col,
	Container,
	MainTitle,
	Row,
	Spinner,
	TopSectionImg,
} from "../GlobalComponents/GlobalComponents";
import { DarkColor, MainTransition, YellowColor } from "../Styles/Styles";
import { useState, useEffect, useRef } from "react";
import TopImg from "../Assets/imgs/menu-bottom-bg.png";
import { Link } from "react-router-dom";
import { useRecipeContext } from "../Hooks/Context";

interface Recipe {
	strMealThumb: string;
	strMeal: string;
	idMeal: number;
}

function Menu() {
	const [recipe, setRecipe] = useState<Recipe[] | null>(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [type, setType] = useState("american");
	const [activeClass, setActiveClass] = useState("american");

	const abortControllerRef = useRef<AbortController | null>(null);
	const handleClick = (e: any) => {
		setType(e);
		setActiveClass(e);
	};

	const { setCuisineType } = useRecipeContext();

	const scrollToTop = () => {
		window.scroll(0, 0);
		setCuisineType(type);
	};

	const MenuItems =
		recipe &&
		recipe.slice(0, 5).map(ele => {
			return (
				<Col className="col-lg-3 col-md-4 col-sm-6" key={ele.idMeal}>
					<Link
						to={`/item/${type}/${ele.idMeal}`}
						style={{ textDecoration: "none" }}
						onClick={scrollToTop}
					>
						<Box>
							<img
								loading="lazy"
								src={ele.strMealThumb}
								alt=""
								className="img-fluid"
							/>
							<h5>{ele.strMeal}</h5>
							<span>₹{parseInt(ele.idMeal.toString()) % 200}</span>
						</Box>
					</Link>
				</Col>
			);
		});

	const getRecipes = async () => {
		abortControllerRef.current?.abort();
		abortControllerRef.current = new AbortController();
		setLoading(true);
		try {
			const respone = await fetch(
				`https://www.themealdb.com/api/json/v1/1/filter.php?a=${type}`,
				{
					signal: abortControllerRef.current?.signal,
				}
			);

			const recipeData = await respone.json();
			setRecipe(recipeData["meals"]);
		} catch (e: any) {
			if (e.name === "AbortError") {
				console.log("Aborterror");
			} else {
				setError(e);
			}
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getRecipes();
		return () => {
			abortControllerRef.current?.abort();
		};
	}, [type]);

	const MenuCuisineArray = ["american", "italian", "japanese"].map(
		(ele, index) => {
			return (
				<li
					onClick={() => handleClick(ele)}
					key={index}
					className={`${
						ele.toLowerCase() === activeClass.toLowerCase() ? "active" : ""
					} `}
				>
					{ele}
				</li>
			);
		}
	);

	return (
		<MenuSection>
			<MainTitle>
				<h6>Fresh From Pizzon</h6>
				<h3 className="light-color">our special menu</h3>
			</MainTitle>
			<Container>
				<ul>{MenuCuisineArray}</ul>
				{!recipe && error && (
					<div className="error">Something went wrong,please try again.</div>
				)}
				{loading && <Spinner></Spinner>}

				<MenuRow>{!loading && MenuItems}</MenuRow>
			</Container>
			<TopSectionImg src={TopImg} />
		</MenuSection>
	);
}

const MenuSection = styled.div`
	padding: 80px 0;

	background-color: ${DarkColor};
	position: relative;
	ul {
		display: flex;
		justify-content: center;
		list-style-type: none;
		justify-content: center;
		flex-wrap: wrap;
		background-color: #2b2c2d;
		width: fit-content;
		margin: 40px auto 0;
		padding: 0;
		border-radius: 40px;
	}
	li {
		color: #fff;
		cursor: pointer;
		text-transform: uppercase;
		transition: ${MainTransition};
		border-radius: 24px;
		padding: 10px 20px;
		font-size: 18px;
		font-weight: bold;
		&:hover {
			background-color: ${YellowColor};
		}
		&.active {
			background-color: ${YellowColor};
		}
	}
	.error {
		color: #fff;
		background-color: #fd9d3e;
		width: fit-content;
		margin: 45px auto;
		padding: 10px 30px;
		border-radius: 40px;
		text-transform: uppercase;
		letter-spacing: 3px;
		font-size: 20px;
		font-weight: bold;
	}
`;
const MenuRow = styled(Row)`
	margin-bottom: 80px;
	@media (max-width: 991px) {
		margin-bottom: 0;
	}
	span {
		color: #fd9d3e;
		margin: 0 auto;
		display: block;
		width: fit-content;
		font-size: 25px;
		font-weight: bold;
	}
`;
const Box = styled.div`
	margin: 60px 0 40px;
	cursor: pointer;
	&:hover {
		h5 {
			color: ${YellowColor};
		}
		img {
			transform: scale(1.1);
		}
	}
	img {
		border-radius: 50%;
		margin: 0 auto;
		display: block;
		transition: ${MainTransition};
		width: 200px;
	}
	h5 {
		margin-top: 40px;
		color: #fff;
		text-transform: uppercase;
		font-weight: bold;
		transition: ${MainTransition};
		text-align: center;
	}
`;
export default Menu;
