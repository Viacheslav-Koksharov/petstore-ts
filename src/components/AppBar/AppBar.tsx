import Navigation from "../Navigation/Navigation";

import AuthNav from "../AuthNav/AuthNav";
import { NavigationStyled } from "./AppBar.styled.js";

const AppBar = () => {
 
  return (
    <NavigationStyled>
      <Navigation />

      <AuthNav />      
    </NavigationStyled>
  );
};

export default AppBar;
