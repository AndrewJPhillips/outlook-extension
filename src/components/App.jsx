import React from 'react';
import {Provider} from 'react-redux';

import 'site_media/styles/base.css';
import store from 'utils/store';
import MatterManager from 'components/sections/matters/Matters';
import {
    SandBox
} from "components/lib";

/**
 * @description Main wrapper for app
 * @returns {*}
 * @constructor
 */
const App = () => {
    return (
        <Provider store={store}>
            {
                process.env.NODE_ENV === "production" ?
                    <MatterManager/> :
                    <SandBox>
                        <MatterManager/>
                    </SandBox>
            }

        </Provider>
    );
};

export default App;
