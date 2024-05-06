import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice } from './cartSlice';
function CartOverview() {
  const totalQuantity = useSelector(state => state.cart.cart.reduce((sum, item) =>
    sum + item.qunatity, 0
  ))
  const totalPrice = useSelector(getTotalCartPrice
  )



  return (
    <div className='bg-stone-800 text-stone-200  uppercase px-4 py-3 sm:px-6 flex items-center justify-between'>
      <p className="text-stone-300 font-semibold space-x-4 sm:space-x-6 ">
        <span>{totalQuantity} pizzas</span>
        <span>${totalPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
