
$("#form").submit(function(e){
    e.preventDefault();

    let query=$("search").val();
    const API_KEY='2ab2f6d53a793e6228636910eca2936081ad428d25335fdfe26b06d3d17a84bc';

    let url='http://api.serpstack.com/search?access_key='+API_KEY+'&type=web&query='+query;

    console.log(url);

$.get(url, function(data){
   console.log(data);
})

});
