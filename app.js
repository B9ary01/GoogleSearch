const express = require('express')
const app = express()


app.use(express.json());

const datas=[
   

    "https://en.wikipedia.org/wiki/List_of_programming_languages",
   " https://www.amazon.co.uk/",
   "https://www.ebay.co.uk/",
   "https://www.youtube.com/",
   "https://www.linkedin.com/",
   "https://www.getfutureproof.co.uk/",
   "https://www.bbc.co.uk/news",
   "https://www.alibaba.com/",
   "https://www.ucas.com/",
   "https://www.three.co.uk/"


]
app.get('/data',(req,res)=>{

    res.send(datas)
})

app.listen(8000,()=>{
    console.log("starting server on port 8000")
})