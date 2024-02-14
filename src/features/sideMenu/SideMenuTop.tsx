import { SideLogo } from "assets";
import { SideTopBox } from "./sideMenuStyles";
import SideMenuSearch from "./SideMenuSearch";

const SideMenuTop = () => {
  return (
    <SideTopBox>
      <div className="logo-box">
        <a href="/">
          <img src={SideLogo} alt="SideLogo" />
        </a>
      </div>
      <SideMenuSearch />
    </SideTopBox>
  );
};

export default SideMenuTop;
