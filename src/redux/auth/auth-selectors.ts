import { RootState } from '../store';

const getIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
const getUsername = (state: RootState) => state.auth.user.name;

const getIsFetchingCurrent = (state: RootState) => state.auth.isFetchingCurrentUser;
const authSelectors = {
  getIsLoggedIn,
  getUsername,

  getIsFetchingCurrent,
};

export default authSelectors;
