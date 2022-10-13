//step 01:create an XHR object
var request=new XMLHttpRequest();
//step 02:initiate a request
request.open("GET","https://restcountries.com/v2/all");
//step 03 :sending the request
request.send();
//step 04 : once the data successfully loaded from the server
request.onload=function(){
   var result=JSON.parse(request.response);
   var countriesInAsia=result.filter((ele)=>ele.region==="Asia").map((ele)=>ele.name);
   console.log(countriesInAsia);
}