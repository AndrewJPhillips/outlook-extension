import React from 'react';
import {connect} from 'react-redux';

const MatterViewer = ({
    matter,
                          from,
                          summary,
                          content,
                          readStatus
                      }) => {

    const renderMatter = () => {

        return (
            <div className="matter">
                <div>{summary}</div>
            </div>
        )
    };

    return typeof from !== 'undefined' ? renderMatter() : null;
};

const mapStateToProps = ({matters}) => {
    const matter = matters.mattersList.filter(matter => matter.id === matters.selectedId);
    return matter.length ? matter[0] : null;
};

export default connect(mapStateToProps)(MatterViewer);