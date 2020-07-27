import React from "react";
import FormErrors from "./FormErrors/FormErrors";

function NewMessageForm(props) {
  function handleMessageSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const fd = new FormData(currentTarget);
    let text = fd.get("message");
    props.onSubmit(props.opportunities.id, { body: fd.get("message") });
    currentTarget.reset()
  }

  return (
    <div className="message-form">
      <form className="ui form" onSubmit={handleMessageSubmit}>
        <div className="field">
          <label>Message</label>
          <textarea id="message" name="message" rows="4" cols="50"></textarea>
          {/* <input type="text" name="message" id="message" /> */}
          <FormErrors forField="message" errors={props.errors} />
        </div>

        <button className="ui button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default NewMessageForm;