import { useParams } from "react-router-dom";
import { products } from "../data/products";

export default function Product() {
	const { id } = useParams();
	const product = products.find((p) => p.id === +id!);
	return <div>{product?.name}</div>;
}
