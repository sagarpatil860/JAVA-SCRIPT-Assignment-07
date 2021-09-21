const slide=[ "apple.jpg","bat.jpg","cat.jpg"];
const para=[
    "BMW ,Bayerische Motoren Werke AG, commonly referred to as BMW , is a German multinational corporate manufacturer of luxury vehicles and motorcycles headquartered in Munich, Bavaria, Germany."
," The Volvo Group was founded in 1927 as a subsidiary of the ball bearing manufacturer SKF. When AB Volvo (now a separate company) was introduced on the Stockholm stock exchange in 1935"
,"Volkswagen shortened to VW is a German motor vehicle manufacturer headquartered in Wolfsburg, Lower Saxony, Germany. Founded in 1937"
]
let i=0;
document.getElementById("pre").addEventListener("click", funpre);
document.getElementById("next").addEventListener("click", funnext);

console.log(i);
function funpre(){
   
    console.log(i);
    console.log("in prev");
    --i;
    console.log(i);
    if (i<0) i=2;
document.getElementById("slideshow").src=slide[i];
document.getElementById("maincontent").innerHTML=para[i];

}

function funnext(){
    console.log(i);                     
    console.log("in next");
    ++i;
    if (i>=slide.length) i=0;
document.getElementById("slideshow").src=slide[i];
document.getElementById("maincontent").innerHTML=para[i];

}