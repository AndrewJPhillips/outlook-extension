import React from 'react';

import {Avatar} from 'components/lib';

/**
 *
 * @param from
 * @param summary
 * @returns {*}
 * @constructor
 */
const MatterListItem = ({
                            from,
                            summary
}) => {
    return (
        <>
            <Avatar display={from[0]} />
            <div className="detail">
                <div className="name">{from}</div>
                <div className="summary">
                    {summary}
                </div>
            </div>

        </>
    )
};


export default MatterListItem;