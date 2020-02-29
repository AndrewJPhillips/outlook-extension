import React, {Fragment, useEffect} from 'react';
import {connect} from "react-redux";
import {getMatters} from "actions/matters";

import {
    SideList,
    ToolBar
} from 'components/lib';

import MatterListItem from './MatterListItem';
import MatterViewer from './MatterViewer';

/**
 * @description MatterManager is responsible for organsing matters.
 * @param {array} matters - Matters for particular user
 * @param {function} getMatters - gets matters via redux
 * @returns {*}
 * @constructor
 */
const MatterManager = ({
                           matters,
                           getMatters
                       }) => {

    useEffect(() => {
        getMatters();
    }, [null]);

    console.log(matters)


    return (
        <div className="matter-app">
            <ToolBar brand="Autologyx"/>
            <div className="content-wrapper">
                <SideList
                    title='Inbox'
                    items={matters}
                    render={MatterListItem}
                    className="matters-list"/>
                <MatterViewer/>
            </div>

        </div>
    )
};

MatterManager.defaultProps = {
    matters: [],
    getMatters: _ => true
};

const mapStateToProps = ({matters}) => ({matters});

export default connect(mapStateToProps, {
    getMatters
})(MatterManager);