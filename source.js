// //var name=prompt("enter your name","name");
var date=new Date;
var weather=require('weather-js');
// var btn = document.querySelector('#btn');
// var profile = document.querySelector('#profile');
// btn.addEventListener('click', function(event){
//     if (profile.style.display == "") {
//          profile.style.display = "none";
//         btn.innerHTML = "SHOW PROFILE";
//      document.getElementById("profile").innerHTML=date;
//     }else{
//      profile.style.display="";
//      btn.innerHTML="HIDE PROFILE";
//     }
document.getElementById('weather').innerHTML=weather;
document.addEvenListenergetElementById('date').innerHTML=date;
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

    //  "hello " + name + ". today is "+date+". the weather is "
    // +weather;
    // }
    // else{
    //     profile.style.display="";
    //     btn.innerHTML="Hide Profile";
    // }
// }
// );
