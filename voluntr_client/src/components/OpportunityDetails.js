import React from "react";
import CreatedAtShow from "./CreatedAtShow";


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
              <p>Date:{props.date}</p>
              <p>Time: {props.time}</p>
              <p>Where: {props.where}</p>
              <p>Contact information: {props.contact}</p>
              <p><CreatedAtShow created_at={props.created_at} /></p>    
  
              <button class="ui button"
                  onClick={() => {
                      this.editOpportunity(this.state.opportunities.id);
                  }}> 
                  Edit 
              </button>

              <button class="ui button"
                  onClick={() => {
                      this.deleteOpportunity(this.state.opportunities.id);
                  }}> 
                  Delete 
              </button>
        </div>
  );
}

export default OpportunityDetails;