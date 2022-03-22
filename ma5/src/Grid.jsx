import React from "react";
import "./Grid.css"
import Cell from "./Cell";
import { useSelector } from 'react-redux';
export default function Grid(){

    const counter = useSelector((state) => state.counter);
    const gridUpdate = useSelector((state) => state.gridUpdate);

    let grid = []

    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        grid.push((<Cell key={i*13+j*31} value={gridUpdate[i][j]} x={i} y={j}/>));
      }
    }

    return(
        <div >
            <div className="count">Count:{counter}</div>
            <div className="grid">
                {grid}
            </div>
        </div>
    )
    
};