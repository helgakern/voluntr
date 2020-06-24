import React from "react";

function MessageDetails(props) {
  return (
    <div
      style={{
        color: "white",
        fontStyle: "italic",
        backgroundColor: "teal"
      }}
    >
      {props.author.first_name} {props.author.last_name} said: ${props.message} on{" "}
      {props.created_at}
      
    </div>
  );
}

export default MessageDetails;