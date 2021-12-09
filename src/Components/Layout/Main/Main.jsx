import React, {useState} from "react";
import {Card} from '../../UI/Card/Card';
import { UIButton } from "../../UI/UIButton/UIButton";
import ImgRick from '../../../Images/Rick.jpeg';

export const Main = () =>{
    const [data, setData] = useState({name:"Rick", image:ImgRick, species:"Human"});

    const URL = 'https://rickandmortyapi.com/api/character?name'
    

    const FetchApi=()=> {    
        fetch(URL)
        .then(response=>response.json())
        .then(data=>setData(data.results))
        console.log(data.results);
      }
    
       return (
        <main>
          <UIButton event={FetchApi} />
           <Card data={data} />    
 
         </main>
        )
}
