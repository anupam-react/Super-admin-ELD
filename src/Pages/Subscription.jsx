import React from 'react'
import { LuArrowUpDown } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'

const Subscription = () => {
    const navigate = useNavigate()
  return (
    <div className='mt-4 mx-4'>
    <p className='text-[28px] font-[500]'>Subscription</p>

<div className="mt-5">
            <table class="border w-full ">
              <thead>
                <tr className="bg-[#F0FAFB] h-[65px]  ">
                  <th className=" flex items-center gap-2 justify-left pl-2 h-[65px]">
                    <input type="checkbox" />
                    Date
                    <LuArrowUpDown />
                  </th>
                  <th className="">
                    <div className="flex items-center gap-1 justify-center">
                    <input type="checkbox" />
                    Company name <LuArrowUpDown />
                    </div>
                  </th>
    
                  <th className=" text-center">DOT</th>
                  <th className=" text-center">Action</th>
                </tr>
              </thead>
              <tbody>
            
                <tr className="border-b h-[79px] cursor-pointer">
                  <td className=" pl-2 text-left"  onClick={()=> navigate('/Dashboard')}>
                    <div>
                      <input type="checkbox" /> Jul 17, 2023 02:28 PM
                    </div>
                  </td>
                  <td className="text-center"  onClick={()=> navigate('/Dashboard')}>
                    <div>
                      <input type="checkbox" /> ZOHO
                    </div>
                  </td>
                  <td className="text-center">123456</td>
                  <td className="text-center text-[#01B81E] font-[700]">Active</td>
                </tr>
                <tr className="border-b h-[79px] cursor-pointer">
                  <td className=" pl-2 text-left"  onClick={()=> navigate('/Dashboard')}>
                    <div>
                      <input type="checkbox" /> Jul 17, 2023 02:28 PM
                    </div>
                  </td>
                  <td className="text-center"  onClick={()=> navigate('/Dashboard')}>
                    <div>
                      <input type="checkbox" /> ZEEN-X
                    </div>
                  </td>
                  <td className="text-center">123456</td>
                  <td className="text-center text-[#FF2A1C] font-[700]">In-Active</td>
                </tr>
            
                <tr className="border-b h-[79px] cursor-pointer">
                  <td className=" pl-2 text-left"  onClick={()=> navigate('/Dashboard')}>
                    <div>
                      <input type="checkbox" /> Jul 17, 2023 02:28 PM
                    </div>
                  </td>
                  <td className="text-center"  onClick={()=> navigate('/Dashboard')}>
                    <div>
                      <input type="checkbox" /> ZOHO
                    </div>
                  </td>
                  <td className="text-center">123456</td>
                  <td className="text-center text-[#01B81E] font-[700]">Active</td>
                </tr>
                <tr className="border-b h-[79px] cursor-pointer">
                  <td className=" pl-2 text-left"  onClick={()=> navigate('/Dashboard')}>
                    <div>
                      <input type="checkbox" /> Jul 17, 2023 02:28 PM
                    </div>
                  </td>
                  <td className="text-center"  onClick={()=> navigate('/Dashboard')}>
                    <div>
                      <input type="checkbox" /> ZEEN-X
                    </div>
                  </td>
                  <td className="text-center">123456</td>
                  <td className="text-center text-[#FF2A1C] font-[700]">In-Active</td>
                </tr>
            
                <tr className="border-b h-[79px] cursor-pointer">
                  <td className=" pl-2 text-left"  onClick={()=> navigate('/Dashboard')}>
                    <div>
                      <input type="checkbox" /> Jul 17, 2023 02:28 PM
                    </div>
                  </td>
                  <td className="text-center"  onClick={()=> navigate('/Dashboard')}>
                    <div>
                      <input type="checkbox" /> ZOHO
                    </div>
                  </td>
                  <td className="text-center">123456</td>
                  <td className="text-center text-[#01B81E] font-[700]">Active</td>
                </tr>
                <tr className="border-b h-[79px] cursor-pointer">
                  <td className=" pl-2 text-left"  onClick={()=> navigate('/Dashboard')}>
                    <div>
                      <input type="checkbox" /> Jul 17, 2023 02:28 PM
                    </div>
                  </td>
                  <td className="text-center"  onClick={()=> navigate('/Dashboard')}>
                    <div>
                      <input type="checkbox" /> ZEEN-X
                    </div>
                  </td>
                  <td className="text-center">123456</td>
                  <td className="text-center text-[#FF2A1C] font-[700]">In-Active</td>
                </tr>
              </tbody>
            </table>
          </div>
</div>
  )
}

export default Subscription