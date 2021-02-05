import React from 'react';
import './Person.css';

export const Person = ({variable, name, children, changed}) => {
    return(
        <div className="Person">
            <p onClick={variable}>I'm from the {name} componnent. Hurray!</p>
            <p>{children}</p>
            <input type="text" value={name} onChange={changed} />
        </div> 
    )
}

export const Test = ()=>{

}
