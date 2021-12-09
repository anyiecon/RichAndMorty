import React from "react";
import './Card.css'

export const Card =(data)=>{
    const {name, image, species} = data.data;
    
    return(
        <div className="card">
            <h2>{name}</h2>
            <img src={image} alt={name}/>
            <hr/>
            <p>{species}</p>
        </div>
    )
}