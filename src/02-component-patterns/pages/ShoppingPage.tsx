import { ProductButtons, ProductImage, ProductTitle } from "../components"
import { ProductCard } from "../components/ProductCard"
import "../styles/custom-style.css"
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
                <ProductCard product={product} className="bg-dark text-white">
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title className="text-bold"/>
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard>
                <ProductCard product={product} className="bg-dark text-white" style={{
                    backgroundColor: '#78D1F8'
                }}>
                    <ProductImage className="custom-image" />
                    <ProductTitle title="Hola mundo" className="text-bold" />
                    <ProductButtons className="custom-buttons" style={{
                        display: 'flex',
                        justifyContent: 'end'
                        }}/>
                </ProductCard>
            </div>

        </div>
    )
}
