import React from "react";

function MessageDetails(props) {
  return (
    <div
      style={{
        fontStyle: "italic",
      }}
    >
      <strong>{props.owner.first_name} {props.owner.last_name} said: </strong>
      {props.body}
      
    </div>
  );
}

export default MessageDetails;