import { Sidebar } from "flowbite-react";
import { twMerge } from "tailwind-merge";

import { ReactComponent as logbook } from "../Assets/Sidebar/logbook.svg";

import { ReactComponent as location } from "../Assets/Sidebar/location.svg";
import { ReactComponent as dascams } from "../Assets/Sidebar/dascams.svg";
import { ReactComponent as report } from "../Assets/Sidebar/report.svg";
import { ReactComponent as ifta } from "../Assets/Sidebar/ifta.svg";

import { ReactComponent as vehicles } from "../Assets/Sidebar/vehicles.svg";
import { ReactComponent as drivers } from "../Assets/Sidebar/drivers.svg";
import { ReactComponent as Devices } from "../Assets/Sidebar/devices.svg";
import { ReactComponent as userrole } from "../Assets/Sidebar/userrole.svg";
import { ReactComponent as testimonial } from "../Assets/Sidebar/testimonial.svg";
import { ReactComponent as alert } from "../Assets/Sidebar/alert.svg";
import { ReactComponent as fmcsa } from "../Assets/Sidebar/fmcsa.svg";
import { ReactComponent as diagonos } from "../Assets/Sidebar/diagonos.svg";

import { HiArrowSmRight, HiChartPie, HiInbox, HiMenuAlt3, HiOutlineMinusSm, HiOutlinePlusSm, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";
 
const SuperSidebar = () => {
  const [open, setOpen] = useState(true);
 
  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example" className={`bg-[#F9FBFF] h-[1500px] ${
              open ? "w-64 " : "w-24"
            } duration-500 text-gray-100 px-4`}>
    <Sidebar.Items>
      <Sidebar.ItemGroup>
      <div className="py-3 flex justify-between">
        {!open ? 
         <HiMenuAlt3
         size={26}
          style={{ color: "#34B7C1" }}
         className="cursor-pointer"
        onClick={() => setOpen(!open)}
     />:
     <>
     <Sidebar.Item to="#" className="text-[#34B7C1] text-center text-3xl font-bold">
         Dashboard
       </Sidebar.Item>
         {/* <HiMenuAlt3
           size={26}
            style={{ color: "#34B7C1" }}
           className="cursor-pointer"
          onClick={() => setOpen(!open)}
       /> */}
     </>
}
</div>
       <>
        <Link to="/super-logbook">
        <Sidebar.Item className="bg-white text-[#80848F] text-[18px] p-2 mb-2 hover:text-[#34B7C1]"  icon={logbook}>
        Logbook
        </Sidebar.Item>
        </Link>
        <Link to="/Reports">
        <Sidebar.Item  className="bg-white text-[#80848F] text-[18px] p-2 mb-2  hover:text-[#34B7C1]" icon={report}>
        Reports
        </Sidebar.Item>
        </Link>
        <Link to="/Iftatrips">
        <Sidebar.Item className="bg-white text-[#80848F] text-[18px] p-2 mb-2  hover:text-[#34B7C1]" icon={ifta}>IFTA</Sidebar.Item>
        </Link>
        <Link to="/sub-admin">
        <Sidebar.Item className="bg-white text-[#80848F] text-[18px] p-2 mb-2  hover:text-[#34B7C1]" icon={Devices}>Sub admin</Sidebar.Item>
        </Link>
        <Link to="/subscription">
        <Sidebar.Item className="bg-white text-[#80848F] text-[18px] p-2 mb-2  hover:text-[#34B7C1]" icon={Devices}>Subscription</Sidebar.Item>
        </Link>
        {/* <Link to="/edit-docs">
        <Sidebar.Item className="bg-white text-[#80848F] text-[18px] p-2 mb-2  hover:text-[#34B7C1]" icon={userrole}>Edit</Sidebar.Item>
        </Link> */}
        <Link to="/Apisharing">
        <Sidebar.Item className="bg-white text-[#80848F] text-[18px] p-2 mb-2  hover:text-[#34B7C1]"  icon={fmcsa}>
        FMCSA
        </Sidebar.Item>
        </Link>
       </>
      
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  </Sidebar>
  );
}
export default SuperSidebar;
