import React from 'react';

const SelectInput=({name, label, onChange, defaultOption, value, error, options})=>{
    return(

    <div>
        <label htmlFor={name}>{label}</label>
        <div>
          <select
          name={name}
          value={value}
          onChange={onChange}
          className="form-control">
          <option value="">{defaultOption}</option>
          
          {options.map((option) => {
            return <option key={option.value} value={option.value}>{option.text}</option>;
          })
          }
        </select>

        </div>
    </div>

    );
};

export default SelectInput;