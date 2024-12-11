import { useState } from "react";
import React from "react";




function ToDoItems(props){

    const [liClicked, setLiClicked] = useState([]);

    function handleLiClicked(index){
        console.log("li Clicked")
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
            onClick = {()=>handleLiClicked(index)}
            style={ { textDecoration: liClicked[index]? "line-through" :null} }
          >
            {currentValue}
          </li>
        ))}
      </ul>
    )
}


export default ToDoItems;



// import { useState } from "react";
// import React from "react";

// function ToDoItems(props) {
//   // 用一個陣列追蹤每個項目的點擊狀態
//   const [clickedItems, setClickedItems] = useState([]);

//   function handleLiClicked(index) {
//     // 切換對應項目的點擊狀態
//     setClickedItems((prevState) => {
//       const newClickedState = [...prevState];
//       newClickedState[index] = !newClickedState[index];
//       return newClickedState;
//     });
//   }

//   return (
//     <ul>
//       {props.hereIsProps.map((currentValue, index) => (
//         <li
//           key={index}
//           onClick={() => handleLiClicked(index)}
//           style={{
//             textDecoration: clickedItems[index] ? "line-through" : "none",
//           }}
//         >
//           {currentValue}
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default ToDoItems;