import React from 'react';


/**
 * @description
 * @param title
 * @param items
 * @param render
 * @param className
 * @returns {*}
 * @constructor
 */
const SideList = ({
                      title,
                      items,
                      render,
                      className
                  }) => {

    return (
        <div className={`side-list ${className}`}>
            <div className="title">
                {title}
            </div>
            <ul>
                {items.map(item => render(item))}
            </ul>
        </div>
    )

};

SideList.defaultProps = {
    title: '',
    items: [],
    render: () => true,
    className: ''
};

export default SideList;