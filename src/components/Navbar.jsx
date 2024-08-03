import React, { useContext, useState, useEffect } from 'react';
import rasim from "../img/logo.png";
import rasim2 from "../img/1.png";
import user from "../json/uz.json";
import user2 from "../json/in.json";
import { GlobalContext } from './GlobalContext';

function Navbar() {
  const { state, setState } = useContext(GlobalContext);
  const [data, setData] = useState(null);
  const til = JSON.parse(localStorage.getItem('user')) || {}; // Agar `null` bo'lsa, bo'sh obyekt qaytaradi
  let kl = til.navbar ? til.navbar[0] : {}; 
  localStorage.setItem('user', JSON.stringify(user2));

  // Handle language change
  function tema(e) {
    if (e === "uz") {
      localStorage.setItem('user', JSON.stringify(user));
      setState(user);
    } else if (e === "in") {
      localStorage.setItem('user', JSON.stringify(user2));
      setState(user2);
    }
    setData(state + 1); // Triggers a re-render
  }

  // Handle theme change
  function changeTheme(e) {
    const selectedTheme = e.target.value;
    document.documentElement.setAttribute('data-theme', selectedTheme);
    localStorage.setItem('theme', selectedTheme);
  }

  // Set the initial theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'cupcake'; // Default theme
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>Home</a></li>
              <li><a>Categories</a></li>
              <li><a>Sales</a></li>
              <li><a>FAQ</a></li>
              <li><a>About</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl"><img src={rasim} className='w-[194px]' alt="Logo" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-[20px] text-zinc-400 text-lg">
            <li><a>Home</a></li>
            <li><a>Categories</a></li>
            <li><a>Sales</a></li>
            <li><a>FAQ</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        <div className="navbar-end flex">
          <button className='mr-[62px]'><img src={rasim2} alt="Cart" /></button>
          <select onChange={changeTheme} className="select z-50 select-bordered max-w-xs">
            <option disabled selected>Tema</option>
            <option value="dark">Dark</option>
            <option value="cupcake">Cupcake</option> {/* Add more themes as needed */}
          </select>
          <select value={kl.lo} onChange={(e) => tema(e.target.value)} className="select bg-orange-300 rounded-2xl select-bordered ml-[40px] max-w-xs">
            <option value={"uz"}>Uz</option>
            <option value={"in"}>In</option>

          </select>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
