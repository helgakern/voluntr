import React from "react";
import CreatedAtShow from "./CreatedAtShow";

function OpportunitiesDetails(props) {
  return (
        <div>
              <h2>
                  Opportunity: <br />
                  {this.props.title}
              </h2>
              <p></p>
              <h3>
                  Description: <br />
                  {this.props.description}
              </h3>
              
              <p>Tag:{this.props.tags}</p>
              <p>Date:{this.props.date}</p>
              <p>Time: {this.props.time}</p>
              <p>Where: {this.props.where}</p>
              <p>Contact information: {this.props.contact}</p>
  
              <button class="ui button"
                  onClick={() => {
                      this.deleteOpportunity(this.state.opportunities.id);
                  }}> 
                  Delete 
                  </button>
                <p>
                    <CreatedAtShow created_at={props.created_at} />
                </p>    
        </div>
  );
}

export default OpportunitiesDetails;



<div>
              </div>