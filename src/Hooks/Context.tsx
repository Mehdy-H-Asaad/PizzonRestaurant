import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

interface DataTypes {
	recipeData: any[];
	getRecipes: () => void | Promise<string>;
	setCuisineType: any;
	cuisineType: string;
	cartArray: object[];
	setCartArray: object;
	addToCart: (e: object) => void;
	deleteCartItem: (e: object) => void;
	totalPrice: number;
	setTotalPrice: any;
}

export const recipeContext = createContext<DataTypes | undefined>(undefined);

export const useRecipeContext = () => {
	const context = useContext(recipeContext);
	if (!context) {
		throw new Error("Context is undefined");
	}
	return context;
};

export const DataProvider = ({ children }: any) => {
	const [cartArray, setCartArray] = useState<any[]>([]);
	const [recipeData, setRecipeData] = useState<object[]>([]);
	const [cuisineType, setCuisineType] = useState<string>("");
	const getStoredTotalPrice = sessionStorage.getItem("totalPrice");
	const [totalPrice, setTotalPrice] = useState<number>(
		!getStoredTotalPrice ? 0 : parseInt(getStoredTotalPrice)
	);

	useEffect(() => {
		if (cartArray.length > 0) {
			const totalItemsPrice = cartArray.reduce((acc, curr) => {
				return acc + curr.itemQuantity * curr.itemPrice;
			}, 0);
			setTotalPrice(totalItemsPrice);
		}
	}, [cartArray]);

	const getRecipes = () => {
		fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${cuisineType}`)
			.then(response => response.json())
			.then(data => {
				setRecipeData(data["meals"]);
			})
			.catch(e => console.log("Error!", e));
	};

	const addToCart = (e: any) => {
		const existingItem = cartArray.find(ele => ele.itemName === e.itemName);
		if (!existingItem) {
			const updatedCartArray = [...cartArray, e];
			setCartArray(updatedCartArray);
			sessionStorage.setItem("cartItem", JSON.stringify(updatedCartArray));
			const amount = e.itemPrice * e.itemQuantity;
			setTotalPrice(prevTotalPrice => prevTotalPrice + amount);
		} else {
			const updatedCartArray = cartArray.map(item => {
				if (item.itemName === e.itemName) {
					return { ...item, itemQuantity: e.itemQuantity };
				}
				return item;
			});
			setCartArray(updatedCartArray);
			sessionStorage.setItem("cartItem", JSON.stringify(updatedCartArray));
		}
		toast.success("Added");
	};

	const deleteCartItem = (e: any) => {
		const deletedItem = cartArray.filter(ele => {
			return ele.itemName !== e.itemName;
		});
		const deletedItemPrice = cartArray.filter(ele => {
			return ele.itemName === e.itemName;
		});
		setCartArray(deletedItem);
		sessionStorage.setItem("cartItem", JSON.stringify(deletedItem));
		setTotalPrice(
			prevPrice =>
				prevPrice -
				deletedItemPrice[0].itemQuantity * deletedItemPrice[0].itemPrice
		);
	};

	useEffect(() => {
		const storedCartItem = sessionStorage.getItem("cartItem");
		if (storedCartItem) {
			const storedCartItemParse = JSON.parse(storedCartItem);
			setCartArray(storedCartItemParse);
		} else {
			setCartArray([]);
		}
	}, []);

	useEffect(() => {
		getRecipes();
	}, [cuisineType]);

	return (
		<recipeContext.Provider
			value={{
				recipeData,
				getRecipes,
				setCuisineType,
				cuisineType,
				setCartArray,
				cartArray,
				addToCart,
				deleteCartItem,
				totalPrice,
				setTotalPrice,
			}}
		>
			{children}
		</recipeContext.Provider>
	);
};
