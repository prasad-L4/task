import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { ImSwitch } from "react-icons/im";
import icon1 from "../../images/icon1.png";
import icon2 from "../../images/icon2.png";
import icon3 from "../../images/icon3.png";
import icon4 from "../../images/icon4.png";
import icon5 from "../../images/icon5.png";
import logo from "../../images/logo.png";
import profile from "../../images/profile.png";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <nav>
      <section className="">
        <img className="logo-img " src={logo} alt="" />
        <div className="main shadow-2xl  ">
          <div className=" profile max-w-xs   w-[140px] h-[170px] bg-white rounded-xl overflow-hidden shadow-2xl">
            <div className="prfl  p-4 ">
              <div>
                <img
                  src={profile}
                  alt=""
                  className="rounded-full w-20 h-20 mx-auto mb-4"
                />
                <h3 className=" flex flex-wrap items-center justify-evenly font-bold text-[12px]  mb-2">
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
          <div className="buttons mt-10 ">
            <div className="btn gap-5">
              <img src={icon1} alt="" />
              <h3>Dashboard</h3>
            </div>
            <div className="btn gap-5">
              <img src={icon2} alt="" />
              <h3>Perks</h3>
            </div>
            <div className="btn gap-5">
              <img src={icon3} alt="" />
              <h3>Addons</h3>
            </div>
            <div className="btn gap-5">
              <img src={icon4} alt="" />
              <h3>FAQ</h3>
            </div>
            <div className="btn gap-5">
              <img src={icon5} alt="" />
              <h3>Support</h3>
            </div>
          </div>
          <div className="logbtn px-2">
            <button className="">Logout </button>
            <ImSwitch className="icon w-[15px] mt-1" />
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Sidebar;
