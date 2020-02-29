import React from 'react';

/**
 * @description
 * @param display
 * @returns {*}
 * @constructor
 */
const Avatar = ({display}) => <div className="avatar">{display}</div>

Avatar.defaultProps = {
    display: ''
};

export default Avatar;