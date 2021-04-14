import { Typography } from 'antd'
import React from 'react'
import { CartItemIF } from './cart'
import { OnCheckedChange } from './use-checked'



const ItemCart = (props: Props) => {
    console.log('cart item rerender')
    const { item, checked, onCheckedChange } = props
    const { name, price } = item

    const onWrapCheckedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target
        onCheckedChange(item, checked)
    }
    return (
        <div className="item-card">
            <div className="checkbox-wrap">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={onWrapCheckedChange}
                />
            </div>
            <p className="item-info">
                {name} <Typography.Text mark>${price}</Typography.Text>
            </p>
        </div>
    )
}

export default React.memo(ItemCart)

interface Props {
    item: CartItemIF
    checked: boolean
    onCheckedChange: OnCheckedChange<CartItemIF>
}