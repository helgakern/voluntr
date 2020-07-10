import React from "react";
import { OpportunityEditPage } from "./OpportunityEditPage";
import FormErrors from "./FormErrors/FormErrors";
import * as ELG from "esri-leaflet-geocoder";
import { Opportunities } from "../requests";



function NewOpportunityForm(props) {

  function handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;

    const fd = new FormData(currentTarget);

    // props.onSubmit({ 
      const opportunity = {
      title: fd.get("title"),
      description: fd.get("description"),
      tags: fd.get("tags"),
      date: fd.get("date"),
      time: fd.get("time"),
      address: fd.get("address"),
      contact: fd.get("contact"),
      }
      // created_at: fd.get("created_at")
    // });
    getCoordinates(opportunity)
    currentTarget.reset();
  }

  async function getCoordinates(opportunity){
    
      // let coordinates = []      
      await ELG.geocode().text(opportunity.where).run(async function (err, results, response) {
        if (err) {
          console.log(err);
          return;
        }

        // coordinates.push({lat: results.results[0].latlng.lat, lng: results.results[0].latlng.lng})
        
        opportunity.coordinates = [results.results[0].latlng.lat, results.results[0].latlng.lng]
        console.log(opportunity)
        Opportunities.create(opportunity)
        // this.setState({opportunities: [...this.setState.opportunities, opportunity]})

        // coordinates = await results
        // response(new Response(results))
        // console.log(coordinates)
        // // coordinates.push(results.results[0].latlng.lat)
        // // coordinates.push(results.results[0].latlng.lng)
        // return coordinates
      })
        
  }



  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
        <label>Title</label>
        <input
          type="text"
          name="title"
          id="title"
          required
          placeholder="Opportunity title..."
          defaultValue={props.opportunity? props.opportunity.title:null}
          
        />
        <FormErrors forField="title" errors={props.errors} />
      </div>
      <div className="field">
        <label>Description</label>
        <textarea
          name="description"
          rows="10"
          id="description"
          placeholder="Opportunity description..."
          defaultValue={props.opportunity? props.opportunity.description:null}
          required
        />
        <FormErrors forField="description" errors={props.errors} />
      </div>
      <div className="field">
        <label>Tags</label>
        <input type="text"
         name="tags" 
         id="tags" 
         placeholder="Enter tags separated by commas" 
         defaultValue={props.opportunity? props.opportunity.tags:null}
         required />
        <FormErrors forField="time" errors={props.errors} />
      </div>
      <div className="field">
        <label>Date</label>
        <input
          type="date"
          name="date"
          id="date"
          placeholder="DD-MM-YYYY"
          defaultValue={props.opportunity? props.opportunity.date:null}
          required
        />
        <FormErrors forField="date" errors={props.errors} />
      </div>
      <div className="field">
        <label>Time</label>
        <input type="text" 
        name="time" 
        id="time" 
        placeholder="2:00 PM" 
        defaultValue={props.opportunity? props.opportunity.time:null}
        required />
        <FormErrors forField="time" errors={props.errors} />
      </div>
      <div className="field">
        <label>Address</label>
        <input type="text" 
        name="address" 
        id="address" 
        placeholder="Put the opportunity's address here" 
        defaultValue={props.opportunity? props.opportunity.address:null}
        required />
        <FormErrors forField="address" errors={props.errors} />
      </div>
      <div className="field">
        <label>Contact</label>
        <input
          type="text"
          name="contact"
          id="contact"
          placeholder="Insert the contact information here"
          defaultValue={props.opportunity? props.opportunity.contact:null}
          required
        />
        <FormErrors forField="contact" errors={props.errors} />
      </div>

      <button className="ui button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default NewOpportunityForm;