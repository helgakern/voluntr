import React from "react";
import CreatedAtShow from "./CreatedAtShow";

function MessageDetails(props) {
  return (
    <div
      style={{
        color: "white",
        fontStyle: "italic",
        backgroundColor: "teal"
      }}
    >
      {props.owner.first_name} {props.owner.last_name} said: ${props.message} on{" "}
      {props.created_at}
      
    </div>
  );
}

export default MessageDetails;