import React, { useContext, useEffect, useState } from 'react';
import rasim3 from "../img/2.png";
import rasim4 from "../img/3.png";
import rasim6 from "../img/6.png";
import rasim7 from "../img/7.png";
import rasim5 from "../img/5.png";
import rasim8 from "../img/8.png";
import rasim9 from "../img/9.png";
import rasim10 from "../img/10.png";
import rasim11 from "../img/11.png";
import rasim12 from "../img/12.png";
import { useTranslation } from 'react-i18next';
function Hoome() {
    let {t ,i18n}=useTranslation()
  return (
    <div>
      <div className='flex justify-between relative items-center pt-[60px]'>
        <div className='text-start'>
          <h1 className='text-[80px] font-bold leading-[90px] w-[700px]'>{t("l7")}</h1>
          <p className='text-[24px] max-w-[580px] text-gray-400 mt-4'>{t("l8")}</p>
          <div className='flex mt-12'>
            <input className=" bg-slate-200 pl-5 rounded-l-xl w-[400px] rounded-r-none" type="text" placeholder={t("l9")} />
            <button className='h-[60px] w-[70px] rounded-r-xl hover:bg-orange-200 bg-orange-400'>kzsf</button>
          </div>
          <div className='div-1 mt-10'>
            <div>
              <h6>✔</h6>
              <p>{t("l10")}</p>
            </div>
            <div>
              <h6>✔</h6>
              <p>{t("l11")}</p>
            </div>
            <div>
              <h6>✔</h6>
              <p>{t("l12")}</p>
            </div>
            <div>
              <h6>✔</h6>
              <p>{t("l13")}</p>
            </div>
          </div>
        </div>
        <img className='absolute img' src={rasim3} alt="" />
        <img className='absolute img2' src={rasim6} alt="" />
        <img className='absolute img3' src={rasim7} alt="" />
        <div className='div-2'>
          <div className='bg-red-50 border-[1px] border-neutral-400 p-3 rounded-[30px]'>
            <img src={rasim12} alt="" />
            <p className='mt-[10px] font-[18px]'>{t("l15")}</p>
            <span className='text-red-300 font-[18px]'>$9.00</span>
          </div>
          <div className='bg-red-50 border-[1px] border-neutral-400 p-3 rounded-[30px]'>
            <img src={rasim4} alt="" />
            <p className='mt-[10px] font-[18px]'>{t("l14")}</p>
            <span className='text-red-300 font-[18px]'>$12.00</span>
          </div>
        </div>
      </div>
      <div className='div-3 carousel carousel-end rounded-box'>
        <div className='carousel-item'>
          <img src={rasim5} alt="" />
          <h4>{t("l16")}</h4>
          <p>{t("l17")}</p>
        </div>
        <div className='carousel-item'>
          <img src={rasim10} alt="" />
          <h4>{t("l18")}</h4>
          <p>{t("l17")}</p>
        </div>
        <div className='carousel-item'>
          <img src={rasim9} alt="" />
          <h4>{t("l20")}</h4>
          <p>{t("l17")}</p>
        </div>
        <div className='carousel-item'>
          <img src={rasim8} alt="" />
          <h4>{t("l22")}</h4>
          <p>{t("l17")}</p>
        </div>
        <div className='carousel-item'>
          <img src={rasim11} alt="" />
          <h4>{t("l24")}</h4>
          <p>{t("l17")}</p>
        </div>
        <div className='carousel-item'>
          <img src={rasim5} alt="" />
          <h4>{t("l16")}</h4>
          <p>{t("l17")}</p>
        </div>
        <div className='carousel-item'>
          <img src={rasim10} alt="" />
          <h4>{t("l18")}</h4>
          <p>{t("l17")}</p>
        </div>
        <div className='carousel-item'>
          <img src={rasim9} alt="" />
          <h4>{t("l20")}</h4>
          <p>{t("l17")}</p>
        </div>
        <div className='carousel-item'>
          <img src={rasim8} alt="" />
          <h4>{t("l22")}</h4>
          <p>{t("l17")}</p>
        </div>
        <div className='carousel-item'>
          <img src={rasim11} alt="" />
          <h4>{t("l24")}</h4>
          <p>{t("l17")}</p>
        </div>
      </div>
    </div>
  );
}

export default Hoome;
