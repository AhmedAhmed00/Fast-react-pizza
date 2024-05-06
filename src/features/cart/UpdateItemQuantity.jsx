import React from 'react'
import Button from '../ui/Button'
import { useDispatch } from 'react-redux'
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice'


export default function UpdateItemQuantity({ pizzaId, curQuantity }) {
    const dispatch = useDispatch()

    return <div className='flex items-center gap-2'>
        <Button onclick={() => {
            dispatch(decreaseItemQuantity(pizzaId))
        }} type={'rounded'}>-</Button>
        <p>
            {curQuantity}
        </p>
        <Button onclick={() => {
            dispatch(increaseItemQuantity(pizzaId))
        }} type={'rounded'}>+</Button>

    </div>
}
