import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { GiSpeedometer } from "react-icons/gi";
import { IoCloseSharp, IoFilterOutline } from "react-icons/io5";
import { PopUp } from "../Components/PopUp";
import DateFilter from "../Components/DateFilter";

const Alerts = () => {
  const [openPopUp, setOpenPopUp] = useState(false);
  return (
    <div className="p-5">
      {" "}
      <div className="">
        <div className="text-[28px] flex justify-start font-semibold">
          Alerts
        </div>
      </div>
      <div className="flex justify-between items-center mt-5">
        <div>
        <div
                className="relative"
               
              >
                <input
                  type="text"
                  className="w-[380px] h-[45px] pl-9 border border-[#8E8F8F] rounded-lg p-2 "
                  style={{ color: "#8E8F8F" }}
                  placeholder="06 Mar, 2024 at 12:00 AM - Today at 11:59 PM"
                />
                <img
                  src="../Vector (11).png"
                  alt=""
                  className="absolute top-3 left-2"
                />
              </div>
        </div>
        <div className="">
          <button className=" w-[163px] h-[45px] text-white border bg-[#34B7C1] flex justify-center items-center gap-5 rounded-lg">
            Download
          </button>
        </div>
      </div>
      <div className="mt-8">
        <table class="border w-full">
          <thead>
            <tr className="bg-[#F0FAFB] h-[65px]  ">
              <th className="w-[250px] flex items-center gap-2 justify-start pl-2 h-[65px]">
                <input type="checkbox" /> Time (EDT)
              </th>

              <th className="w-[250px] ">
                <div className="flex  items-center justify-start gap-2">
                  Event
                  <IoFilterOutline />
                </div>
              </th>
              <th className="w-[250px] text-start">Driver</th>

              <th className="w-[250px] ">
                <div className="flex  items-center justify-start gap-2">
                  Vehicle <IoFilterOutline />
                </div>
              </th>
              <th className="w-[250px] text-start">Location</th>
            </tr>
          </thead>
          <tbody>
            
            <tr className="border-y ">
              <td className="">
              <div className=" text-[#34B7C1] px-8 py-1 w-fit rounded-3xl bg-[#D3F8EA] ml-4">
                March 26, 2024
              </div>
                <div className="flex gap-2 justify-start h-[79px]  items-center pl-2">
                  <input type="checkbox" /> 12:48PM
                </div>
              </td>

              <td className="">
                <div className="flex items-center gap-2 justify-start">
                <img
                  src="../Vector (11).png"
                  alt=""
                  className="cursor-pointer"
                  onClick={() => {
                    setOpenPopUp(true);
                  }}
                />
                  Overspeeding
                </div>
              </td>
              <td className="text-start">Adam Blake Powers</td>
              <td className="text-start">2101</td>
              <td>I 77, Surry County, North Carolina</td>
            </tr>
            <tr className="border-y ">
              <td className="">
              <div className=" text-[#34B7C1] px-8 py-1 w-fit rounded-3xl bg-[#D3F8EA] ml-4">
                March 26, 2024
              </div>
                <div className="flex gap-2 justify-start h-[79px]  items-center pl-2">
                  <input type="checkbox" /> 12:48PM
                </div>
              </td>

              <td className="">
                <div className="flex items-center gap-2 justify-start">
                <img
                  src="../Vector (11).png"
                  alt=""
                  className="cursor-pointer"
                  onClick={() => {
                    setOpenPopUp(true);
                  }}
                />
                  Overspeeding
                </div>
              </td>
              <td className="text-start">Adam Blake Powers</td>
              <td className="text-start">2101</td>
              <td>I 77, Surry County, North Carolina</td>
            </tr>
            <tr className="border-y ">
              <td className="">
              <div className=" text-[#34B7C1] px-8 py-1 w-fit rounded-3xl bg-[#D3F8EA] ml-4">
                March 26, 2024
              </div>
                <div className="flex gap-2 justify-start h-[79px]  items-center pl-2">
                  <input type="checkbox" /> 12:48PM
                </div>
              </td>

              <td className="">
                <div className="flex items-center gap-2 justify-start">
                <img
                  src="../Vector (11).png"
                  alt=""
                  className="cursor-pointer"
                  onClick={() => {
                    setOpenPopUp(true);
                  }}
                />
                  Overspeeding
                </div>
              </td>
              <td className="text-start">Adam Blake Powers</td>
              <td className="text-start">2101</td>
              <td>I 77, Surry County, North Carolina</td>
            </tr>
           
          </tbody>
        </table>
      </div>
      {openPopUp ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-5xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full px-5 pb-4 bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between py-5 rounded-t">
                  <h3 className="text-xl font-semibold text-black">Date Filter</h3>

                  <span
                    onClick={() => setOpenPopUp(false)}
                    className="cursor-pointer"
                  >
                    <IoCloseSharp />
                  </span>
                </div>
                <hr className="mb-4"/>
                <DateFilter />
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    
    </div>
  );
};

export default Alerts;
