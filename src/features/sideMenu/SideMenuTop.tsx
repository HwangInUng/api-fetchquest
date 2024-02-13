import { SideLogo } from "assets";
import { BiSearchAlt } from "react-icons/bi";
import { SideTopBox } from "./sideMenuStyles";

const SideMenuTop = () => {
  return (
    <SideTopBox>
      <div className="logo-box">
        <a href="/">
          <img src={SideLogo} alt="SideLogo" />
        </a>
      </div>
      <div className="search-box">
        <div className="search-field">
          <input placeholder="Search" />
          <button>
            <BiSearchAlt />
          </button>
        </div>
      </div>
    </SideTopBox>
  );
};

export default SideMenuTop;
