import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";

import {
    getMatters,
} from "actions/matters";

import {
    SideList,
    ToolBar,
    Loader
} from 'components/lib';

import MatterListItem from './MatterListItem';
import MatterViewer from './MatterViewer';

/**
 * @description Matters is responsible for organising matters.
 * @param {array} matters - Matters for particular user
 * @param {function} getMatters - gets matters via redux
 * @param {integer} selectedMatterId - id of selected matter
 * @returns {*}
 * @constructor
 */
const Matters = ({
                           matters,
                           getMatters,
                           selectedMatterId
                       }) => {

    // Confirms loaded- I would probably make a custom hook for this
    const [contentLoaded, setLoadedStatus] = useState(false);

    useEffect(() => {
        getMatters().then(() => {
            setLoadedStatus(true);
        })
    }, [null]);

    const loaderList = [{id:0}, {id:1}, {id:2}, {id:3}, {id:4}];

    /**
     * @description
     * @param item
     * @returns {*}
     */
    const renderItem = item => {
        item = {...item, selected: item.id === selectedMatterId};
        return <MatterListItem {...item}/>;
    };


    /**
     * @description Renders loaders when not finished loading
     * @returns {*}
     */
    const renderListItemLoader = () => {
        return <Loader />
    };

    return (
        <div className="matter-app">
            <ToolBar brand="Autologyx"/>
            <div className="content-wrapper">
                <SideList
                    title='Inbox'
                    items={contentLoaded ? matters : loaderList}
                    render={contentLoaded ? renderItem : renderListItemLoader}
                    className="matters-list"/>
                <MatterViewer/>
            </div>

        </div>
    )
};

Matters.defaultProps = {
    matters: null,
    getMatters: _ => true,
    selectedMatterId: -1
};

const mapStateToProps = ({matters}) => ({
    matters: matters.mattersList,
    selectedMatterId: matters.selectedId
});

export default connect(mapStateToProps, {
    getMatters,
})(Matters);