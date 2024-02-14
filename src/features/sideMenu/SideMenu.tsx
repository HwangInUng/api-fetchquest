import SideList from "./SideList";
import { SideMenuContainer } from "./sideMenuStyles";
import SideMenuTop from "./SideMenuTop";
import SideSearchList from "./SideSearchList";

const SideMenu = () => {
  return (
    <SideMenuContainer>
      <SideMenuTop />
      <SideSearchList />
      <SideList />
    </SideMenuContainer>
  );
};

export default SideMenu;
