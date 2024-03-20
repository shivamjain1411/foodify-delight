import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utlis/cartSlice";

const Cart=()=>{

    const cartItems=useSelector((store)=>store.cart.items)

    const dispatch =useDispatch();
    const handleClearCart =()=>{
        dispatch(clearCart());
    }
    return <div className="text-center m-4 p-4 font-bold">
        <h1>Cart</h1>
        <div className="w-6/12 m-auto border border-solid border-black"><ItemList items={cartItems} /></div>
        <button className="p-2 m-4 bg-black text-white rounded-lg shadow-2xl" onClick={handleClearCart}>clear cart</button>
        {cartItems.length==0 && <h1 className="font-bold text-lg">oops you have nothing in cart..</h1>}
    </div>
}

export default Cart;