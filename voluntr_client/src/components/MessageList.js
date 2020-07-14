import React from "react";
import MessageDetails from "./MessageDetails";

export function MessageList(props) {
  const { messages } = props; 
  return (
    <ul className="messages">
      {messages.map(message => (
        <li className="message" key={message.id}>
          
          <p> </p>

          <MessageDetails {...message} onDeleteClick={props.onMessageDeleteClick} />
          
        </li>
      ))}
    </ul>
  );
}