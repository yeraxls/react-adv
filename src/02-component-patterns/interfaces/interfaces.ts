import { CSSProperties, ReactElement } from "react";
import { PropsButtons } from "../components/ProductButtons";
import { PropsImage } from "../components/ProductImage";
import { PropsTitle } from "../components/ProductTitle";

export interface ProductCardsProps {
    product: Product,
    children?: ReactElement | ReactElement[],
    className?: string,
    style?: CSSProperties
}

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number,
    increaseBy: (value: number) => void,
    product: Product
}

export interface ProductCardHOCProps{
    ({children, product} : ProductCardsProps) : JSX.Element,
    Title: (Props: PropsTitle) => JSX.Element,
    Image: (Props: PropsImage) => JSX.Element,
    Buttons : (Props : PropsButtons) => JSX.Element
}