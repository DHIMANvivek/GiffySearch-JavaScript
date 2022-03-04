/* 1. Grab the input value */

var gifyContainer = document.getElementsByClassName('js-container');
document.querySelector(".js-go").addEventListener('click',function(){

  var input = document.querySelector("input").value;
cleanContainer();
    //pushToDOM(input);
    ajax(input.value);

});

document.querySelector(".js-userinput").addEventListener('keyup',function(e){

   var input = document.querySelector("input").value;
  console.log(input);

  // if the key ENTER is pressed...
  if(e.which === 13) {
  	cleanContainer();
    //pushToDOM(input);
    ajax(input.value);
  }

});

/* 2. do the data stuff with the API */
function ajax(input){
var url = "https://api.giphy.com/v1/gifs/search?q="+input+ "&api_key=D68yZLmEiqs3VXjlhy8JxPoqy4Qeo8fN";

// AJAX Request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load',function(e){

  var data = e.target.response;
  pushToDOM(data);

});
}


/* 3. Show me the GIFs */

function pushToDOM(input) {

      var gifData = JSON.parse(input);
    //console.log(gifData);

    var gifUrls = gifData.data;
    gifUrls.forEach(function (gif) {
        console.log(gif.images.fixed_height.url);
 //var container = document.querySelector(".js-container");
        var url = gif.images.fixed_height.url;
        gifyContainer[0].innerHTML += "<img src=\""+ url +"\" class =\"container-image\">";
    });

    // var gifyContainer = document.getElementsByClassName('gify-container');
    // gifyContainer[0].innerHTML = "<img src=\""+ gifUrl +"\" >";
}

  function cleanContainer() {

    var container = document.querySelector(".js-container");
   
    container.innerHTML = "";
   
}

