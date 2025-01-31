// @ts-ignore
import React, { useState, useEffect, useRef, PropsWithChildren } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logotip from '../../assets/svg/header/logotip.svg';
import cute_supp from '../../assets/svg/cute_supp.svg'
import Col from './Col';



export default function Footer() {
  const location = useLocation()
  return (
    <Col
      className={"w-screen items-center justify-center mt-[130px] border-t-[6px] border-[#F9F8FE]"}
    >
      <div
         className={"h-20 w-[1128px] ml-156 mb-35 rounded-b-lg flex justify-between"}>
        <img className={"object-scale-up mt-12 w-[375px] h-[78.9px]"} src={logotip} alt = {''} />
        <div>
        <div className={"justify-center flex mt-[56px]"}>
          <a href="/crypto" className={`font-montserrat font-medium text-[18px] ml-[134px] ${
                    location.pathname==('/crypto') ? 'text-aspide-blue' : 'text-very-black'
                    }`}>Криптопроцессинг</a>
          <a href="/about" className={`font-montserrat font-medium text-[18px] ml-[66px] ${
                    location.pathname==('/about') ? 'text-aspide-blue' : 'text-very-black'
                    }`}>О нас</a>
          <a href="https://gateway.microtechapp.com/api/documentation" className={`font-montserrat font-medium text-[18px] ml-[66px] text-very-black`}>API</a>
          <a href="/faq" className={`font-montserrat font-medium text-[18px] ml-[66px] ${
                    location.pathname==('/faq') ? 'text-aspide-blue' : 'text-very-black'
                    }`}>FAQ</a>
          <a href="" className={`font-montserrat font-medium text-[18px] ml-[67px] ${
                    location.pathname==('/blog') ? 'text-aspide-blue' : 'text-very-black'
                    }`}>Блог</a>
        </div>
          <div className={"ml-[307px] mt-[39px]"}>
            <a href="/support" className={`font-montserrat font-medium text-[18px] flex  ${
                    location.pathname==('/support') ? 'text-aspide-blue' : 'text-very-black'
                  }`}>
              Служба поддержки
              <img className={"ml-7 mt-[-12px]"} src={cute_supp}/>
              </a>
          </div>
        </div>
      </div>
      <div className={"mt-[139.1px] justify-between flex"}>
        <div className={"font-montserrat font-medium text-[14px] text-[#87888D]"}>Liberty © 2024</div>
        <a href="" className={"font-montserrat font-medium text-[14px] text-[#87888D] ml-[503px]"}>Политика конфиденциальности</a>
        <a href="" className={"font-montserrat font-medium text-[14px] text-[#87888D] ml-[51px]"}>Пользовательское соглашение</a>
      </div>
    </Col>
  );
}
