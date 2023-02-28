import { ProductButtons, ProductImage, ProductTitle } from "../components"
import { ProductCard } from "../components/ProductCard"
export const ShoppingPage = () => {
    const product = {
        id: "1",
        title: "Coffe Mug - Card",
        img: "./coffee-mug.png"
    }
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr></hr>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductCard.Buttons />
                </ProductCard>
                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle title="Hola mundo"/>
                    <ProductButtons />
                </ProductCard>
            </div>

        </div>
    )
}
