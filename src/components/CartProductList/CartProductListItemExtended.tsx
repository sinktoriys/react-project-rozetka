import { Card, CardContent, Grid, Button } from '@mui/material'
import { Product } from 'utils/productsArray'
import DeleteIcon from '@mui/icons-material/Delete'
import Quantity from 'components/Quantity/Quantity'
import { useAppDispatch } from 'redux/hooks'
import { changeProductQuantity, removeProductFromCart } from 'redux/cartReducer'

type Props = { product: Product; productCount: number }

const CartProductListItemExtended = ({ product, productCount }: Props) => {
    const dispatch = useAppDispatch()

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card>
                <CardContent>
                    <div className="product-img">
                        <img src={product.image} alt="" />
                    </div>
                    <div className="product-title">{product.title}</div>
                    <div className="product-features">
                        Price for one item: {product.price}
                    </div>
                    <div className="product-features">
                        Count: {productCount}
                    </div>
                    <Quantity
                        count={productCount}
                        onDecrementClick={() =>
                            productCount === 1
                                ? dispatch(removeProductFromCart(product.id))
                                : dispatch(
                                      changeProductQuantity({
                                          id: product.id,
                                          count: productCount - 1,
                                      })
                                  )
                        }
                        onIncrementClick={() =>
                            dispatch(
                                changeProductQuantity({
                                    id: product.id,
                                    count: productCount + 1,
                                })
                            )
                        }
                        minCount={0}
                    />
                    <Button
                        variant="outlined"
                        onClick={() =>
                            dispatch(removeProductFromCart(product.id))
                        }
                    >
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default CartProductListItemExtended
