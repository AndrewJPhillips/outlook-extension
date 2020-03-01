import React from 'react';

/**
 * @description Loader for multiple urposes
 * @param className
 * @returns {*}
 * @constructor
 */
const Loader = ({className}) => <div className={`${className} loader`}/>;

Loader.defaultProps = {
    className:''
};

export default Loader;