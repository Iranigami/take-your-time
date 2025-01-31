// @ts-ignore
import React, { PropsWithChildren } from 'react';
import p_arr from '../../assets/svg/p-arrow.svg'
import Aos from "aos";
import 'aos/dist/aos.css'

type ModulProps = {
    Label: string;
    Desc: string;
    Image: string;
    Link: string;
    Animation: string;
};

export default function Modul_card(props: PropsWithChildren<ModulProps>){
    
    return (
        <div className={"w-[552px] h-[199px] rounded-[23px] justify-center flex outline outline-1 outline-light-aspide"} data-aos={`${props.Animation}`} data-aos-duration={2000}>
            <div className={"mt-[34px] ml-[10px] w-[100px] h-[153px] justify-center"}>
                <img className={"w-[100px]"} src={props.Image} alt = {''}/>
                <div className={"text-center font-montserrat font-semibold text-[20px] text-very-black mt-[9px]"}>
                    {`${props.Label}`}
                </div>
            </div>
            <div className={"w-[362px] h-[150px] mt-[27px] ml-[35px] font-montserrat font-normal text-[16px] text-very-black"}>
               {`${props.Desc}`}
            </div>
            <a href={`${props.Link}`} className={"w-[144px] h-5 mt-[160px] ml-[472px] flex justify-center absolute"}>
                <img className={"w-[37px] ml-[11px]"} src={p_arr} alt = {''}/>

            </a>

        </div>
    )
}

export function Modul_card_mobile(props: PropsWithChildren<ModulProps>){
    
    return (
        <div className="w-[328px] h-[236px] rounded-[15px] justify-center outline outline-1 outline-light-aspide bg-very-white pl-[21px]">
            <div className={"mt-[14px] w-[179px] h-[60px] justify-left flex items-center"}>
                <img className={"w-[60px] h-[60px] "} src={props.Image} alt = {''}/>
                <div className={"text-center font-montserrat font-semibold text-[20px] text-very-black ml-[48px]"}>
                    {`${props.Label}`}
                </div>
            </div>
            <div className={"w-[287px] h-[120px] mt-[19px] font-montserrat font-normal text-[14px] text-very-black"}>
               {`${props.Desc}`}
            </div>
            <a href={`${props.Link}`} className={"w-[39px] h-[13px] mt-[3px] ml-[249px] flex justify-center absolute"}>
                <img className={"w-[37px] ml-[11px]"} src={p_arr} alt = {''}/>
            </a>

        </div>
    )
}