import React from 'react';
import {connect} from 'react-redux';
import { Email, StarBorder } from '@material-ui/icons';

import {Avatar} from 'components/lib';
import {selectMatter} from "actions/matters";

/**
 * @description A list item that displays basic matter details.
 * @param {integer} id - the id of the matter
 * @param {string} from - the sender of the matter
 * @param {string} summary - the summary or `title` of the matter
 * @param {boolean} selected - whether or not the item is currently displaying
 * @param {function} selectMatter - action creator to select mattter
 * @param {boolean} readStatus - whether or not the matter has been read
 * @returns {*}
 * @constructor
 */
const MatterListItem = ({
                            id,
                            from,
                            summary,
                            selected,
                            selectMatter,
                            readStatus
                        }) => {
    return (
        <li
            className={selected ? 'selected': ''}
            onClick={() => selectMatter(id)}>
            <Avatar display={from[0]}/>
            <div className="detail">
                <div className="name">{from}</div>
                <div className="summary">
                    {summary}
                </div>
            </div>
            <MatterStatusIcons readStatus={readStatus}/>
        </li>
    )
};

MatterListItem.defaultProps = {
    id: -1,
    from: '',
    summary: '',
    selected: false,
    selectMatter: () => true
};

/**
 * @description Show matter item status'
 * @param {boolean} readStatus
 * @returns {*}
 * @constructor
 */
const MatterStatusIcons = ({readStatus}) => {
    return (
        <div className="status-icons">
            {readStatus ? null : <Email />}
            <StarBorder className="star" />
        </div>
    )
};

MatterStatusIcons.defaultState = {
    readStatus: false
};

export default connect(null, {
    selectMatter
})(MatterListItem);