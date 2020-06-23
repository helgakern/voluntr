import React from "react";
import FormErrors from "./FormErrors/FormErrors"

function NewOpportunityForm(props) {
  function handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;

    const fd = new FormData(currentTarget);

    props.onSubmit({
      title: fd.get("title"),
      description: fd.get("description"),
      tags: fd.get("tags"),
      date: fd.get("date"),
      time: fd.get("time"),
      where: fd.get("where"),
      contact: fd.get("contact")
    });

    currentTarget.reset();
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
          required
        />
        <FormErrors forField="description" errors={props.errors} />
      </div>
      <div className="field">
        <label>Tags</label>
        <input type="text" name="tags" id="tags" placeholder="Enter tags separated by commas" required />
        <FormErrors forField="time" errors={props.errors} />
      </div>
      <div className="field">
        <label>Date</label>
        <input
          type="number"
          name="date"
          id="date"
          placeholder="04/01/2021"
          required
        />
        <FormErrors forField="date" errors={props.errors} />
      </div>
      <div className="field">
        <label>Time</label>
        <input type="text" name="time" id="time" placeholder="2:00 PM" required />
        <FormErrors forField="time" errors={props.errors} />
      </div>
      <div className="field">
        <label>Where</label>
        <input type="text" name="where" id="where" placeholder="Put the opportunity's address here" required />
        <FormErrors forField="where" errors={props.errors} />
      </div>
      <div className="field">
        <label>Contact</label>
        <input
          type="text"
          name="contact"
          id="contact"
          placeholder="Insert the contact information here"
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