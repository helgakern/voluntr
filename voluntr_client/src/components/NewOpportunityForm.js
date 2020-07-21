import React from "react";
import { OpportunityEditPage } from "./OpportunityEditPage";
import FormErrors from "./FormErrors/FormErrors";
import * as ELG from "esri-leaflet-geocoder";
import { Opportunities } from "../requests";
import { Form } from 'semantic-ui-react';



function NewOpportunityForm(props) {

  function handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;

    const fd = new FormData(currentTarget);
      const time = fd.get("time")
      // console.log(time)
      const timeArray = time.split(":")
      let formattingTime = new Date()
      formattingTime = new Date (formattingTime.setHours(timeArray[0], timeArray[1]))
      // console.log(timeArray)
      // console.log(formattingTime)
      const opportunity = {
      title: fd.get("title"),
      description: fd.get("description"),
      category: fd.get("category"),  
      date: fd.get("date"),
      time: formattingTime, 
      address: fd.get("address"),
      contact: fd.get("contact"),
      }
      props.onSubmit(opportunity)
  }

  return (
    <div className="opp-form">
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
        <Form.Field label="Category" control="select" id="category" name="category">
          <option value="children">Children</option>
          <option value="community">Community</option>
          <option value="environment">Environment</option>
          <option value="pets">Pets</option>
          <option value="seniors">Seniors</option>
          <option value="teaching">Teaching</option>
        </Form.Field>
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
          <input type="time" 
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
    </div>
  );
}

export default NewOpportunityForm;