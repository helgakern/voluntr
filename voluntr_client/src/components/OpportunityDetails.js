import React, { Component } from "react";
import CreatedAtShow from "./CreatedAtShow";
import { Opportunities } from "../requests";
import { OpportunityShowPage } from "./OpportunityShowPage";
import moment from "moment";

function OpportunityDetails(props) {
  return (
        <div>
              <h2>
                  Opportunity: <br />
                  {props.title}
              </h2>
              <p></p>
              <h3>
                  Description: <br />
                  {props.description}
              </h3>
              
              <p>Tag:{props.tags}</p>
              <p>Date: {moment(props.date).format("DD/MM/YYYY")}</p>
              <p>Time: {moment(props.time).format("HH:MM")}</p>
              <p>Where: {props.where}</p>
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