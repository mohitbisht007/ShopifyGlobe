import ProductItems from "./ProductItem";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems, removeSingleItem } from "../redux/cartSlice";
import Loader from "./Loader";

function ProductList() {

  //Got Data
  const { data, error, loading } = useFetch("https://dummyjson.com/products");

  //set intial Filtered Products
  const [filteredProduct, setFilteredProduct] = useState([])

  // imported 3 filter option slice from store
  const filtersByPrice = useSelector(state => state.filtersByPrice)
  const filterByStock = useSelector(state => state.filterByStock)
  const filterByRating = useSelector(state => state.filterByRating)
  const dispatch = useDispatch()

  // got the current cart
  const cart = useSelector(state => state.cart.cart)


  //add items function
  const addItemsCart = (id, price) => {
    dispatch(addItems({id: id, price: price}))
  }

  //remove item function
  const removeItemsCart = (id) => {
    dispatch(removeSingleItem(id))
  }
  
  //search input state
  const [search, setSearch] = useState("")

  useEffect(() =>  {
  

    if(!data || !data.products) return; 


    // destrucutres filter option from imported state
    const {under50, between50_100, between100_1000, above1000} = filtersByPrice
    const {inStock, lowStock} = filterByStock
    const {below3, btw3to4, above4} = filterByRating

    //got value for all three filter options
    const noFilterPrice = !under50 && !between50_100 && !between100_1000 && !above1000
    const noFilterStock = !inStock && !lowStock
    const noFilterRating = !below3 && !btw3to4 && !above4


    //filtered our data with matching options
    const filtered = data.products.filter(product => {
      const priceMatch = 
      noFilterPrice ||
      (under50 && product.price < 50) ||
      (between50_100 && product.price >= 50 && product.price < 100) ||
      (between100_1000 && product.price >= 100 && product.price < 1000) ||
      (above1000 && product.price >= 1000)

      const stockMatch = 
      noFilterStock ||
      (inStock && product.availabilityStatus === "In Stock") ||
      (lowStock && product.availabilityStatus !== "In Stock")

      const ratingsMatch = 
      noFilterRating ||
      (below3 && product.rating < 3) ||
      (btw3to4 && product.rating >= 3 && product.rating <= 4) ||
      (above4 && product.rating > 4)

      const searchMatch = product.title.includes(search)

      return priceMatch && stockMatch && ratingsMatch && searchMatch
    })

    setFilteredProduct(filtered)

  }, [data, filtersByPrice, filterByStock, filterByRating, cart, search])

  if (error) return <h2>{error}</h2>;

  if (loading) return <Loader/>;

  

  return (
    <div className="w-full md:w-[80%] md:ml-[20%] mb-15">
      <div className="p-4 mt-6 text-center">
        <input 
        type="text" 
        placeholder="Search for products..." 
        className="border p-3 w-[60%] m-6"
        value={search}
        onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
        {filteredProduct.length > 0 ? 
        filteredProduct.map((d) => {
        const cartItem = cart.find(i => i.id === d.id)
        const quantityInCart = cartItem ? cartItem.quantity : 0
        return (<ProductItems items={d} key={d.id} addItemsCart = {addItemsCart} removeItemsCart={removeItemsCart} quantityInCart={quantityInCart} />)
      }) :
      <div className="col-span-full text-center text-gray-500 text-lg">
        <h2>No Products Found....</h2>
      </div>
      } 
      </div> 
    </div>
  );
}


export default ProductList;
