import Filter from "./components/Filter"
import Header from "./components/Header"
import ProductList from "./components/ProductList"

export default function App(){


   return (
    <>
      <Header />
      <div className="flex">
       <Filter />
      <ProductList />
      </div>
      
    </>
   )
}