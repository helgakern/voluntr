import React from "react";
import { ClipLoader } from "react-spinners";

export const Spinner = ({ message }) => (
  <div className="spinner">
    {/* <div className="ui segment" style={{ minHeight: "10em" }}> */}
        {/* <div className="ui active inverted dimmer"> */}
        <div className="loader">{message || "Loading..."}</div>
        </div>
    // </div>
//   </div>  
);