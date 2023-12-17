import React from "react";
import { MdOutlineArrowForwardIos} from "react-icons/md";
import { ImSwitch } from "react-icons/im";
import icon1 from "../../images/icon1.png";
import icon2 from "../../images/icon2.png";
import icon3 from "../../images/icon3.png";
import icon4 from "../../images/icon4.png";
import icon5 from "../../images/icon5.png";

const Sidebar = () => {
  return (
    <nav>
      <section>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <div>
            <img src="" alt="" />
            <h3>
              Ram Mohan
              <span>
                <MdOutlineArrowForwardIos />
              </span>
            </h3>
            <h5>rammohan@gmail.com</h5>
          </div>
        </div>
        <div>
          <button>
            <img src={icon1} alt="" />
            Dashboard
          </button>
          <button>
            <img src={icon2} alt="" />
            Perks
          </button>
          <button>
            <img src={icon3} alt="" />
            Addons
          </button>
          <button>
            <img src={icon4} alt="" />
            FAQ
          </button>
          <button>
            <img src={icon5} alt="" />
            Support
          </button>
        </div>
        <div>
          <button>Logout <ImSwitch /></button>
        </div>
      </section>
    </nav>
  );
};

export default Sidebar;
