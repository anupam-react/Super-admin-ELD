import React from 'react'
import '../index.css'
const Home = () => {
  return (
    <div className='homebackground h-[100%] pb-10'>
        <div className='flex justify-center'>
        <div className='mt-[80px] '>
            <p>Search</p>
            <div className='relative w-[340px] mt-4'>
                <input type="text" placeholder='Search Company name or DOT'  className='w-full pr-8'/>
                <img src="../Vector (20).png" alt="" className='absolute top-2 right-4 w-[24px]' />
            </div>
        </div>
        </div>

        <div>
        <div className='mt-20 flex flex-col lg:flex-row justify-between gap-5 mx-4'>
            <div className='shadow shadow-white bg-white rounded-lg px-6 py-3 w-full'>
                <div className='flex justify-between'>
                <img src="../Group 357.png" alt="" className='h-fit' />
                <span className='text-center font-semibold'># TRUCKS </span>
                <p></p>
                </div>
                <div className='flex justify-center items-center mt-10 mb-6'>
                <div className='roundBg flex justify-center items-center '>
                    <p className='bg-white w-[100px] h-[100px] rounded-full flex justify-center items-center text-[40px] text-[#1FADEA] font-bold'>50</p>
                </div>

                </div>
            </div>
            <div className='shadow shadow-white bg-white rounded-lg px-6 py-3 w-full'>
                <div className='flex justify-between'>
                <img src="../Group 357.png" alt="" className='h-fit' />
                <span className='text-center font-semibold'># DRIVERS </span>
                <p></p>
                </div>
                <div className='flex justify-center items-center mt-10 mb-6'>
                <div className='roundBg flex justify-center items-center '>
                    <p className='bg-white w-[100px] h-[100px] rounded-full flex justify-center items-center text-[40px] text-[#1FADEA] font-bold'>50</p>
                </div>

                </div>
            </div>
            <div className='shadow shadow-white bg-white rounded-lg px-6 py-3 w-full'>
                <div className='flex justify-between'>
                <img src="../Group 357.png" alt="" className='h-fit' />
                <span className='text-center font-semibold'># COMPANIES </span>
                <p></p>
                </div>
                <div className='flex justify-center items-center mt-10 mb-6'>
                <div className='roundBg flex justify-center items-center '>
                    <p className='bg-white w-[100px] h-[100px] rounded-full flex justify-center items-center text-[40px] text-[#1FADEA] font-bold'>50</p>
                </div>

                </div>
            </div>
       
        </div>
        <div className='mt-20 flex flex-col lg:flex-row justify-center gap-5 mx-4'>
            <div className=' basis-1/3 shadow shadow-white bg-[#E8FDFF] rounded-lg px-6 py-3 w-full'>
                <div className='flex justify-between'>
                <img src="../Group 357.png" alt="" className='h-fit' />
                <span className='text-center font-bold text-[#1FADEA]'># ADD NEW COMPANY</span>
                <p></p>
                </div>
                <div className='flex justify-center items-center mt-10 mb-6'>
                <div className='rounded-full w-[180px] h-[180px] bg-white flex justify-center items-center '>
                    <p className='bg-[#E8FDFF] w-[100px] h-[100px] rounded-full flex justify-center items-center text-[40px] text-[#1FADEA] font-bold'>
                    <img src="../Vector (19).png" alt="" />

                    </p>
                </div>

                </div>
            </div>
            <div className=' basis-1/3 shadow shadow-white bg-[#FFF5F5] rounded-lg px-6 py-3 w-full'>
                <div className='flex justify-between'>
                <img src="../Group 357.png" alt="" className='h-fit' />
                <span className='text-center font-bold text-[#EB5757]'># DELETE COMPANY</span>
                <p></p>
                </div>
                <div className='flex justify-center items-center mt-10 mb-6'>
                <div className='rounded-full w-[180px] h-[180px] bg-white flex justify-center items-center '>
                    <p className='bg-[#FFF5F5] w-[100px] h-[100px] rounded-full flex justify-center items-center text-[40px] text-[#1FADEA] font-bold'>
                        <img src="../gravity-ui_trash-bin.png" alt="" />
                    </p>
                </div>

                </div>
            </div>
           
       
        </div>

        </div>

       
    </div>
  )
}

export default Home