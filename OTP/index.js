function vv(a,b,c){
return [a,b,c];
}
const y = vv(6,7,9);
console.log(y);

var arryyy = ["a","b","c","d","e"];
 const newarr = arryyy.forEach((val)=>{
    console.log(val);
 });

 var arr = [1,2,3,4,5,6,7];
 var newmap = arr.map((val)=>{
return val;
 });
console.log(newmap);

let variables = ["a","b","c","d","m","o","3","10"];
const res = variables.filter((val) => val == "a" || val == "c" || val=="10");
console.log(res);


var opp = ["a","b","c","a","g","n","m"];
const resulty = opp.find((val)=> val == "a");
console.log(resulty);

const objectss = {
    name:"Zawwar",
    age:19,
    City:"Karachi",
    Country:"pakistan",
    Qualification:"Software Engineer",
}
// console.log(objectss.City);
// objectss['City']

/// freeze sa kisi bhi object ki value change nahi hogia jasa agar humna obj ma kisi age:18 rakha ha aur hum cha raha ha ka age:19 hogaye.

Object.freeze(objectss);
objectss.age = 29;

// fs.appendFile("fs.txt","Hi Kesey hoo",function(err){
// if(err){
//     console.log(err);
// }else{
//     console.log("Successfully your file created!");
// }
// });

function shade(e){
  
    if(e.key == "/"){
        uppolods();
    }else{
        downloas();
    }
}
shade();

function uppolods(){
    document.getElementById('box').style.backgroundColor = red;
}
function downloas(){
    document.getElementById('box').style.backgroundColor = blue;
}