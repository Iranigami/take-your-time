import logo from '../assets/svg/logo.svg'
import line from '../assets/png/draw-line.png'
import box from '../assets/png/draw-box.png'
import tg from '../assets/png/tg.png'
import mail from '../assets/png/mail.png'

export default function Header() {
  const tgUrl = 't.me/iranigami'
  const emailUrl = 'mailto:iranigami@mail.ru'
  return (
    <div className='w-full h-[71px] flex items-center px-12 py-3 justify-between mb-[50px]'>
      <div className='hidden h-full md:flex gap-3 items-center'>
        <img
          src={logo}
          alt='logo'
          className='h-full'
        />
        <span className='font-miki tracking-[3px] text-very-black font-semibold text-[25px]'>
          Take Your Time
        </span>
        </div>
        <div className='flex justify-between w-[500px]'>
          <a 
            className='font-miki tracking-[3px] text-very-black font-semibold text-[25px] w-[48px] h-[50px] items-center justify-center flex'
            href='/'>
            <img
              alt=''
              src={box}
              className='absolute z-0 opacity-0 hover:opacity-100 w-[100px] h-[50px]'
            />
            Home
          </a>
          <a 
            className='font-miki tracking-[3px] text-very-black font-semibold text-[25px] w-[48px] h-[50px] items-center justify-center flex'
            href='/'>
            <img
              alt=''
              src={box}
              className='absolute z-0 opacity-0 hover:opacity-100 w-[100px] h-[50px]'
            />
            Timer
          </a>
          <a 
            className='font-miki tracking-[3px] text-very-black font-semibold text-[25px] items-center justify-center flex'
            href='/'>
            <img
              alt=''
              src={box}
              className='absolute z-0 opacity-0 hover:opacity-100 w-[120px] h-[50px]'
            />
            Planning
          </a>
          <a 
            className='font-miki tracking-[3px] text-very-black font-semibold text-[25px] w-[48px] h-[50px] items-center justify-center flex'
            href='/'>
            <img
              alt=''
              src={box}
              className='absolute z-0 opacity-0 hover:opacity-100 w-[100px] h-[50px]'
            />
            Habits
          </a>
          <a 
            className='font-miki tracking-[3px] text-very-black font-semibold text-[25px] w-[48px] h-[50px] items-center justify-center flex'
            href='/'>
            <img
              alt=''
              src={box}
              className='absolute z-0 opacity-0 hover:opacity-100 w-[100px] h-[50px]'
            />
            Notes
          </a>
        </div>
        <div className='w-[200px] flex justify-between'>
          <a href={tgUrl}>
            <img
              src={tg}
              alt='tg link'
              className='hover:scale-110 transition duration-150'
            />
          </a>
          <a href={emailUrl}>
            <img
              src={mail}
              alt='tg link'
              className='hover:scale-110 transition duration-150'
            />
          </a>
          <div className='font-miki tracking-[3px] text-very-black font-semibold text-[25px] w-[48px] h-[50px] items-center justify-center flex'>
            EN
          </div>
        </div>
      <img 
        src={line}
        alt='line'
        className='absolute w-[95%] h-[15px] mx-auto left-0 right-0 mt-[69px]'
        />
    </div>
  );
}
