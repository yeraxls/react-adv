import styles from "../styles/styles.module.css"
import { useProduct } from "../hooks/useProduct"
import { createContext, useContext } from "react";
import { ProductContextProps, ProductCardsProps } from "../interfaces/interfaces";
import {ProductImage, ProductTitle, ProductButtons} from "./index"


export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style }: ProductCardsProps) => {
  const { counter, increaseBy } = useProduct();
  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  )
}

ProductCard.Image = ProductImage
ProductCard.Title = ProductTitle
ProductCard.Buttons = ProductButtons
