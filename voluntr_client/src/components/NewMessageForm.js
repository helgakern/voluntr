import React from "react";
import FormErrors from "./FormErrors/FormErrors";

function NewMessageForm(props) {
  function handleMessageSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const fd = new FormData(currentTarget);
    let text = fd.get("message");
    props.onSubmit(props.opportunities.id, { body: fd.get("message") });
  }

  return (
    <form className="ui form" onSubmit={handleMessageSubmit}>
      <div className="field">
        <label>Message</label>
        <input type="text" name="message" id="message" />
        <FormErrors forField="message" errors={props.errors} />
      </div>

      <button className="ui button" type="submit">
        Send message
      </button>
    </form>
  );
}

export default NewMessageForm;