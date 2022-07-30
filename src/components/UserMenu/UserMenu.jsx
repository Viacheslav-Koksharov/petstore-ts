import { useSelector, useDispatch } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import { logOut } from "../../redux/auth/auth-operations";
import { NavigationStyled, Text, Button } from "./UserMenu.styled.js";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <NavigationStyled>
      <Text>willkommen, {name || "quest"}!</Text>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </Button>
    </NavigationStyled>
  );
};

export default UserMenu;
