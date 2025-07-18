import { useDispatch } from "react-redux";
import useFetch from "../hooks/useFetch";
import { removeItem, removeSingleItem, addItems } from "../redux/cartSlice";
import Loader from "../components/Loader"

function CartItems({ id, quantity }) {

  //Data fetched from API
  const { data, error, loading } = useFetch("https://dummyjson.com/products");
  const item = data?.products.find((p) => p.id === id);
  const dispatch = useDispatch()

  if (loading) return <Loader/>;
  if (error) return <p>{error}</p>;
  return (
    <div className="cart-item flex flex-col md:flex-row border-2 rounded-md w-[100%] m-auto items-center justify-evenly">
      <img src={item.thumbnail} alt={item.title} className="w-[200px] md:w-[400px]"  />
      <div className="cart-item-details">
        <h3 className="font-bold mb-5 text-[18px]">{item.title}</h3>
        <p>
          Category: <strong>{item.category}</strong>
        </p>
        <p>
          Brand: <strong>{item.brand}</strong>
        </p>
        <p>Price: ${item.price.toFixed(2)}</p>
        <div className="flex justify-between items-center">
          <button className="mt-3 w-[40px] bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 rounded-md transition duration-200"
          onClick={() => dispatch(removeSingleItem(item.id))}
          >-</button>
          <p className="mt-2">{quantity}</p>
          <button className="mt-3 w-[40px] bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 rounded-md transition duration-200"
            onClick={() => dispatch(addItems({id: item.id, price: item.price}))}
          >+</button>
          <button className="text-[25px] cursor-pointer" onClick={() => dispatch(removeItem(item.id))} ><i className="fa-solid fa-trash"></i></button>
        </div>
        <p className="text-amber-700 font-bold text-center mt-2">Total: ${item.price * quantity} </p>

      </div>
    </div>
  );
}

export default CartItems;
