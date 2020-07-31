import * as authActions from './authActions';
import * as mainActions from './mainActions';

const rootActions = {
  ...authActions,
  ...mainActions,
};

export default rootActions;
