import React from 'react';
import { Provider } from 'react-redux';

import 'site_media/styles/base.css';
import store from 'utils/store';
import MatterManager from 'components/sections/MatterManager';
import {
    SandBox
} from "components/lib";

/**
 * @description
 * @returns {*}
 * @constructor
 */
const App = () => {
  return (
      <Provider store={store}>
          <SandBox>
              <MatterManager/>
          </SandBox>
      </Provider>
  );
};

export default App;
