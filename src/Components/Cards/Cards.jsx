import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { FaLongArrowAltRight, FaBell } from "react-icons/fa";
import { MdOutlineAccountCircle, MdOutlineMailOutline } from "react-icons/md";
import { TiCloudStorageOutline } from "react-icons/ti";
import { IoIosArrowDown, IoMdArrowDropright } from "react-icons/io";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import "./Cards.css";
import ai from "../../images/ai.png";
import logo from "../../images/logo.png";

const Cards = () => {
  return (
    <>
      <main>
        <div className="main-page relative">
          <div className="h-[80px]">
            <div className="flex justify-between ">
              <img className="logo-img" src={logo} alt="" />
              <div className="flex justify-center flex-wrap gap-3  ">
              <button className="flex flex-wrap pt-2 mt-2 bg-white justify-center align-middle rounded-md text-[12px] h-10 w-[160px]">
                <img className="w-[20px]" src={ai} alt="" />
                XYZ Enterprise Pvt.Ltd
              </button>
              <button className="bg-white w-10 text-center h-10 mt-2 flex  justify-center pt-3 ">
                <IoIosArrowDown />
              </button>
            </div>
            </div>

           
            <div className=" w-[45px] right-[-4px] top-25 align-middle">
              <span className="absolute right-0  text-cyan-600  ">
                <FaBell />
              </span>
            </div>
          </div>
          <div className="sub-main bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold px-12 mb-4">
              Choose a plan that's just right for you!
            </h2>
            <div className="head-btn">
              <h3 className="bg-cyan-100 w-[140px] h-8 rounded-2xl text-center">
                Monthly
              </h3>

              <h3>
                Annually
                <span className="text-green-500 text-[10px] ">-10%</span>
              </h3>
            </div>
            <div className="flex flex-wrap mt-20 align-middle justify-center">
              <div className="max-w-sm w-[300px]  rounded overflow-hidden shadow-lg m-4">
                <div className="px-6 py-4">
                  <div className="font-bold text-[25px] mb-2">Basic</div>
                  <p className="line-through text-sm text-red-500">$89.99/mo</p>
                  <h2 className="text-[26px]">$9.99/mo</h2>
                  <button className="flex mt-3 justify-center h-9 pt-1 rounded-md bg-orange-300 w-[130px] gap-4">
                    Get Start{" "}
                    <span className="pt-1">
                      <FaLongArrowAltRight />
                    </span>
                  </button>
                  <hr className="mt-3" />
                  <p className="text-gray-700 font-medium mt-2 text-xs">
                    What you will get:
                  </p>
                  <h5 className="flex mt-3 gap-3 text-[14px] text-gray-700">
                    <span className="pt-1">
                      <MdOutlineAccountCircle />
                    </span>
                    Upto 25 Users
                  </h5>
                  <h5 className="flex mt-3 gap-3 text-[14px] text-gray-700">
                    <span clas>
                      <TiCloudStorageOutline />
                    </span>
                    Upto 25 Storage
                  </h5>
                  <h5 className="flex mt-3 gap-3 text-[14px] text-gray-700">
                    <span>
                      <MdOutlineMailOutline />
                    </span>
                    Email Support
                  </h5>
                  <div className="flex items-center mt-3">
                    <h4 className="text-[13px] border-b border-black inline-block">
                      EXPLORE FEATURES{" "}
                    </h4>
                    <span className="text-orange-300">
                      <IoMdArrowDropright />
                    </span>
                  </div>
                </div>
              </div>

              <div className="max-w-sm w-[300px]  rounded overflow-hidden shadow-lg m-4">
                <div className="px-6 py-4">
                  <div className="font-bold text-[25px] mb-2">Standard</div>
                  <p className="line-through text-sm text-red-500">
                    $189.99/mo
                  </p>
                  <h2 className="text-[26px]">$99.99/mo</h2>
                  <button className="flex mt-3 justify-center h-9 pt-1 rounded-md bg-red-300 w-[130px] gap-4">
                    Get Start{" "}
                    <span className="pt-1">
                      <FaLongArrowAltRight />
                    </span>
                  </button>
                  <hr className="mt-3" />
                  <p className="text-gray-700 font-medium mt-2 text-xs">
                    What you will get:
                  </p>
                  <h5 className="flex mt-3 gap-3 text-[14px] text-gray-700">
                    <span className="pt-1">
                      <MdOutlineAccountCircle />
                    </span>
                    Upto 25 Users
                  </h5>
                  <h5 className="flex mt-3 gap-3 text-[14px] text-gray-700">
                    <span clas>
                      <TiCloudStorageOutline />
                    </span>
                    Upto 25 Storage
                  </h5>
                  <h5 className="flex mt-3 gap-3 text-[14px] text-gray-700">
                    <span>
                      <MdOutlineMailOutline />
                    </span>
                    Email Support
                  </h5>
                  <div className="flex items-center mt-3">
                    <h4 className="text-[13px] border-b border-black inline-block">
                      EXPLORE FEATURES{" "}
                    </h4>
                    <span className="text-red-300">
                      <IoMdArrowDropright />
                    </span>
                  </div>
                </div>
              </div>
              <div className="max-w-sm w-[300px]  rounded overflow-hidden shadow-lg m-4">
                <div className="px-6 py-4">
                  <div className="font-bold text-[25px] mb-2">Premium</div>
                  <p className="line-through text-sm text-red-500">
                    $359.99/mo
                  </p>
                  <h2 className="text-[26px]">$199.99/mo</h2>
                  <button className="flex mt-3 justify-center h-9 pt-1 rounded-md bg-violet-300 w-[130px] gap-4">
                    Get Start{" "}
                    <span className="pt-1">
                      <FaLongArrowAltRight />
                    </span>
                  </button>
                  <hr className="mt-3" />
                  <p className="text-gray-700 font-medium mt-2 text-xs">
                    What you will get:
                  </p>
                  <h5 className="flex mt-3 gap-3 text-[14px] text-gray-700">
                    <span className="pt-1">
                      <MdOutlineAccountCircle />
                    </span>
                    Upto 25 Users
                  </h5>
                  <h5 className="flex mt-3 gap-3 text-[14px] text-gray-700">
                    <span clas>
                      <TiCloudStorageOutline />
                    </span>
                    Upto 25 Storage
                  </h5>
                  <h5 className="flex mt-3 gap-3 text-[14px] text-gray-700">
                    <span>
                      <MdOutlineMailOutline />
                    </span>
                    Email Support
                  </h5>
                  <div className="flex items-center mt-3">
                    <h4 className="text-[13px] border-b border-black inline-block">
                      EXPLORE FEATURES{" "}
                    </h4>
                    <span className="text-violet-300">
                      <IoMdArrowDropright />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <section>
              <div className="flex flex-wrap">
                <div className="max-w-lg mt-3 mx-auto bg-white shadow-md rounded-md p-6">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 md:pr-4 mb-4 md:mb-0">
                      <h4 className="text-lime-700 bg-lime-400 w-[112px] text-center h-9 pt-1 rounded-2xl">
                        Free Forever
                      </h4>
                      <h2 className="text-xl font-bold mt-3 mb-2">
                        Free Starter
                      </h2>
                      <p className="text-[12px]">
                        The quickest and easiest way to try protocols with basic
                        functionalities.
                      </p>
                      <button className="flex mt-3 justify-center h-9 pt-1 rounded-md bg-lime-400 w-[130px] gap-4">
                        Get Started{" "}
                        <span className="pt-1">
                          <FaLongArrowAltRight />
                        </span>
                      </button>
                    </div>
                    <div className="md:w-1/2 md:pl-4 border-gray-300">
                      <h5 className="text-[12px] font-bold mb-2">
                        What you'll get:
                      </h5>
                      <div className="flex flex-col gap-3">
                        <div className="flex gap-3 text-[14px] text-gray-700 items-center">
                          <MdOutlineAccountCircle />
                          <span>Up to 25 Users</span>
                        </div>
                        <div className="flex gap-3 text-[14px] text-gray-700 items-center">
                          <TiCloudStorageOutline />
                          <span>Up to 25 Storage</span>
                        </div>
                        <div className="flex gap-3 text-[14px] text-gray-700 items-center">
                          <MdOutlineMailOutline />
                          <span>Email Support</span>
                        </div>
                        <div className="flex gap-3 text-[14px] text-gray-700 ">
                          <span>
                            <LiaCheckDoubleSolid />
                          </span>
                          <p className="text-[11px]">
                            Basics of Documents, Task Flow, Voting, Accounting,
                            Banking, notes, and team Management included.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-lg mt-3 mx-auto bg-white shadow-md rounded-md p-6">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 md:pr-4 mb-4 md:mb-0">
                      <h4 className="text-sky-700 bg-sky-300 w-[112px] text-center h-9 pt-1 rounded-2xl">
                        Let's Connect
                      </h4>
                      <h2 className="text-xl font-bold mt-3 mb-2">
                        Free Starter
                      </h2>
                      <p className="text-[12px]">
                        The quickest and easiest way to try protocols with basic
                        functionalities.
                      </p>
                      <button className="flex mt-3 justify-center h-9 pt-1 text-sky-700 rounded-md bg-sky-300 w-[130px] gap-4">
                        Contact Us{" "}
                        <span className="pt-1">
                          <FaLongArrowAltRight />
                        </span>
                      </button>
                    </div>
                    <div className="md:w-1/2 md:pl-4 border-gray-300">
                      <h5 className="text-[12px] font-bold mb-2">
                        What you'll get:
                      </h5>
                      <div className="flex flex-col gap-3">
                        <div className="flex gap-3 text-[14px] text-gray-700 items-center">
                          <MdOutlineAccountCircle />
                          <span>Up to 25 Users</span>
                        </div>

                        <div className="flex gap-3 text-[14px] text-gray-700 ">
                          <span>
                            <LiaCheckDoubleSolid />
                          </span>
                          <p className="text-[11px]">
                            Customization of all <br />
                            other feattures.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Cards;
