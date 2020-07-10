import React, { Component } from "react";
import CreatedAtShow from "./CreatedAtShow";
import { Opportunities } from "../requests";
import { OpportunityShowPage } from "./OpportunityShowPage";
import { OpportunityEditPage } from "./OpportunityEditPage";
import { NewMessageForm } from "./NewMessageForm";
import moment from "moment";

function OpportunityDetails(props) {
  return (
        <div>
              <h2>
                  Opportunity: <br />
                  {props.title}
              </h2>
              <p></p>
              <p>
                  Description: <br />
                  {props.description}
                  
              </p><br />
              
              <p>Tag: {props.tags}</p>
              <p>Date: {moment(props.date).format("DD/MM/YYYY")}</p>
              <p>Time: {moment(props.time).format("HH:MM")}</p>
              <p>Address: {props.address}</p>
              <p>Contact information: {props.contact}</p>
              <p><CreatedAtShow created_at={moment(props.created_at).format("DD/MM/YYYY")} /></p>    
  
              <button className="ui button"
                onClick={() => {
                    props.editOpportunity(props.id);
                }}
                > 
                Edit 
              </button>

              <button className="ui button"
                  onClick={() => props.deleteOpportunity(props.id)
                    // props.deleteOpportunity(props.id);
                  }> 
                  Delete 
              </button>
        </div>
  );
}

export default OpportunityDetails;