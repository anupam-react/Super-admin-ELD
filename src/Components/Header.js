import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import profile from "../Assets/Header/profile.svg";
import { BiSolidBell } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { BsPlayBtn } from "react-icons/bs";
import Drawer from "./Drawer";
import { Modal } from "flowbite-react";
const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navigate = useNavigate();


  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const [isFeature, setisFeature] = useState(false);

  const toggleDropdown = () => {
    setOpenModal(!openModal);
  };
  const toggleFeatureDropdown = () => {
    setisFeature(!isFeature);
  };


  return (
    <div className="h-[100px] bg-white border-b flex justify-between items-center gap-4 mr-4">
      <div className="border-[#34B7C1] flex justify-center items-center text-[#34B7C1] border px-6 h-[45px] rounded-lg">
        SRH LOGISTICS <RiArrowDropDownLine size={25} />
      </div>
      <div className="relative mt-2">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className=" p-2.5 ml-[-3px] rounded-tl rounded-bl text-white">
              <FaSearch style={{ color: "black" }} />
            </span>
          </div>
          <input
            type="text"
            className="placeholder: ml-2 block w-[250px] lg:w-[613px] bg-[#F9F9F9] rounded-xl border-0 py-1.5 pl-10 pr-4 text-gray-900  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Search driver"
          />
        </div>
      <div className="flex items-center gap-8">
        <div className="flex gap-1 cursor-pointer" onClick={toggleDropdown}>
          <img src={profile} alt=""  />

          <div className="flex flex-col text-[#1F384C]">
            <span className="font-semibold">SRH LOGISTICS</span>
            <span>DOT #3223344</span>
          </div>
        </div>

        {/* <Notification /> */}
        <div className="App">
      <BiSolidBell
          size={25}
          style={{ color: "#B0C3CC" , cursor:"pointer" }}
          onClick={toggleDrawer}
        />
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
        {openModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-5xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full px-5 pb-4 bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-end py-5 rounded-t">
                  {/* <h3 className="text-xl font-semibold text-black">Date Filter</h3> */}

                  <span
                    onClick={() => setOpenModal(false)}
                    className="cursor-pointer"
                  >
                    <IoCloseSharp />
                  </span>
                </div>
  
                <div className="text-center text-[#1F384C] flex items-center flex-col pb-4">
                <span className="font-bold ">Mudassar Iqbal</span>
                <span>srhlogistic@zzzzz.com</span>
              </div>
            <div className="flex items-center p-2 justify-between w-[400px] bg-[#ECF5FF] hover:text-[#34B7C1] cursor-pointer">
              <div className="flex gap-2">
              <img src={profile}alt="" />
              <div>
                  <p className="text-[#34B7C1] font-[700]">SRH LOGISTICS</p>
                <p className="text-[#1F384C] font-[700]">DOT #3729312</p>
              </div>
              </div>
              <div>
                <img src="../Vector (17).png" alt="" />
              </div>
            </div>

              <ul>
                
                  <li onClick={()=>{
                    navigate('/Companyprofile')
                    setOpenModal(false)
                  }} className="px-10 py-4 text-[#1F384C] font-[700] cursor-pointer flex gap-2">
                    Company profile
                  </li>
   
                  <li  onClick={()=>{
                    navigate('/Billingdetails')
                    setOpenModal(false)
                  }} className="px-10 py-4 text-[#1F384C] font-[700] cursor-pointer flex gap-1">
                    Billing Details
                  </li>
            
            <Link to="/">
                <li className="px-10 py-4  font-[700] text-[#EB5757] cursor-pointer flex gap-2">
                  Logout
                </li>
            </Link>
              </ul>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>

      </div>
    </div>
  );
};

export default Header;
