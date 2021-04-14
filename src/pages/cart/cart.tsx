import { List } from 'antd'
import React from 'react'
import './cart.less'
import ItemCart from './itemCard';

const cartData = Array(5)
    .fill(undefined)
    .map((v, i) => (
        {
            id: i,
            name: `商品${i + 1}`,
            price: Math.round(Math.random() * 100)
        }
    ))

const Cart = () => {
    const onCheckedChange = () => {

    }
    return (
        <div className="cart">
            <List
                header={<div>购物车</div>}
                // footer={Footer}
                bordered
                dataSource={cartData}
                renderItem={item => {
                    // const checked = checkedMap[item.id] || false
                    return (
                        <List.Item>
                            <ItemCart item={item} checked={false} onCheckedChange={onCheckedChange} />
                        </List.Item>
                    )
                }}
            />
        </div>
    )
}

export default Cart

export interface CartItemIF {
    id: number
    name: string
    price: number
}