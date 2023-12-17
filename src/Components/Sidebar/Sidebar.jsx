import React, { useState } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import { ImSwitch } from "react-icons/im";
import icon1 from "../../images/icon1.png";
import icon2 from "../../images/icon2.png";
import icon3 from "../../images/icon3.png";
import icon4 from "../../images/icon4.png";
import icon5 from "../../images/icon5.png";
import profile from "../../images/profile.png";
import "./Sidebar.css";

const Sidebar = () => {
  
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };


  return (
    <nav>
       <button className="block mt-4 md:hidden " onClick={toggleSidebar}>
        < TbGridDots />
        </button>
    <div className="flex h-screen">
 
   
   <aside className={`bar bg-white w-50 shadow-2xl ${sidebarOpen ? 'block' : 'hidden'} md:block`}>
   
     <div className=" p-4 text-blue-950">
       
       <div>
       <div className=" profile max-w-xs   w-[140px] h-[170px] bg-white rounded-xl overflow-hidden shadow-2xl">
         <div className="prfl  p-4 ">
           <div>
             <img
               src={profile}
               alt=""
               className="rounded-full w-20 h-20 mx-auto mb-4"
             />
             <h3 className=" flex text-gray-600 flex-wrap items-center justify-evenly font-bold text-[12px]  mb-2">
               Ram Mohan
               <span className="text-cyan-700">
                 <MdOutlineArrowForwardIos />
               </span>
             </h3>
             <h5 className=" text-gray-600 text-[10px]">
               rammohan@gmail.com
             </h5>
           </div>

           
           
         </div>
       </div>
       </div>
       <ul className="mt-4">
        
         <div className="buttons   mt-2 ">
         <div className="btn flex rounded-md gap-5 bg-cyan-700">
           <img className="w-[30px]" src={icon1} alt="" />
           <h3>Dashboard</h3>
         </div>
         <div className="btn flex mt-4 gap-5">
           <img className="w-[30px]" src={icon2} alt="" />
           <h3>Perks</h3>
         </div>
         <div className="btn  mt-4 flex gap-5">
           <img className="w-[30px]" src={icon3} alt="" />
           <h3>Addons</h3>
         </div>
         <div className="btn  mt-4 flex gap-5">
           <img className="w-[30px]" src={icon4} alt="" />
           <h3>FAQ</h3>
         </div>
         <div className="btn mt-4 flex gap-5">
           <img className="w-[30px]" src={icon5} alt="" />
           <h3>Support</h3>
         </div>
         <div className="flex mt-[150px] gap-3 px-2">
         <button className="">Logout </button>
         <ImSwitch className="icon w-[15px] mt-1" />
       </div>
       </div>
       
       </ul>
      
     </div>
   </aside>
 </div>
   
 
 </nav> 
  );
};

export default Sidebar;
