import { CSSProperties, useContext } from "react"
import { ProductContext } from "./ProductCard"
import noImage from "../assets/no-image.jpg"
import styles from "../styles/styles.module.css"
export interface PropsImage{
  img?: string,
  className?:string
  style?:CSSProperties
}
export const ProductImage = ({ img, className, style } : PropsImage) => {
    const {product} = useContext(ProductContext)
  
    return (
      <img className={`${styles.productImg} ${className}`} src={img ? img : product.img ? product.img : noImage} alt="Product image" />
    )
  }