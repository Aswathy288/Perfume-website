import { useState } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../assets/H&S logo.png"; 

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="navbar bg-base-200 h-20 flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <div 
            tabIndex={0} 
            role="button" 
            className="btn btn-ghost lg:hidden"
            onClick={toggleDropdown}
            aria-expanded={dropdownOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {dropdownOpen && (
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><Link to="/" className="hover:underline text-lg">Home</Link></li>
              <li>
                <details>
                  <summary className="text-lg">Categories</summary>
                  <ul className="p-2">
                    <li><Link to="/men" className="text-lg">Men's</Link></li>
                    <li><Link to="/women" className="text-lg">Women's</Link></li>
                  </ul>
                </details>
              </li>
              <li><Link to="/about" className="hover:underline text-lg">About</Link></li>
              <li><Link to="/contact" className="hover:underline text-lg">Contact</Link></li>
            </ul>
          )}
        </div>
        <img className="btn btn-ghost w-32 h-auto" src={LogoImg} alt="H&S Logo" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/" className="hover:underline text-lg">Home</Link></li>
          <li>
            <details>
              <summary className="text-lg">Categories</summary>
              <ul className="p-2">
                <li><Link to="/men" className="text-lg">Men's</Link></li>
                <li><Link to="/women" className="text-lg">Women's</Link></li>
              </ul>
            </details>
          </li>
          <li><Link to="/about" className="hover:underline text-lg">About</Link></li>
          <li><Link to="/contact" className="hover:underline text-lg">Contact</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn"><Link to="/Order" className="hover:underline text-lg  ">
          <i className="fa-solid fa-cart-shopping  fa-3x" style={{color: "gray"}}></i> </Link>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
