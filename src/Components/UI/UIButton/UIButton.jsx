import React from "react";
import './UIButton.css'

export const UIButton =({event})=>{
  return(
      <main>
          <input className="button" onKeyUp={event}></input>
      </main>
  );
}