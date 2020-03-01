import React from 'react';

/**
 * @description Renders the content in a circle
 * @param {string} display - the content to be rendered
 * @returns {*}
 * @constructor
 */
const Avatar = ({display}) => (
    <div
        className="avatar"
        data-test="avatar">
        {display}
    </div>
);

Avatar.defaultProps = {
    display: ''
};

export default Avatar;