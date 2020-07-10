import React from "react";

function MessageDetails(props) {
  return (
    <div
      style={{
        fontStyle: "italic",
      }}
    >
      {props.owner.first_name} {props.owner.last_name} said: {props.body}
      
    </div>
  );
}

export default MessageDetails;