import { SIDE_WIDTH } from "../../utils/constants";
import SideList from "./SideList";
import { SideMenuContainer } from "./sideMenuStyles";
import SideMenuTop from "./SideMenuTop";

const SideMenu = () => {
  return (
    <SideMenuContainer width={SIDE_WIDTH}>
      <SideMenuTop />
      <SideList />
    </SideMenuContainer>
  );
};

export default SideMenu;
