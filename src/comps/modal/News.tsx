// @ts-ignore
import React, { PropsWithChildren } from 'react';
import p_arr from '../../assets/svg/p-arrow.svg'

type NewsProps = {
    Date: string;
    Label: string;
    Image: string;
    Link: string;
};

export default function News(props: PropsWithChildren<NewsProps>){
    
    return (
        <div className="w-[359px] h-[412px] rounded-[17px] justify-center outline outline-1 outline-[#DFE3FF]">
            <img className={"w-[359px] h-[187px] rounded-[17px]"} src={props.Image} alt = {''}/>
            <div className={"w-[323px] h-[26px] text-left font-montserrat font-medium text-[12px] text-[#999AA7] mt-[19px] ml-[22px]"}>
                {`${props.Date}`}
            </div>
            <div className={"w-[323px] h-[110px] mt-[31px] text-left ml-[22px] font-montserrat font-medium text-[18px] text-very-black"}>
                {`${props.Label}`}
            </div>
            <a href={`${props.Link}`} className={"w-[144px] h-5 mt-2 ml-[191px] flex justify-center"}>
                <span className={"font-montserrat font-bold text-[12px] text-aspide-blue"}>Читать статью</span>
                <img className={"w-[37px] ml-[11px]"} src={p_arr} alt = {''}/>

            </a>

        </div>
    )
}


export function News_mobile(props: PropsWithChildren<NewsProps>){
    
    return (
        <div className="h-[376.42px] w-[328px] rounded-[17px] justify-center outline outline-1 outline-[#DFE3FF] mt-5">
            <img className={"w-[328px] h-[170.85px] rounded-[17px]"} src={props.Image} alt = {''}/>
            <div className={"w-[295px] h-[24px] text-left font-montserrat font-medium text-[12px] text-[#999AA7] mt-[17.36px] ml-[19.19px]"}>
                {`${props.Date}`}
            </div>
            <div className={"w-[295px] h-[80px] mt-4 text-left ml-5 font-montserrat font-medium text-[16px] text-very-black"}>
                {`${props.Label}`}
            </div>
            <a href={`${props.Link}`} className={"w-[144px] h-5 mt-10 ml-[146px] flex justify-center"}>
                <span className={"font-montserrat font-bold text-[12px] text-aspide-blue"}>Читать статью</span>
                <img className={"w-[36px] ml-[11px]"} src={p_arr} alt = {''}/>

            </a>

        </div>
    )
}