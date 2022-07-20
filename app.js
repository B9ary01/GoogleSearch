const express = require('express')
const app = express()


app.use(express.json());
const datas=[

   
    "https://www.northeastern.edu/graduate/blog/most-popular-programming-languages/",


    "https://en.wikipedia.org/wiki/List_of_programming_languages",



    "https://www.tiobe.com/tiobe-index/"


]
app.get('/data',(req,res)=>{

    res.send(datas)
})

app.get('/',(req,res)=>{

// make the http GET request to VALUE SERP
axios.get('https://api.valueserp.com/search', { params })
.then(response => {

    // print the JSON response from VALUE SERP
    res.send(response);

  }).catch(error => {
// catch and print the error
console.log(error);
})
    
})

const axios = require('axios');

// set up the request parameters
const params = {
api_key: "380D42B196984FD3A98C8400374517CB",
  q: "hero",
  include_html: "false",
  page: "10"
}

// make the http GET request to VALUE SERP
axios.get('https://api.valueserp.com/search', { params })
.then(response => {

    // print the JSON response from VALUE SERP
    console.log(JSON.stringify(response.data, 0, 2));

  }).catch(error => {
// catch and print the error
console.log(error);
})

app.listen(8000,()=>{
    console.log("starting server on port 8000")
})