import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";
const Verifyemailandphone = () => {
  return (
    <div className="background h-screen flex justify-center items-center">
      <div className="w-[500px] h-[700px] rounded-lg bg-[white]">
      <div className="flex justify-center border-b">
         <img src="../nxt-eld-high-resolution-logo.png" alt="" className="w-[250px]" />
        </div>
        <div className=" border-b p-10">
          <div className="font-bold text-3xl">Enter Mobile or Email</div>
          <div className="text-[#77878F]">
            You’ll receive a verification code shortly.
          </div>
        </div>
        <div className="p-10">
          <div>
            <label>Mobile</label>
            <br />
            <input className="border w-full h-[57px] mt-2" />
          </div>

          <div className="flex items-center gap-2 mt-2 justify-between">
            <hr className="border w-full" />
            or
            <hr className="border w-full" />
          </div>
          <div className="mt-2">
            <label>Email</label>
            <br />
            <input
              className="border w-full h-[57px] mt-2 placeholder:pl-2"
              placeholder="Password"
            />
          </div>

          <div className="mt-5">
            <Link to="/Verificationcode">
              <button className="bg-[#34B7C1] uppercase font-bold flex justify-center items-center gap-2 text-xl text-[white] h-[63px] w-full">
                {" "}
                NEXt <IoArrowForward />{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verifyemailandphone;
