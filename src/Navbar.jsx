

import { useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleRedirect = () => navigate("/Cart");
  const handleRedirect2 = () => navigate("/Login");
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-blue-600 shadow-md w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
      
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white ">PrinTeeQ</h1>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="nav-link text-white hover:text-gray-200">Home</Link>
            <Link to="/Shop" className="nav-link text-white hover:text-gray-200">Shop</Link>
            <Link to="/MenSection" className="nav-link text-white hover:text-gray-200">Men</Link>
            <Link to="/WomenSection" className="nav-link text-white hover:text-gray-200">Women</Link>

         
            <div className="relative w-64">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 w-full bg-gray-100 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>

          
            <img
              onClick={handleRedirect}
              className="h-6 w-6 object-contain cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
              alt="cart"
            />
            <img
              onClick={handleRedirect2}
              className="h-6 w-6 object-contain cursor-pointer"
              src="data:image/png;base64,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"
              alt="user"
            />
          </div>

         
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 p-2">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

      
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-gray-50 rounded-lg px-4 py-3 space-y-2 shadow-inner">
  <Link to="/" className="block text-gray-700 font-medium hover:text-black">Home</Link>
  <Link to="/Shop" className="block text-gray-700 font-medium hover:text-black">Shop</Link>
  <Link to="/MenSection" className="block text-gray-700 font-medium hover:text-black">Men</Link>
  <Link to="/WomenSection" className="block text-gray-700 font-medium hover:text-black">Women</Link>

  <div className="flex items-center gap-4 border-t border-gray-300 pt-3">
    <img
      onClick={handleRedirect}
      className="h-6 w-6 cursor-pointer transition-transform hover:scale-110"
      src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
      alt="cart"
      title="Cart"
    />
    <img
      onClick={handleRedirect2}
      className="h-6 w-6 cursor-pointer rounded-full transition-transform hover:scale-110"
      src="https://deeptiop.github.io/web-app-clothes-printing-MERN-Stack/assets/user-Cz2xbWm6.png"
      alt="user"
      title="Account"
    />
  </div>
</div>
        )}
      </div>
    </nav>
  );
}
