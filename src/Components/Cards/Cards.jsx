import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { FaLongArrowAltRight,FaBell } from "react-icons/fa";
import { MdOutlineAccountCircle, MdOutlineMailOutline } from "react-icons/md";
import { TiCloudStorageOutline } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import "./Cards.css";
import ai from '../../images/ai.png'

const Cards = () => {
  return (
    <>
      <main>
        <div className="main-page">
          <div className="flex gap-3 justify-end ">
            <button className="flex pt-2 mt-2 bg-white justify-center align-middle rounded-md h-10 w-[230px]">
              
              <img className="w-[25px]" src={ai} alt="" />
              XYZ Enterprise Pvt.Ltd
            </button>
            <button className="bg-white w-10 text-center h-10 mt-2 flex  justify-center pt-3 "><IoIosArrowDown /></button>
          </div>
          <div className="flex justify-end align-middle">
          <button className="text-cyan-600"><FaBell /></button>
          </div>
          <div className="sub-main bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">
              Choose a plan that's just right for you!
            </h2>
            <div className="head-btn">
              <h3 className="bg-cyan-100 w-[160px] h-8 rounded-2xl text-center">Monthly</h3>
              
              <h3>Annually<span className="text-green-500 text-[10px] ">-10%</span></h3>
             
            </div>
            <div className="flex flex-wrap mt-20 align-middle justify-center">
              <div className="max-w-sm w-[300px]  rounded overflow-hidden shadow-lg m-4">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Basic</div>
                  <p className="line-through text-red-500">$89.99/mo</p>
                  <h2>$9.99/mon</h2>
                  <button>Get Start <span><FaLongArrowAltRight /></span></button>
                  <hr />
                  <p className="text-gray-700 text-base">
                    What you will get:
                  </p>
                  <h5 className="flex"><span><MdOutlineAccountCircle/></span>Upto 25 Users</h5>
                  <h5 className="flex"><span><TiCloudStorageOutline/></span>Upto 25 Storage</h5>
                  <h5 className="flex"><span>< MdOutlineMailOutline/></span>Email Support</h5>
                </div>
              </div>
              {/* Add more cards similarly */}
              <div className="max-w-sm w-[300px] rounded overflow-hidden shadow-lg m-4">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Basic</div>
                  <p className="line-through text-red-500">$89.99/mo</p>
                  <h2>$9.99/mon</h2>
                  <button>Get Start <span><FaLongArrowAltRight /></span></button>
                  <hr />
                  <p className="text-gray-700 text-base">
                    What you will get:
                  </p>
                  <h5 className="flex"><span><MdOutlineAccountCircle/></span>Upto 25 Users</h5>
                  <h5 className="flex"><span><TiCloudStorageOutline/></span>Upto 25 Storage</h5>
                  <h5 className="flex"><span>< MdOutlineMailOutline/></span>Email Support</h5>
                </div>
              </div>
              <div className="max-w-sm w-[300px] rounded overflow-hidden shadow-lg m-4">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Basic</div>
                  <p className="line-through text-red-500">$89.99/mo</p>
                  <h2>$9.99/mon</h2>
                  <button>Get Start <span><FaLongArrowAltRight /></span></button>
                  <hr />
                  <p className="text-gray-700 text-base">
                    What you will get:
                  </p>
                  <h5 className="flex"><span><MdOutlineAccountCircle/></span>Upto 25 Users</h5>
                  <h5 className="flex"><span><TiCloudStorageOutline/></span>Upto 25 Storage</h5>
                  <h5 className="flex"><span>< MdOutlineMailOutline/></span>Email Support</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Cards;
