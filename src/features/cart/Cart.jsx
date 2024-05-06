import { Link, useNavigate } from 'react-router-dom';
import LinkButton from '../ui/LinkButton';
import Button from '../ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from './cartSlice';


function Cart() {
  const cart = useSelector(state => state.cart.cart);
  const username = useSelector(state => state.user.username)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleClear() {
    dispatch(clearCart())
  }


  return (
    <div className='px-5 py-3'>
      <LinkButton to="/menu" >
        &larr; Back to menu
      </LinkButton>

      <h2 className='my-4 text-xl font-semibold'>Your cart, {username}</h2>
      <ul className='divide-y divide-stone-200 border-b mt-3'>
        {cart.map(item => <CartItem item={item} key={item.id} />)}
      </ul>

      <div className='mt-6 space-x-3'>
        <Button onclick={() => {
          navigate('/order/new')
        }} type={'primary'} >Order Pizzas</Button>
        <Button onclick={handleClear} type={'secondary'}>Clear Cart</Button>

      </div>
    </div>
  );
}

export default Cart;
