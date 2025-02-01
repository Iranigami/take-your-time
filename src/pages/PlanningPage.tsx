import pages from '../assets/png/planning-bg-double-full.png'

export default function PlanningPage() {
    const date = '01.01.2001'
    return(
        <div className='w-full items-center jusitfy-center px-[50px]'>
            <div className='h-[700px] w-[1037px] flex justify-between items-center'>
                <div className='h-[650px] w-[450px] ml-5'>
                    <div className='w-[450px] h-[203px] p-3 outline outline-double outline-very-black'>
                        <span className='text-very-black font-miki font-semibold tracking-[3px] underline'>Monday, {date}</span>
                    </div>
                    <div className='w-[450px] h-[203px] mt-5 p-3 outline outline-double outline-very-black'>
                        <span className='text-very-black font-miki font-semibold tracking-[3px] underline'>Tuesday, {date}</span>
                    </div>
                    <div className='w-[450px] h-[203px] mt-5 p-3 outline outline-double outline-very-black'>
                    <span className='text-very-black font-miki font-semibold tracking-[3px] underline'>Wednesday, {date}</span>
                    </div>
                </div>
                <div className='h-[650px] w-[450px] mr-5'>
                    <div className='w-[450px] h-[203px] p-3 outline outline-double outline-very-black'>
                    <span className='text-very-black font-miki font-semibold tracking-[3px] underline'>Thursday, {date}</span>
                    </div>
                    <div className='w-[450px] h-[203px] mt-5 p-3 outline outline-double outline-very-black'>
                    <span className='text-very-black font-miki font-semibold tracking-[3px] underline'>Friday, {date}</span>
                    </div>
                    <div className='w-[450px] h-[203px] mt-5 flex justify-between'>
                        <div className='w-[220px] h-[203px] p-3 outline outline-double outline-very-black'>
                        <span className='text-very-black font-miki font-semibold tracking-[3px] underline'>Saturday, {date}</span>
                        </div>
                        <div className='w-[220px] h-[203px] p-3 outline outline-double outline-very-black'>
                        <span className='text-very-black font-miki font-semibold tracking-[3px] underline'>Sunday, {date}</span>
                        </div>
                    </div>
                </div>
                <img
                    src={pages}
                    alt='pages img'
                    className='h-[700px] w-[1037px] absolute z-0'
                />
            </div>
        </div>
    )
}