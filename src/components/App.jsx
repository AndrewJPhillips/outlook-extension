import React from 'react';
import { Provider } from 'react-redux';

import 'site_media/styles/base.less';
import store from 'utils/store';
import Base from 'components/sections/Base';

/**
 * @description
 * @returns {*}
 * @constructor
 */
const App = () => {
  return (
      <Provider store={store}>
          <Base/>
      </Provider>
  );
};

export default App;
