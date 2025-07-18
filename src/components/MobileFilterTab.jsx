import { Link } from "react-router-dom"

export default function MobileFilterTab(){
    return  <div className="fixed bottom-0 left-0 w-full h-[60px] bg-amber-100 flex justify-center items-center shadow-md z-50">
      <Link to="/filters">
        <button className="bg-white cursor-pointer text-amber-700 font-semibold px-6 py-2 rounded-full shadow hover:bg-amber-200 transition duration-200">
          Filters
        </button>
      </Link>
    </div>
}