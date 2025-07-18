import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import Loader from "./Loader";
import { addItems, removeItem } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function ProductDetails() {
  const dispatch = useDispatch();

  //got data from custom hooks
  const { data, error, loading } = useFetch("https://dummyjson.com/products");
  const { id } = useParams();

  //finded item through id
  const item = data?.products?.find((product) => product.id === Number(id));

  //import cart state and finded items in cart through id that it was present or not
  const cart = useSelector(state => state.cart.cart)
  const iteminCart = cart.some(p => p.id === Number(id))

  //conditional true and false with items in cart or not
  const [addtoCart, setAddToCart] = useState(iteminCart ? true : false);

  const [image, setImage] = useState(0);

  //add to cart function
  const addItemtoCart = (id, price) => {
    dispatch(addItems({ id: id, price: price }));
    setAddToCart(!addtoCart);
  };

  //add Item from cart function
  const removeItemFromCart = (id) => {
    dispatch(removeItem(id));
    setAddToCart(!addtoCart);
  };

  if (loading) return <Loader />;

  if (error) return <p>{error}</p>;

  return (
    <div className="w-full mt-30 text-center">
      <div className="w-[100%] flex justify-center items-center">
        {image > 0 && (
          <button
            onClick={() => setImage(image - 1)}
            className="text-[30px] cursor-pointer"
          >
            <i class="fa-solid fa-chevron-left"></i>
          </button>
        )}
        <img
          src={`${item.images[image]}`}
          className="md:w-[400px] w-[250px] mb-20"
          alt=""
        />
        {image < item.images.length - 1 && (
          <button
            onClick={() => setImage(image + 1)}
            className="text-[30px] cursor-pointer"
          >
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        )}
      </div>
      <h2 className="text-[30px] flex items-center justify-center gap-5 font-bold">
        {item.title}
        <span
          className={`text-[16px] border-2 p-1 rounded-md text-white ${
            item.rating >= 4 ? "bg-lime-500" : "bg-amber-500"
          }`}
        >
          {item.rating}
          <i class="fa-regular fa-star"></i>
        </span>
        <span className="text-[16px] text-lime-700">
          {item.reviews.length} Reviews
        </span>
      </h2>
      <p>{item.description}</p>
      <p className="text-[16px] mt-5 text-lime-500 font-bold">Special Price</p>
      <p className="text-[25px] font-bold">
        $
        {(item.price - (item.price * item.discountPercentage) / 100).toFixed(2)}{" "}
        <span className="text-[20px] font-bold decoration-2 line-through decoration-red-400">
          ${item.price}
        </span>
      </p>

      <div>
        {addtoCart ? (
          <button
            className="mt-3 bg-red-600 p-4 cursor-pointer hover:bg-red-700 text-white text-sm font-bold py-2 rounded-md transition duration-200"
            onClick={() => removeItemFromCart(Number(id))}
          >
            Remove Item
          </button>
        ) : (
          <button
            className="mt-3 bg-indigo-600 p-4 cursor-pointer hover:bg-indigo-700 text-white text-sm font-bold py-2 rounded-md transition duration-200"
            onClick={() => addItemtoCart(item.id, item.price)}
          >
            Add To cart
          </button>
        )}
      </div>

      <div className="w-full margin-auto flex-col mt-4 flex justify-evenly p-10">
        <h2 className="text-[24px] font-bold mb-6">Product Details</h2>
        <h3 className="text-zinc-500 font-bold text-[18px]">
          Product Dimension:{" "}
          <span className="text-black ml-10 text-[16px] font-medium">
            {item.dimensions.width} width, {item.dimensions.width} width,{" "}
            {item.dimensions.depth} depth{" "}
          </span>
        </h3>
        <h3 className="text-zinc-500 font-bold text-[18px]">
          Return Policy:{" "}
          <span className="text-black ml-10 text-[16px] font-medium">
            {item.returnPolicy}
          </span>
        </h3>
        <h3 className="text-zinc-500 font-bold text-[18px]">
          Warranty:{" "}
          <span className="text-black ml-10 text-[16px] font-medium">
            {item.warrantyInformation}
          </span>
        </h3>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Reviews({item.reviews.length})
        </h2>

        {item.reviews.map((rev, index) => (
          <div
            key={index}
            className="border border-gray-300 bg-white w-[90%] md:w-[70%] mx-auto mb-6 p-5 rounded-lg shadow-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <span
                className={`text-white text-sm font-semibold px-2 py-1 rounded ${
                  rev.rating >= 4 ? "bg-lime-600" : "bg-yellow-500"
                }`}
              >
                {rev.rating} ★
              </span>
              <span className="text-sm text-gray-500">
                {new Date(rev.date).toLocaleDateString()}
              </span>
            </div>

            <p className="text-gray-800 text-base font-bold mb-2">
              {rev.comment}
            </p>

            <div className="text-sm text-gray-600">
              <p>
                <span className="font-semibold">{rev.reviewerName}</span>{" "}
                <span className="text-xs text-gray-500 italic">
                  Certified Buyer
                </span>
              </p>
              <p>{rev.reviewerEmail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDetails;
