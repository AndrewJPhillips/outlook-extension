import React from 'react';
import {connect} from 'react-redux';
import {Avatar} from 'components/lib';
import {selectMatter} from "actions/matters";

/**
 *
 * @param id
 * @param from
 * @param summary
 * @param selectMatter
 * @returns {*}
 * @constructor
 */
const MatterListItem = ({
                            id,
                            from,
                            summary,
                            selectMatter
                        }) => {
    return (
        <li onClick={() => selectMatter(id)}>
            <Avatar display={from[0]}/>
            <div className="detail">
                <div className="name">{from}</div>
                <div className="summary">
                    {summary}
                </div>
            </div>

        </li>
    )
};


export default connect(null, {
    selectMatter
})(MatterListItem);