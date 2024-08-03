import React from 'react'
import rasim from "../img/logo.png"
import rasim2 from "../img/1.png"
import user from "../json/uz.json"
import user2 from "../json/in.json"
function Navbar() {
    function tema(e){
        if(e=="uz"){
            localStorage.setItem('user', JSON.stringify(user));
        }
        if(e=="in"){
            localStorage.setItem('user', JSON.stringify(user2));
        }
    }
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
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
       <li><a>Home</a></li>
      <li><a>Categories</a></li>
      <li><a>Sales</a></li>
      <li><a>FAQ</a></li>
      <li><a>About</a></li>
      <li><a>Contact</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><img src={rasim} className=' w-[194px]' alt="" /></a>
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
    <button className='mr-[62px]'><img src={rasim2}  alt="" /></button>
    <select className="select select-bordered  max-w-xs">
  <option disabled selected>Tema</option>
  <option>Han Solo</option>
  <option>Greedo</option>
</select>
<select onChange={(e)=>{tema(e.target.value)}} className="select bg-orange-300 rounded-2xl select-bordered ml-[40px] max-w-xs">
  <option value={"uz"}>uz</option>
  <option value={"in"}>in</option>
</select>
  </div>
</div>
    </div>
  )
}

export default Navbar