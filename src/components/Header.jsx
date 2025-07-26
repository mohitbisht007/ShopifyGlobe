import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const cart = useSelector((state) => state.cart.cart || []);

  return (
    <nav className="h-[80px] bg-blue-600 flex items-center justify-between px-4 text-white shadow-md">
      <Link to="/">
        <h1 className="text-lg font-bold">ShopifyGlobe</h1>
      </Link>
      <div className="flex gap-4">
        <Link to="https://github.com/mohitbisht007/ShopifyGlobe" target="_blank">
          <button className="bg-white cursor-pointer text-blue-600 px-3 py-1 rounded hover:bg-blue-100 transition">
            <i className="fa-brands fa-github"></i>
          </button>
        </Link>
        <Link to="/cart">
          <button className="bg-white cursor-pointer text-blue-600 px-3 py-1 rounded hover:bg-blue-100 transition">
            Cart: {cart.length}
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
