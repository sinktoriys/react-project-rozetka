import productsArray, { Product, getProductsObject } from 'utils/productsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}

const CartHeader = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    console.log(Object.keys(productsInCart))
    return (
        <div>
            {Object.keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productsObject[parseInt(productId)].title}:{''}
                    {productId}: {productsInCart[parseInt(productId)]}
                </div>
            ))}
            <div>Total:$</div>
        </div>
    )
}

export default CartHeader
