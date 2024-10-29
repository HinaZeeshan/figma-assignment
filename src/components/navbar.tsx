import React from 'react'
import Link from "next/link";
import  { Montserrat } from 'next/font/google'
 const montseerat = Montserrat({
   subsets: ['latin'],
   weight: '700',
});

const Navbar = () => {
  return (
    <div>
      <header className=" flex sm:flex-row justify-between overflow-hidden ">
          <h3 className= {` ${montseerat.className}  ml-[59px] p-8 justify-center  text-[#FFFFFF] text-2xl leading-8 tracking-widest`}>
            BrandName
          </h3>
        

        <nav className=" w-full flex sm:flex-wrap capitalize m-3 ml-6 p-8 justify-center text-center  items-center text-white w-275px h-24px top-4 gap-x-5">
          <Link href="" className='hover:text-[#23A6F0]'>home</Link>
          <Link href="" className='hover:text-[#23A6F0]'>product</Link>
          <Link href="" className='hover:text-[#23A6F0]'>pricing</Link>
          <Link href="" className='hover:text-[#23A6F0]'>contact</Link>
        <Link href="" className='ml-auto hover:text-[#23A6F0]'>login</Link>
         
        </nav>
        {/* ....button */}
        <div>
        <button className={ ` ${montseerat.className} mt-6 mr-[226px]  rounded-md text-[#FFFFFF] bg-[#23A6F0] hover:bg-[#4d91b8] w-[110px] h-[52px] gap-[15px] pt-[15px] pr-[25px]  pb-[15px] pl-[25px] `}>join us</button>
        </div>
      </header>
    </div>
  )
}

export default Navbar
