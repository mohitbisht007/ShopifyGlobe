import { useDispatch, useSelector } from "react-redux";
import { toggleUnder50, toggleBetween50_100, toggleAbove1000, toggleBetween100_1000 } from "../redux/filterByPriceSlice";
import { toggleInStock, toggleLowStock } from "../redux/filterByStock";
import { toggleabove4, togglebelow3, togglebtw3to4 } from "../redux/filterByRatings";
import { useNavigate } from "react-router-dom";

export default function Filter() {

  //imported filter slice from store
  const filtersByPrice = useSelector(state => state.filtersByPrice)
  const filterByStock = useSelector(state => state.filterByStock)
  const filterByRating = useSelector(state => state.filterByRating)

  const dispatch = useDispatch()
  const naviagte = useNavigate()

  return (
    <div className="md:w-[20%] w-full md:fixed flex items-center justify-center h-screen md:h-full flex-col">
      <h2 className="mb-5 font-bold text-[30px]">Filters</h2>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col mb-4">
          <h3 className="font-bold text-[20px]">By Price</h3>
          <div>
            <input type="checkbox" checked={filtersByPrice.under50} onChange={() => dispatch(toggleUnder50())} /> &nbsp;
            <label htmlFor="">Less Than $50</label>
          </div>
          <div>
            <input type="checkbox" checked={filtersByPrice.between50_100} onChange={() => dispatch(toggleBetween50_100())} />&nbsp;
            <label htmlFor="">Between $50 & $100</label>
          </div>
          <div>
          <input type="checkbox" checked={filtersByPrice.between100_1000} onChange={() => dispatch(toggleBetween100_1000())} />&nbsp;
          <label htmlFor="">Between $100 & $1000</label>
          </div>
          <div>
            <input type="checkbox" checked={filtersByPrice.above1000} onChange={() => dispatch(toggleAbove1000())} />&nbsp;
            <label htmlFor="">More Than $1000</label>
          </div>
        </div>

        <div className="flex flex-col mb-4">
          <h3 className="font-bold text-[20px]">By Availability</h3>
          <div>
            <input type="checkbox" checked={filterByStock.inStock} onChange={() => dispatch(toggleInStock())} />&nbsp;
            <label htmlFor="">In Stock</label>
          </div>
          <div>
            <input type="checkbox" checked={filterByStock.lowStock} onChange={() => dispatch(toggleLowStock())} />&nbsp;
            <label htmlFor="">Low Stock</label>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="font-bold text-[20px]">By Ratings</h3>
          <div>
            <input type="checkbox" checked={filterByRating.below3} onChange={() => dispatch(togglebelow3())} />&nbsp;
            <label htmlFor="">3 Star or Lower</label>
          </div>
          <div>
            <input type="checkbox" checked={filterByRating.btw3to4} onChange={() => dispatch(togglebtw3to4())} />&nbsp;
            <label htmlFor="">Between 3Star & 4star</label>
          </div>
          <div>
            <input type="checkbox" checked={filterByRating.above4} onChange={() => dispatch(toggleabove4())} />&nbsp;
            <label htmlFor="">4Star+</label>
          </div>
        </div>
        <div className="md:hidden">
          <button className="mt-3 p-2 w-[80px] bg-indigo-600 hover:bg-indigo-700 cursor-pointer text-white text-sm font-medium py-2 rounded-md transition duration-200" onClick={() => naviagte("/")}>Apply</button>
        </div>
      </div>
    </div>
  );
}
