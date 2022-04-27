import React from 'react';

const Input = ({type, placeholder, value, onClick, className}) => {
    return ( 

        <input
        type={type}
        placeholder={placeholder}
        value={value}
        onClick={onClick}
        className={className}
        ></input>
     );
}
 
export default Input;