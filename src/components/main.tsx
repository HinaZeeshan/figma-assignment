import React from 'react'
import Cards from './cards';
import  { Montserrat } from 'next/font/google'
 const montseerat = Montserrat({
   subsets: ['latin'],
   weight: '700',
});

const Main = () => {
  return (
    <div className=' flex justify-center items-center min-h-screen' >
        <div className='max-w-2xl mt-2 p-12 justify-center items-center text-center  relative bottom-48'>
          <h5 className={`${montseerat.className} mb-40 ml-44  w-[77px] h-[24px] font-bold text-xl tracking-normal text-[#23A6F0] justify-center items-center text-center `}>welcome</h5>
           <h1 className={`${montseerat.className} relative right-0 bottom-36 w-[542px] h-40 font-bold text-5xl leading-[80px] text-[#ffffff] p-2 flex items-center `}>Selling on the <br/> internet like a pro</h1>
          <p className={`${montseerat.className}  w-[536px] h-[60px] font-bold text-sm leading-7 tracking-normal text-[#ffffff] pr-4 pl-2 relative right-12 bottom-28`}>We know how large objects will act, but things on a 
         small scale just do not act that way.</p>
      <div className=' relative bottom-16  mr-20 justify-center items-center flex'> 
      <button className={`${montseerat.className} bg-[#23A6F0] rounded-md  text-[#ffffff] text-center items-center w-[193px] h-[52px] font-bold text-sm justify-center pt-[8px] pr-[32px] pb-[12px] pl-[38px] gap-2 `}>
      Get Quote Now
      </button>
      <button className={`${montseerat.className} ml-1 border border-[#23A6F0] text-[#23A6F0] w-[162px] h-[52px] pt-[15px] pr-[40px] pb-[15px] pl-[40px] gap-2 rounded-md  justify-center item-center`}>
        LearnMore 
      </button>

 
      </div>
      </div>
       <Cards/>
    </div>

    
  )
}

export default Main
