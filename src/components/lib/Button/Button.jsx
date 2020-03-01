import React from 'react';

/**
 * @description A basic button wrapper
 * @param {string} type - type of button
 * @param onClick
 * @param {string} className - className to be passed
 * @param children
 * @returns {*}
 * @constructor
 */
const Button = ({
                    type,
                    onClick,
                    className,
                    children
                }) => (
    <button
        onClick={onClick}
        className={`${className} btn btn-${type}`}>
        {children}
    </button>
);

Button.defaultProps = {
    type: 'primary',
    className: '',
    onClick: () => true
};

export default Button;