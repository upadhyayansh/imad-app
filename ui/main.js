//counter code
var button=document.getElementById('counter');
var counter=0;
button.onclick=function(){
  //make the request to the end point  
  
  //capture the response in the variable
  
  //render the variable in the correct span
  counter=counter+1;
  var span=document.getElementByid('count');
  span.innerHTML=counter.toString();
};