import { Button, TextField } from '@mui/material'
type Props = {
    count: number
    onDecrementClick: () => void
    onIncrementClick: () => void
}
const Quantity = ({ count, onDecrementClick, onIncrementClick }: Props) => {
    return (
        <div className="product-quantity">
            <Button variant="outlined" onClick={() => onDecrementClick()}>
                -
            </Button>
            <TextField value={count} size="small" />
            <Button variant="outlined" onClick={() => onIncrementClick()}>
                +
            </Button>
        </div>
    )
}
export default Quantity
