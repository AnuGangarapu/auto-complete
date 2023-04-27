
import React from "react";
import { TextField } from "@mui/material";
import Autocomplete, {createFilterOptions} from "@mui/material/Autocomplete";


const filter = createFilterOptions();



const AutoComplete = (props) => {
 
  const { label, option, variant, placeholder,add }= props;
  const [data, setData] = React.useState('');
  
  const handleChange = (event, value) => {
     if (value === null) {
      setData(value);
    
    }
    else if (typeof value === "string") {
     
      setData({
        title: value,
      });
     
     
    } else if (value && value.inputValue) {
      setData({
        title: value.inputValue,
      });
      
    } else {
      setData(value);
    }
    
  };

  

  return (
    <Autocomplete 
      style={{width:"50%",margin:"25px"}}
      options={option} 
      onChange={(event, value) => handleChange(event, value)}
     
     filterOptions={(options, params) => {

        const filtered = filter(options, params);
       
        if (params.inputValue !== "" && (add === true)) {
          filtered.push({
            inputValue: params.inputValue,
            title: `Add "${params.inputValue}"`,
          });
        }
       
        return filtered.slice(0,200);
      }}
      getOptionLabel={(option) => {
        
        if (typeof option === "string") {
         
          return option;
        }
        if (option.title) {
          
          return option.title;
        }
       
        return option.inputValue;
      }}
      
      isOptionEqualToValue={(option,value)=>(option === value.title || option !== value.title )}
    
      value={data ? data : null}
     
      renderInput={(params) => {
        
        return(
        <TextField
          {...params}
          size="small"
          label={label}
          style={{width: "100%"}}
          placeholder={placeholder}
          variant={variant}
          
          />
      )}}
    />
  );
};
export default AutoComplete;