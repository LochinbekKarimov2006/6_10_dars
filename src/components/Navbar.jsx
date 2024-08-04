import React, { useContext, useState, useEffect } from 'react';
import rasim from "../img/logo.png";
import rasim2 from "../img/1.png";
import user from "../json/uz.json";
import user2 from "../json/in.json";
import { GlobalContext } from './GlobalContext';

function Navbar() {
    useEffect(()=>{

        localStorage.setItem('user', JSON.stringify(user2));
    },[])
  const { state, setState } = useContext(GlobalContext);
  const [data, setData] = useState(null);
  const til = JSON.parse(localStorage.getItem('user')) || {}; // Agar `null` bo'lsa, bo'sh obyekt qaytaradi
  let kl = til.navbar ? til.navbar[0] : {}; 

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
    const selectedTheme = e
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
          
          <div className=" z-50 dropdown dropdown-end ml-10">
      <div tabIndex={0} role="button" className=" div-5 btn btn-ghost btn-circle avatar">
        <div className="  w-94 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className=" h-7 w-7"><path fillRule="evenodd" d="M11 5a.75.75 0 0 1 .688.452l3.25 7.5a.75.75 0 1 1-1.376.596L12.89 12H9.109l-.67 1.548a.75.75 0 1 1-1.377-.596l3.25-7.5A.75.75 0 0 1 11 5Zm-1.24 5.5h2.48L11 7.636 9.76 10.5ZM5 1a.75.75 0 0 1 .75.75v1.261a25.27 25.27 0 0 1 2.598.211.75.75 0 1 1-.2 1.487c-.22-.03-.44-.056-.662-.08A12.939 12.939 0 0 1 5.92 8.058c.237.304.488.595.752.873a.75.75 0 0 1-1.086 1.035A13.075 13.075 0 0 1 5 9.307a13.068 13.068 0 0 1-2.841 2.546.75.75 0 0 1-.827-1.252A11.566 11.566 0 0 0 4.08 8.057a12.991 12.991 0 0 1-.554-.938.75.75 0 1 1 1.323-.707c.049.09.099.181.15.271.388-.68.708-1.405.952-2.164a23.941 23.941 0 0 0-4.1.19.75.75 0 0 1-.2-1.487c.853-.114 1.72-.185 2.598-.211V1.75A.75.75 0 0 1 5 1Z" clip-rule="evenodd"></path></svg>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="button dropdown-content   bg-base-100 rounded-box z-[1] mt-3  p-2 shadow">
        <button onClick={()=>{tema("in")}} >IN</button>
        <button onClick={()=>{tema("uz")}} >UZ</button>
      </ul>
    </div>
          <div className="dropdown dropdown-end ml-10">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <svg
    className="swap-on h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="button dropdown-content   bg-base-100 rounded-box z-[1] mt-3  p-2 shadow">
        <button onClick={()=>{changeTheme("dark")}} style={{ backgroundColor: '#000' }}></button>
        <button onClick={()=>{changeTheme("cupcake")}} style={{ backgroundColor: '#f8edf8c0' }}></button>
        <button onClick={()=>{changeTheme("light")}} style={{ backgroundColor: '#fff' }}></button>
        <button onClick={()=>{changeTheme("synthwave")}} style={{ backgroundColor: '#27074e' }}></button>
        <button onClick={()=>{changeTheme("sunset")}}style={{ backgroundColor: '#0d181e' }}></button>
        <button onClick={()=>{changeTheme("cyberpunk")}} style={{ backgroundColor: '#fde935c0' }}></button>
        <button onClick={()=>{changeTheme("valentine")}} style={{ backgroundColor: '#ffe4ff' }}></button>
        <button className='button2' onClick={()=>{changeTheme("dim")}} ></button>
       
       
      </ul>
    </div>
  </div>
        </div>
      </div>
  );
}

export default Navbar;
