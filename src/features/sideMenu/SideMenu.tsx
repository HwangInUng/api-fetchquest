import { SideLogo } from "assets";
import { SIDE_WIDTH } from "../../utils/constants";
import { SideMenuContainer } from "./sideMenuStyels";
import SideMenuTop from "./SideMenuTop";

const SideMenu = () => {
  return (
    <SideMenuContainer width={SIDE_WIDTH}>
      <SideMenuTop />
    </SideMenuContainer>
  );
};

export default SideMenu;
