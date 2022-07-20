

const form = document.getElementById('form1')




async function getAns() {
    // The `try` block executes the statements within it as usual.
    // If an exception is thrown, the statements defined in
    // the `catch` block will be executed.
    // Learn more here: https://javascript.info/try-catch
    try {
      const response = await fetch("http://localhost:8000/")
      // If the response is not 200 OK...
      if (!response.ok) {
       
        return document.getElementById('text1').textContent ="err!";
  
      }



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

  
      const jsons = await response.json();
      console.log(jsons)
      return document.getElementById('text1').textContent =jsons;
  
    } catch (err) {
      console.log(err)
      return document.getElementById('text1').textContent ="err!";
  
     
    }
  }
  form.addEventListener('click', getAns())
  
  
  

/*
$("#form").submit(function(e){
    e.preventDefault();

    let query=$("search").val();
    const API_KEY='5e91d403e1d3021c6fc622177c77e3eb4948057a6d4c1589b6a25d7494aacfeb';
let url1='https://serpapi.com/search.json?engine=google&q=Coffee&api_key=586cc19d5a58e4412285a49a91d32a736651af00d0a7eb92a67f0a6ffc748455'

    let url='http://api.serpstack.com/search?access_key='+API_KEY+'&type=web&query='+query;

    console.log(url);

$.get(url, function(data){
   console.log(data);
})

});
*/


//result.js
let qu=document.querySelector('.query');
let btns=document.querySelector('.btn');

btns.onclick=function(){
    let getUrl='https://www.google.co.uk/search?q='+
    qu.Value;
     window.open(getUrl, '_self');

}
