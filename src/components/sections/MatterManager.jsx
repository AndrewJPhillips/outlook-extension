import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getMatters} from "actions/matters";

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
        <div className="App">
            <header className="App-header">
                <img src="" className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
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