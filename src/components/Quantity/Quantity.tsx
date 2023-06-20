import { Button, TextField } from '@mui/material'
type Props = {
    count: number
    onDecrementClick: () => void
    onIncrementClick: () => void
    minCount: number
}
const Quantity = ({
    count,
    onDecrementClick,
    onIncrementClick,
    minCount,
}: Props) => {
    return (
        <div className="product-quantity">
            <Button variant="outlined" onClick={() => onDecrementClick()}>
                -
            </Button>
            <TextField value={count} size="small" />
            <Button
                variant="outlined"
                onClick={() => onIncrementClick()}
                disabled={count <= minCount}
            >
                +
            </Button>
        </div>
    )
}
export default Quantity
