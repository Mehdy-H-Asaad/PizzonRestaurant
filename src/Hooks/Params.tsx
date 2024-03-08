import { useParams } from "react-router-dom";

export const CustomParam = () => {
	const { cuisine } = useParams();
	if (!cuisine) {
		throw new Error("Custom Param is undefined");
	}
	return cuisine;
};
