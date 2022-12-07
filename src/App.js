import react, {useState} from "react"
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from 'reactstrap';
import {FormGroup} from 'reactstrap';
import {Label} from 'reactstrap';
import {Button} from 'reactstrap';
import Table from './Table';


function App() {



  const [name, setName]=useState("")
  const [data, setData]=useState()
  const [countries_data, setCData]=useState([])
  const handleClick=()=>{
  fetch(`https://restcountries.com/v3.1/name/${name}`)
  
  .then((res)=>{
    return  res.json()
  }).then((data)=>{
    console.log("promise",data)
   setData(data)
   countries_data.push(data);
  })
  console.log("check second",data)
  
  
   setCData(countries_data)
   console.log("working?",countries_data);
  }



  return (
    <div className='container'>
    <Form>
  <FormGroup>
    <Label for="country_name">
      Country
    </Label>
    <input
      id="country"
      name="country_name"
      placeholder="Enter Country Name"
      type="text"
      onChange={(e)=>setName(e.target.value)}
    />
  </FormGroup>
  <Button onClick={handleClick}>
    Submit
  </Button>

</Form>
<Table data={countries_data}/> 
  </div>
     
  );
}

export default App;
