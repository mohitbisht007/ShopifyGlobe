import CartItems from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearCart } from "../redux/cartSlice";

function Cart() {
  //cart from redux store
  const cart = useSelector((state) => state.cart.cart);
  const subtotal = Number(
    cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
  );
  const gst = Number(((subtotal * 18) / 100).toFixed(2));
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handlePurchase = () => {
    alert("Purchase Succesfull!!!! Redirecting to Home")
    dispatch(clearCart())
    setTimeout(() => {
      navigate("/")
    }, 1000)
  }

  return (
    <div className="flex md:flex-row flex-col w-full gap-6 p-6 bg-gray-100">
      <div className="flex flex-col gap-5 w-full md:w-[70%] p-6 bg-white shadow rounded">
        <h2 className="text-2xl font-semibold border-b pb-2">Your Cart</h2>
        {cart.length > 0 ? (
          cart.map((item) => (
            <CartItems
              key={item.id}
              id={item.id}
              quantity={item.quantity || 1}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center p-10 bg-white rounded shadow-md text-gray-700">
            <h2 className="text-2xl font-semibold mb-4">
              🛒 Your Cart is Empty
            </h2>
            <Link to="/" className="inline-block">
              <button className="cursor-pointer bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-200">
                Shop Now
              </button>
            </Link>
          </div>
        )}
        {cart.length > 0 && <div className="flex justify-end mt-4">
          <button className="cursor-pointer bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600 transition duration-200"
                  onClick={() => (dispatch(clearCart()))}
          >
            Clear Cart
          </button>
        </div>}
      </div>

      <div className="w-full md:w-[30%] bg-white shadow p-6 rounded h-fit">
        <h3 className="text-xl font-semibold mb-4">Price Summary</h3>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>GST (18%)</span>
          <span>${gst}</span>
        </div>
        <hr className="my-3" />
        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>${Number(subtotal + gst).toFixed(2)}</span>
        </div>
        <button className="mt-6 w-full bg-blue-600 cursor-pointer text-white py-2 rounded hover:bg-blue-700 transition"
          onClick={handlePurchase}
        >
          Purchase
        </button>
      </div>
    </div>
  );
}

export default Cart;
