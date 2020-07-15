import React from "react";

const Spinner = props => (
    <div className="spinner">
        <div className="ui segment spinner">
            <div className="ui active inverted dimmer">
                <div className="ui text loader">Loading</div>
            </div>
        </div>
    </div>
        
);

export default Spinner;
