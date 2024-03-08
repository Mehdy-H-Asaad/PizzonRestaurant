import { IoFastFood } from "react-icons/io5";
import { FaShippingFast } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa6";

export const WhyUsData = [
	{
		id: 1,
		title: "order your food",
		description:
			"Satisfy your cravings with just a few clicks! Order your favorite cuisine from a diverse menu, customized to your taste, and enjoy swift delivery or convenient pickup options. Indulge in a delightful dining experience, right at your fingertips.",
	},
	{
		id: 2,
		title: "delivery or pick up",
		description:
			"Choose your preferred way to enjoy your meal! Opt for hassle-free delivery to your doorstep or quick and convenient pick-up, ensuring your culinary cravings are satisfied just the way you like.",
	},
	{
		id: 3,
		title: "delicious recipes",
		description:
			"Discover a world of flavors with our delicious recipes! From gourmet delights to quick and easy meals, explore a diverse range of culinary creations that will tantalize your taste buds and inspire your inner chef.",
	},
];

export const whyUsIcons = [
	<IoFastFood className="why-icon" />,
	<FaShippingFast className="why-icon" />,
	<FaPizzaSlice className="why-icon" />,
];
