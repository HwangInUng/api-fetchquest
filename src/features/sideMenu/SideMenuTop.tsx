import { SideLogo } from "assets";
import SideMenuSearch from "./SideMenuSearch";
import { SideTopBox } from "styles";

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
