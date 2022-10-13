//step 01:create an XHR object
var request=new XMLHttpRequest();
//step 02:initiate a request
request.open("GET","https://restcountries.com/v2/all");
//step 03 :sending the request
request.send();
//step 04 : once the data successfully loaded from the server
request.onload=function(){
   var result=JSON.parse(request.response);
   var countriesWithLess=result.filter((ele)=>ele.population<200000).map((ele)=>ele.name);
   console.log(countriesWithLess)

   
  // var result1=popu.map((ele)=>`${ele.name}`);
 //  console.log(result1);
 //2.print the names of those countires which belongs to Europe region
   //can also written as
 //  var popu=result.filter((ele)=>ele.region==="Europe").map((ele)=>`${ele.name}`);;

//3.find the sum of the total population of all the countires using reduce function
//let total=result.reduce((acc,cv)=>acc+cv.population,0)
//console.log(total)
   }
