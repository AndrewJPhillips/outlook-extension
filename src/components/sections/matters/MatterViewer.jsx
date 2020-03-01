import React from 'react';
import {connect} from 'react-redux';

import {
    Avatar,
    Button,
    Loader
} from 'components/lib';
import {formatDate} from 'utils/utilFuncs';

/**
 * @description Shows the full matter content.
 * @param {string} from - the sender of the matter
 * @param {string} summary - the summary/title of the matter
 * @param {string} content - the content of the matter
 * @param {string} date - matter creation date
 * @returns {null}
 * @constructor
 */
const MatterViewer = ({
                          from,
                          summary,
                          content,
                          date
                      }) => {

    const renderMatter = () => {

        return (
            <div className="matter">
                <div className="summary">
                    {summary}
                </div>
                <div className="from">
                    <Avatar display={from[0]}/>
                    {from}
                    {typeof date !== 'undefined' ?
                        <div className="date">{formatDate(new Date(date))}</div>
                        : null
                    }
                </div>
                <hr/>
                <div className="content">
                    {content.split('\n').map(i => <p>{i}</p>)}
                </div>
                <div className="actions">
                    <Button>Mark as Done</Button>
                    <Button>Mark on Hold</Button>
                    <Button>Respond</Button>
                </div>
            </div>
        )
    };

    const showLoaders = () => {
        return (
            <div className="matter-viewer-loader">
                <Loader className="loader-main"/>
                <Loader className="loader-detail"/>
            </div>
        )
    };


    return typeof from !== 'undefined' ? renderMatter() : showLoaders();
};

MatterViewer.defaultProps = {
    summary: '',
    content: '',
};

const mapStateToProps = ({matters}) => {
    const matter = matters.mattersList.filter(matter => matter.id === matters.selectedId);
    return matter.length ? matter[0] : {};
};

export default connect(mapStateToProps)(MatterViewer);