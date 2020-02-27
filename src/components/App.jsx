import React from 'react';
import { Provider } from 'react-redux';

import 'site_media/styles/base.less';
import store from 'utils/store';
import MatterManager from 'components/sections/MatterManager';

/**
 * @description
 * @returns {*}
 * @constructor
 */
const App = () => {
  return (
      <Provider store={store}>
          <MatterManager/>
      </Provider>
  );
};

export default App;
