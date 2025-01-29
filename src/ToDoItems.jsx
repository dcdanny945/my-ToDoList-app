import { useState } from "react";
import React from "react";




function ToDoItems(props){
    // li state check indiviually
    // creat a new array according to the length as toDoItemsLi, which was pass down with props.hereIsProps
    // Setting all li with inital state as false
    

    const [liClicked, setLiClicked] = useState(new Array(props.hereIsProps.length).fill(false));
    function handleLiClicked(index){

        console.log("li bring in index")

        //  flip state when one li is clicked , return to newLiClickedState, which will pass into liClicked
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
            onDoubleClick={() =>props.onDoubleClick(index)}
            style={ { textDecoration: liClicked[index]? "line-through" :null} }
          >
            {currentValue}
          </li>
        ))}
      </ul>
    )
}


export default ToDoItems;
