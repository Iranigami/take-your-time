import girl from '../assets/png/girl.png'
import line from '../assets/png/draw-line.png'
import buttonOutline from '../assets/png/button-outline.png'
import { useState } from 'react'

export default function HomePage(){
    const [isTutorialOpen, setTutorialOpen] = useState(false);
    return(
        <div className='w-full flex items-center jusitfy-center px-[50px]'>
            <div className='text-very-black justify-center items-center w-[50%] block'>
                <div className='font-miki tracking-[3px] text-very-black font-light text-[70px]'>
                    <span>
                        Raise your productivity with&nbsp;
                    </span>
                    <span className='font-semibold'>
                        Take Your Time!
                    </span>
                </div>
                <img 
                    src={line}
                    alt='line'
                    className='w-[95%] h-[7px] mx-auto left-0 right-0 mt-[10px] mb-[50px]'
                    />
                <div className='font-miki tracking-[3px] text-very-black text-[40px]'>
                Welcome to the world of effective time and goal management! Our app is designed specifically for those who strive to achieve more every day, whether it is study, work or personal projects.
                </div>
                <button className='w-[296px] h-[76px] mt-[20px] justify-center items-center  flex bg-white text-very-black font-semibold hover:text-very-white transition duration-150 hover:bg-[#000000] hover:scale-110'>
                    <img
                        src={buttonOutline}
                        alt='button'
                        className='w-[300px] h-[80px] absolute'
                    />
                    <div className='font-miki tracking-[3px] text-[40px] z-10'>
                        Start!
                    </div>
                </button>
            </div>
            <img
                src={girl}
                alt='image'
                className='mx-auto my-auto'
            />
        </div>
    )
}