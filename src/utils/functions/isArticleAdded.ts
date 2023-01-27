import { ProductsProps } from "../../types";

interface Props {
   id: number
   cart: ProductsProps[]
}

export const isArticleAdded = ({id, cart}: Props) => (
   Boolean(cart?.find((item) => item.id === id))
);

//CHECK IF AN ARTICLE IS ALREADY ON SHOPPING CART TO AVOID DUPLICATES