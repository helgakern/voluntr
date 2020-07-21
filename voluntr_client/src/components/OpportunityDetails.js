import React, { Component } from "react";
import CreatedAtShow from "./CreatedAtShow";
import { Opportunities } from "../requests";
import { OpportunityShowPage } from "./OpportunityShowPage";
import { OpportunityEditPage } from "./OpportunityEditPage";
import { NewMessageForm } from "./NewMessageForm";
import { format } from "date-fns";
import moment from "moment";
import children from "../images/wireframe/children.jpg";
import community from "../images/wireframe/community.jpg";
import environment from "../images/wireframe/environment.jpg";
import pets from "../images/wireframe/pets.jpg";
import seniors from "../images/wireframe/seniors.jpg";
import teaching from "../images/wireframe/teaching.jpg";



function OpportunityDetails(props) {
  let picture 
  console.log(props.category);
  function categoryPicture(){
    switch (props.category) {
      case "pets":
        picture = pets
        break;
      case "seniors":
        picture = seniors
        break;
      case "teaching":
        picture = teaching
        break;
      case "children":
        picture = children
        break;
      case "community":
        picture = community 
        break;
      case "environment":
        picture = environment
        break;
      default:
        picture = pets

        break;
    }
  }
  
  function newTime(){
    if(props.time)
    {return new Date(props.time).toLocaleTimeString("GMT")}
  }
  console.log(newTime());

  categoryPicture()
  if(!picture){return "loading"} 
  return (
        <div className="opportunity">
          <div className="opportunity-details">  
              <h2>{props.title}</h2>
              
              <h3>{props.description}</h3>
              {/* format( new Date (props.date), "MM-dd-yyyy") */}
              <p><strong>Date:</strong> {moment(props.date).format("DD/MM/YYYY")} </p>
              <p><strong>Time:</strong> {format( new Date (props.time), "h:mm a")}</p>

              {/* <p><strong>Time:</strong> {(new Date(props.time)).getTime()}</p> */}
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