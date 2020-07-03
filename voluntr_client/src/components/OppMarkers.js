import React from "react";

const OppMarker = (props) => {
    return (
        <Marker position={props.position}>
            <Popup>
                {props.opportunityName} <br />
            </Popup>
        </Marker>
    )
}