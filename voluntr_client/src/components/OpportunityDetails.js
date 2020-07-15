import React, { Component } from "react";
import CreatedAtShow from "./CreatedAtShow";
import { Opportunities } from "../requests";
import { OpportunityShowPage } from "./OpportunityShowPage";
import { OpportunityEditPage } from "./OpportunityEditPage";
import { NewMessageForm } from "./NewMessageForm";
import moment from "moment";
import Children from "../images/wireframe/children.svg";
import Community from "../images/wireframe/community.svg";
import Environment from "../images/wireframe/environment.svg";
import pets from "../images/wireframe/pets.svg";
import Seniors from "../images/wireframe/seniors.svg";
import Teaching from "../images/wireframe/teaching.svg";



function OpportunityDetails(props) {
  let picture 
  console.log(props.category);
  function categoryPicture(){
    switch (props.category) {
      case "pets":
        picture = pets
        break;
    
      default:
        break;
    }
  }
  categoryPicture()
  if(!picture){return "loading"} 
  return (
        <div className="opportunity">
          <div className="opportunity-details">  
              <h2>{props.title}</h2>
              
              <h3>{props.description}</h3>
              
              <p><strong>Date:</strong> {moment(props.date).format("DD/MM/YYYY")}</p>
              <p><strong>Time:</strong> {moment(props.time).format("HH:MM")}</p>
              <p><strong>Address:</strong> {props.address}</p>
              <p><strong>Contact information:</strong> {props.contact}</p>
              <p><CreatedAtShow created_at={moment(props.created_at).format("DD/MM/YYYY")} /></p>    
          </div>  
          <div className="opportunity-buttons" style={{backgroundImage:`url(${picture})`}}>
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
        </div>
  );
}

export default OpportunityDetails;