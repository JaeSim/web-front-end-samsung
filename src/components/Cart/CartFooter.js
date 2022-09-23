import { useCartP } from 'context/CartContext';
import CartTotal from './CartTotal';

const CartFooter = ({ ...restProps }) => {
  const { carts } = useCartP();
  return (
  <footer {...restProps}>
    <CartTotal>{carts.totalPrice}</CartTotal>
  </footer>
);};


export default CartFooter;
