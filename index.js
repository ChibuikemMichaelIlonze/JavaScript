
 function maps(x){
    return x.map(n => n * 2);
  }



let hour=19
if (hour >=24 && hour<12){
    console.log("Good Morning!")
}

else if (hour >=12 && hour<18){
    console.log("Good Afternoon!")
}
else (hour >=18 && hour<24)
    console.log("Good Evening!")


for(let i=0; i<5; i++){
    if( i % 2 == 0)
    console.log(i)
}
console.log(isLandscape(1000, 200));
function isLandscape(width,height) {
    return (width>height);
}
const output = fizzBuzz(7);
console.log(output);

function fizzBuzz(input){
if(typeof input!== 'number')
 return'not a number';
 
 if((input % 3==0)&&(input % 5==0))
 return 'fizzBuzz'

 if (input % 3 == 0)
return 'fizz';

if (input % 5==0)
return 'Buzz';


return input;
}
carSpeed(134)

function carSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;
    if (speed < speedLimit + kmPerPoint)
    console.log('Okay')
    else {
        const points = (speed-speedLimit)/kmPerPoint;
        if (points>=12)
        console.log("license suspended");
        else 
        console.log("Points",points);
    }
}

showNumbers(10)

function showNumbers(limit){
    for (let i=0; i<=limit; i++){

        const oddEven = (i % 2===0)? "EVEN" : "ODD"
        console.log('oddEven')
    }
}

function greet(name){
    console.log("Hello,"+ name);
}
greet("April");
greet ("May");

var likes = true;
var retweet = true;
var following = true;
var lrf= likes===retweet===following;
console.log(lrf)

function someName(name){
    var count = "number";
    var th = count;
    if (th===1);
    console.log("st");
    for (let count=1; count<=1; count++ )
    console.log("This is the "+ count + th +" student:  " +name);
}
someName("Kosi");
someName("Kodili")



console.log("Hello World");


function test(name, age){
    console.log(name);
    console.log(age);

}
test(
    "Emeka", 30
)

function simpleMultiplication(number) {
    // your code........
  if (number%2 === 0){
    return number*8;
    
  }
  else (number%2 != 0)
    return number*9;
  
}
const century = year => Math.ceil(1998/100)


const areaOrPerimeter = function(l , w) {
    // Return your answer
    if (l===w){
      return l*w;
    }
    else return l+l+w+w;
  };
  areaOrPerimeter (2,4);
    

  



  function areaOrPerimeter1(l , w) {
    return l===w ? (l*w) : (l+l+w+w);
    // Return your answer
 }



 const areaOrPerimeter2 = (l, w) => l === w ? l * w : 2 * l + 2 * w


 function fakeBin(x){
    x=[];
    if (x<5){
      return 0;
    }
    else return 1;
  
  }
  function numberToString1(num) {
    return num.toString();
  }

  function numberToString(num) {
    return "GEN"+num;
  }

  // Smash Words
function smash (words) {
    "use strict";
    return words.join(' ');
};
 