import { Link } from "react-router-dom";

function ProductItems({ items, addItemsCart, removeItemsCart, quantityInCart }) {

  return (
    <div className="w-full bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300">
      <Link to={`/product/${items.id}`}><img
        src={items.thumbnail}
        alt={items.title}
        className="w-full h-40 object-cover"
      /></Link>

      <div className="p-4 flex flex-col gap-2">
        <Link to={`/product/${items.id}`}>
        <h2 className="font-semibold text-lg text-gray-800">
          {items.title}
        </h2>
        </Link>
        <Link to={`/product/${items.id}`}>
        <p className="text-sm text-gray-600">
          {items.description?.slice(0, 60)}...
        </p>
        </Link>
        <div className="flex justify-between items-center text-sm mt-2">
          <span className="text-indigo-600 font-semibold">${items.price}</span>
          <span className="text-yellow-500 font-medium">
            <i className="fa-solid fa-star"></i> {items.rating}
          </span>
        </div>

        <div className="mt-1">
          <span
            className={`text-xs px-2 py-1 rounded-full font-medium ${
              items.availabilityStatus === "In Stock"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {items.availabilityStatus || "In Stock"}
          </span>
        </div>

        {quantityInCart 
        ? 
        <div className="flex justify-between items-center">
          <button className="mt-3 cursor-pointer w-[40px] bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 rounded-md transition duration-200"
          onClick={() => removeItemsCart(items.id)}
          >-</button>
          <p className="mt-2">{quantityInCart}</p>
          <button className="mt-3 cursor-pointer w-[40px] bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 rounded-md transition duration-200"
            onClick={() => addItemsCart(items.id)}
          >+</button>
        </div>
        : 
        (<button className="mt-3 cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 rounded-md transition duration-200"
         onClick={() => addItemsCart(items.id, items.price)}  >
          Add to Cart
        </button>)}
      </div>
    </div>
  );
}

export default ProductItems;
