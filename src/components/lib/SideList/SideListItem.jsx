import React from 'react';

/**
 * @description
 * @param item
 * @param render
 * @returns {*}
 * @constructor
 */
const SideListItem = ({item, render}) => {

    return (
        <li>
            {render(item)}
        </li>
    )

};

SideListItem.defaultProps = {
    item: null,
    render: () => true
};

export default SideListItem;