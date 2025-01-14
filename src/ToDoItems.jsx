import { useState } from "react";
import React from "react";




function ToDoItems(props){
    // li state check indiviually
    // const [liClicked, setLiClicked] = useState([]);
    const [liClicked, setLiClicked] = useState(new Array(props.hereIsProps.length).fill(false));
    function handleLiClicked(index){
        console.log("li bring in index")
        setLiClicked((prevState)=>{
           const newLiClickedState = [...prevState];
           newLiClickedState[index] = !newLiClickedState[index];
           return newLiClickedState;
          

        })
       
    }
    return(
        <ul>
        {props.hereIsProps.map((currentValue, index) => (
          <li 
            key={index}
            id = {index} 
            onClick = {()=>handleLiClicked(index)}
            onDoubleClick={() => {
              console.log(`Double clicked on index: ${index}`);
              props.onDoubleClick(index);
            }}
            style={ { textDecoration: liClicked[index]? "line-through" :null} }
          >
            {currentValue}
          </li>
        ))}
      </ul>
    )
}


export default ToDoItems;
