import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import productsArray from 'utils/productsArray'
type Props = {}
const ProductList = (props: Props) => {
    return (
        <>
            <Typography
                component="h2"
                variant="h3"
                align="center"
                sx={{
                    marginBottom: '30px',
                }}
            >
                List of Products
            </Typography>
            <Grid container spacing={4}>
                {/* <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem title="iPhone X" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem title="iPhone 13 Pro" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem title="iPhone 14 Pro" />
                </Grid> */}
                {productsArray.map(
                    ({
                        id,
                        title,
                        description,
                        type,
                        capacity,
                        price,
                        image,
                    }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductListItem
                                title={title}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                                image={image}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductList
