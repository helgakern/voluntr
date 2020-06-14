import React from "react";

function ControlPanel(props){
    return (
        <div>
            <h2>
                Opportunity Title: <br />
                {props.title}
            </h2>
            <p></p>
            <h3>
                Opportunity Description: <br />
                {props.description}
            </h3>
            <br />
            Date: <br />
            {props.date}
            <p>Address: {props.address}</p>
            <p>Contact information: {props.contact}</p>
        </div>
    );
}

export default OpportunityPage;