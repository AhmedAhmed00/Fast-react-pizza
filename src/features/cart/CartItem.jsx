import Button from '../ui/Button';
import { formatCurrency } from './../utils/helpers';
import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';
import UpdateItemQuantity from './UpdateItemQuantity';
function CartItem({ item }) {
  const { pizzaId, name, qunatity, totalPrice } = item;
  const dispatch = useDispatch()

  function handleDeleteItem() {
    dispatch(deleteItem(pizzaId))
  }
  if (item.qunatity === 0) {
    dispatch(deleteItem(pizzaId))
  }


  return (
    <li className='py-3 sm:flex sm:items-center sm:justify-between'>
      <p className='mb-1 sm:mb-0'>
        {qunatity}&times; {name}
      </p>
      <div className='flex justify-between items-cente text-sm sm:gap-6'>
        <p className='text-sm font-bold'>{formatCurrency(totalPrice)} </p>
        <UpdateItemQuantity pizzaId={pizzaId} />

        <Button onclick={handleDeleteItem} type={'small'}>Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
