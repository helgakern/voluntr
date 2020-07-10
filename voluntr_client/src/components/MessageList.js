import React from "react";
import MessageDetails from "./MessageDetails";

export function MessageList(props) {
  const { messages } = props; 
  return (
    <ul>
      {messages.map(message => (
        <li key={message.id}>
          
          <p> </p>

          <MessageDetails {...message} onDeleteClick={props.onMessageDeleteClick} />
          <br />
        </li>
      ))}
    </ul>
  );
}