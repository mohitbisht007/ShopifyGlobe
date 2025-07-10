import { useState } from "react";

export default function Filter() {

 const [priceFilter, setPriceFilter] = useState({
    under50: false,
    between50_100: false,
    between100_1000: false,
    abovce1000: false,
 })


  return (
    <div className="w-[20%] fixed flex items-center justify-center h-full flex-col">
      <h2>Filter</h2>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col mb-4">
          <h3 className="font-bold text-[20px]">By Price</h3>
          <div>
            <input checked={priceFilter.under50} type="checkbox" /> &nbsp;
            <label htmlFor="">Less Than $50</label>
          </div>
          <div>
            <input type="checkbox" />&nbsp;
            <label htmlFor="">Between $50 & $100</label>
          </div>
          <div>
          <input type="checkbox" />&nbsp;
          <label htmlFor="">Between $100 & $1000</label>
          </div>
          <div>
            <input type="checkbox" />&nbsp;
            <label htmlFor="">More Than $1000</label>
          </div>
        </div>

        <div className="flex flex-col mb-4">
          <h3 className="font-bold text-[20px]">By Availability</h3>
          <div>
            <input type="checkbox" />&nbsp;
            <label htmlFor="">In Stock</label>
          </div>
          <div>
            <input type="checkbox" />&nbsp;
            <label htmlFor="">Low Stock</label>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="font-bold text-[20px]">By Ratings</h3>
          <div>
            <input type="checkbox" />&nbsp;
            <label htmlFor="">3 Star or Lower</label>
          </div>
          <div>
            <input type="checkbox" />&nbsp;
            <label htmlFor="">Between 3Star & 4star</label>
          </div>
          <div>
            <input type="checkbox" />&nbsp;
            <label htmlFor="">4Star+</label>
          </div>
        </div>
      </div>
    </div>
  );
}
