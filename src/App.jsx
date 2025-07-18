import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { productStore } from "./redux/store";
import { Route, Routes } from "react-router-dom";

// Default Routes Needed fro Initial Load
import Filter from "./components/Filter";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import MobileFilterTab from "./components/MobileFilterTab";


//Routes that can use lazy
const ProductDetails = lazy(() => import("./components/ProductDetail"))
const Cart = lazy(() => import("./components/Cart"))
const ErrorPage = lazy(() => import("./components/ErrorPage"))



export default function App() {
  return (
    <Provider store={productStore}>
      <Header />
      <div className="flex">
        <Suspense fallback={<div className="text-center w-full mt-10">Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex-1">
                <div className="md:flex hidden">
                  <Filter />
                </div>
                <div className="md:hidden">
                  <MobileFilterTab/>
                </div>
                <ProductList />
              </div>
            }
          />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/filters" element={<Filter/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
        </Suspense>
      </div>
    </Provider>
  );
}
