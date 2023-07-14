import AutoComplete from './Components/ReusableAutoComplete';
const countries=["Afghanistan",  "Albania",  "Algeria",  "Andorra",  "Angola",  "Antigua and Barbuda",  "Argentina",  "Armenia",  "Australia",  "Austria",  "Azerbaijan",  "Bahamas",  "Bahrain",  "Bangladesh",  "Barbados",  "Belarus",  "Belgium",  "Belize",  "Benin",  "Bhutan",  "Bolivia"]
const states=[  "Andhra Pradesh",   "Bihar",  "Chhattisgarh",  "Goa",  "Gujarat",  "Haryana",  "Himachal Pradesh",  "Jharkhand",  "Karnataka",  "Kerala",  "Madhya Pradesh",  "Maharashtra",  "Manipur",  "Meghalaya",  "Mizoram",  "Nagaland",  "Odisha",  "Punjab",  "Rajasthan",  "Sikkim",  "Tamil Nadu",  "Telangana",  "Tripura",  "Uttar Pradesh",  "Uttarakhand",  "West Bengal",  "Andaman and Nicobar Islands",  "Chandigarh",  "Dadra and Nagar Haveli and Daman and Diu",  "Lakshadweep",  "Delhi",  "Puducherry",  "Jammu and Kashmir",  "Ladakh","Arunachal Pradesh",  "Assam","Andhra " ]

function App() {
  return (
    

      
      <div>
         <AutoComplete option={states}   add={false} variant="outlined"  label="State"/>
          <AutoComplete option={countries} add={true} placeholder={"Select a Country"}  variant="standard" />
          <AutoComplete option={states}   add={false} variant="outlined"  label="State"/>
          <AutoComplete option={countries} add={true} placeholder={"Select a Country"}  variant="standard" />
          <AutoComplete option={states}   add={false} variant="outlined"  label="State"/>
          <AutoComplete option={countries} add={true} placeholder={"Select a Country"}  variant="standard" />
          <AutoComplete option={states}   add={false} variant="outlined"  label="State"/>
          <AutoComplete option={countries} add={true} placeholder={"Select a Country"}  variant="standard" />
          <AutoComplete option={states}   add={false} variant="outlined"  label="State"/>
          <AutoComplete option={countries} add={true} placeholder={"Select a Country"}  variant="standard" />
          <h1>one</h1>
        </div>
    
     
       
   
  );
}

export default App;
