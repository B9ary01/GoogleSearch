
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
   "https://www.three.co.uk/"]
    
     
     let btns=document.getElementById('btn3');
     
     btns.onclick=function(){
       
      let find=  Math.floor(Math.random()*datas.length);
     
          window.open(datas[find], '_blank');
 
     }
     