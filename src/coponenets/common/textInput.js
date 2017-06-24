import React from 'react';

const TextInput = ({ name,label, value, onChange, placeholder, error })=>{
        let wraperclass ='form-group';
        if(error && error.length>0){
            wraperclass +=" " + "has-errrored";
        }

    return(
        <div className={wraperclass}>
            <label htmlFor={name}>{label}</label>
            <div>
            <input 
            type="text"
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            />
            {error && <div alert alert-danger>{error}</div>}
            </div> 

        </div>
    );
};
export default TextInput;