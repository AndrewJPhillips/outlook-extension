import React from 'react';

/**
 * @description - Toolbar to be rendered at the top of the app
 * @param {string} brand - the name of the company/app
 * @returns {*}
 * @constructor
 */
const ToolBar = ({brand}) => {
    return (
        <div className="tool-bar">
            <div className="title">{brand} - Legal Matters</div>
        </div>
    )
};

ToolBar.defaultProps = {
    brand: ''
};

export default ToolBar;