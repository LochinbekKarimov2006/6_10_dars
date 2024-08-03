import React from 'react'
import rasim3 from "../img/2.png"
import rasim4 from "../img/3.png"
function Hoome() {
  return (
    <div>
        <div className='flex justify-between'>
            <div className='text-start'>
                <h1 className='text-[80px]'>Let your groceries <br /> come to you</h1>
                <p className='text-[24px] max-w-[580px] text-gray-400'>Get fresh groceries online without stepping out to  make delicious food with the freshest ingredients</p>
                <div className='flex '>
                <input className=" rounded-r-none" type="text" placeholder="Type here" />
                <button className='btn rounded-l-none'>kzsf</button>
                </div>
                <div>
                    <div>
                        <p>✅</p>
                        <p>Fresh Vegetables</p>
                    </div>
                    <div>
                        <p>✅</p>
                        <p>Fresh Vegetables</p>
                    </div>
                    <div>
                        <p>✅</p>
                        <p>Fresh Vegetables</p>
                    </div>
                    <div>
                        <p>✅</p>
                        <p>Fresh Vegetables</p>
                    </div>
                </div>
            </div>
                <img className='absolute img' src={rasim3} alt="" />
            <div>
                <div>
                    <img src={rasim4} alt="" />
                    <p>Fresh Carrot</p>
                    <span>$9.00</span>
                </div>
                <div>
                    <img src={rasim4} alt="" />
                    <p>Fresh Carrot</p>
                    <span>$9.00</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hoome