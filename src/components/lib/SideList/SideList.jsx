import React, {Fragment} from 'react';

/**
 * @description Renders a list of of items with a title
 * @param {string} title - title to be shown above the list
 * @param {array} items - items to be passe to renderProps
 * @param className - className to be added to the list
 * @param render - will be called on each item, should returns an `li`
 * @returns {*}
 * @constructor
 */
const SideList = ({
                      title,
                      items,
                      className,
                      render
                  }) => {

    return (
        <div className={`side-list ${className}`}>
            <div className="title">
                {title}
            </div>
            <ul>
                {items.map(item => <Fragment key={item.id}>{render(item)}</Fragment>)}
            </ul>
        </div>
    )

};

SideList.defaultProps = {
    title: '',
    items: [],
    className: '',
    render: () => true
};

export default SideList;