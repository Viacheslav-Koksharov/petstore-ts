import { RootState } from '../store';

const getIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
const getUsername = (state: RootState) => state.auth.user.name;
const getIsFetchingCurrent = (state: RootState) => state.auth.isFetchingCurrentUser;
const getOrders = (state: RootState) => state.auth.orders;


const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetchingCurrent,
  getOrders
};

export default authSelectors;
