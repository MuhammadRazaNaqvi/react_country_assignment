import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from 'reactstrap';
import {FormGroup} from 'reactstrap';
import {Label} from 'reactstrap';
import {Button , div} from 'reactstrap';


var country_name;
var names;
var countries_data=[];
var count=1;

    function input(){
      console.log("working?")

    country_name = document.getElementById('country').value;

    console.log("The country selected is:", country_name);
    console.log("Type is:",typeof (country_name));
    getData();
}
async function getData() {
    let url = fetch(`https://restcountries.com/v3.1/name/${country_name}`);
    url.then((response) => {

        return response.json();
    }).then((data) => {
        console.log("Data is:",data)

        console.log(data[0].flags)

        console.log("Languages are:", Object.values(data[0].languages))

        names = data[0].name.nativeName
        console.log("Pathan")
        console.log("Names are:",Object.values(names))
        let text = ""

        for (const property in names) {

            text += `${names[property].official}` + "\n"
            // text += `${property}: ${names[property].official}`
        }
        console.log("Names in language are:",text);

        let country_data = {
          id:count,
          name: data[0].name.common,
          common_name: data[0].name.common,
          official_name: data[0].name.official,
          languages: Object.values(data[0].languages)
        }
        count+=1;
        countries_data.push(country_data);
        console.log(countries_data);
        onLoadData(countries_data)



    }).catch((error) => {
        console.log(error)
    })
}


function onLoadData(countries_data) {

  document.getElementById("tableBody").innerHTML = createTable(countries_data);

  // var tableBody = document.getElementById("body");
  // var res = createTable(people);
  // tableBody.innerHTML = res;
}

function createTable(countries_data) {
  console.log("Table Data")
  console.log(countries_data)

  var row = "<tr>";
  countries_data.forEach((value) => {
    row += `<td>${value.id}</td>`;
    row += `<td>${value.common_name}</td>`;
    row += `<td>${value.official_name}</td>`;
    row += `<td>${value.languages}</td>`;
    row += `<td><button type="button"  id="edit" onclick="edit(${value.id})" class="btn btn-warning">View</button></td></tr>`;
  });
  return row;
}



function App() {
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
    />
  </FormGroup>
  <Button onClick={input}>
    Submit
  </Button>
</Form>
  </div>    
  );
}

export default App;
