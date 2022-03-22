import React from "react";
import "./Cell.css";

import { useDispatch } from 'react-redux';

function Cell(props){

    const dispatch = useDispatch();
    
    let cellClass = "cell"
    
    const value = props.value;
    
    if (value === 1){
        cellClass += " black"
    } 
    
    return (
        <div className={cellClass} onClick={()=> dispatch(
            {type:'CLICK',
            value:value,
            x: props.x,
            y: props.y,}
        )}>
        </div>
    )

}

export default Cell;