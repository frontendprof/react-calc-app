
import React from 'react';

import "./Button.css";



const isOperator=(val)=>{
    return !isNaN(val)||val==="."||val==="=";
}



export const Button=(props) =><div 
className={`btn-wrapper ${isOperator(props.children)?null:"oper"}`}>
    {props.children}
    </div>

