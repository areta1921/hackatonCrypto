import React from "react";
import "./Link.css";

export default function Link(props) {
    
   
  return (
    <a className="navLink" href={props.lnk.url}>
      {props.lnk.title}
    </a>
  );
}
