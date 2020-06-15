import React from "react";

function OpportunityDetailsPage(props){
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
            <p>Address: {props.local}</p>
            <p>Contact information: {props.contact}</p>
        </div>
    );
}

export default OpportunityDetailsPage;