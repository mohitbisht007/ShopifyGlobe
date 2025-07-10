import ProductItems from "./ProductItem";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";

function ProductList() {
  const { data, error, loading } = useFetch("https://dummyjson.com/products");
  const [filteredProduct, setFilteredProduct] = useState([])

  useEffect(() =>  {
    if(data && data.products){
      setFilteredProduct(data.products)
    }
  }, [data])

  if (error) return <h2>{error}</h2>;

  if (loading) return <h2>Loading....</h2>;


  return (
    <div className="md:w-[80%] ml-[20%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
      {filteredProduct.map((d) => (
        <ProductItems items={d} key={d.id} />
      ))}
    </div>
  );
}

export default ProductList;
