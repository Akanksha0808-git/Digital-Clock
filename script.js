var hours = document.getElementById("hours")
var minute = document.getElementById("mins")
var second = document.getElementById("secs")
var AMPM = document.getElementById("ampm")

var wakeuptext =document.getElementById("clockmessages")

 function startClock(){
     let time = new Date();

     let hrs = time.getHours();
     let mins = time.getMinutes();
     let secs= time.getSeconds();
     
     let period = "AM";
    if (hrs === 0) {
      hrs = 12;
    } else
    if (hrs >= 12) {
      hrs -= 12;
      period = "PM";
    }
   //  console.log(`Time : ${hrs}:${mins}:${secs}`);
    hours.innerHTML=hrs
    minute.innerHTML=mins
    second.innerHTML=secs
    AMPM.innerHTML=period
   //   wakeuptext.innerHTML="hello"
    
    let morningMessage = "Grab Some Healthy Breakfast!!!";
    let afternoonMessage = "Let's Have Some Lunch !!";
    let eveningMessage = `Stop Yawning, Get Some Tea..
          It's Just Evening!`;
    let nightMessage = "Close Your Eyes And Go To Sleep";
  
  
    if (period === "AM"&& hrs>=1 && hrs <= 12) {
      document.getElementById("clockmessages").innerHTML = morningMessage;

    }
    else if (period === "PM" && (hrs === 12 || ( hrs>=1  && hrs <= 3))) {
         document.getElementById("clockmessages") .innerHTML = afternoonMessage;
        }
    
     else if (period === "PM" && 3 <= hrs && hrs <= 7) {
      document.getElementById("clockmessages") .innerHTML = eveningMessage;
     }
       
     else {
      document.getElementById("clockmessages").innerHTML = nightMessage;
        }

 }
 setInterval(()=>{
     startClock();
    
     },1000)

  

     var scheduleTime = document.getElementById("scheduleTime");
     var greet=document.getElementById("box1")
     let photo =document.getElementById("photo")
     var time =document.getElementsByClassName("wakeup")
     let select=document.getElementsByClassName("select")
     let flag =false;


     function Alarm  () {
      console.log("alarm call")
   let morningText = "Good Morning AK !! Wake Up !!";
    let afternoonText = "Good Afternoon !! Take Some Sleep";
    let eveningText = "Good Evening !!";
    let nightText = "Good Night!! sweet dreams!!"; 
     
         let date = new Date();
         let hrs = date.getHours();
        console.log(hrs)
       
        console.log(select[1].value)
        console.log(select[2].value)
        console.log(select[3].value)
      
         if(parseInt(select[0].value)===hrs)
         {console.log("hwllo morning")
            greet.innerHTML= morningText;
           photo.src="./img/morning.jpg"
            
           
         }
         else if(parseInt(select[1].value)===hrs)
         {
            greet.innerHTML=afternoonText ;
            photo.src="./img/lunch.jpg"
            console.log("hwllo after")
            flag = !flag;
         }
         
         else if(parseInt(select[2].value)===hrs)
         {
            greet.innerHTML= eveningText;
            photo.src="./img/afternoon.jpg"
            console.log("hwllo even")
            flag = !flag;
         }
         
        else if(parseInt(select[3].value)===hrs)
         {
            greet.innerHTML= nightText;
            photo.src="./img/night.jpg"
            console.log("hwllo night")
            flag = !flag;
         }
         
    }
    function setAlarm() {
      
      var x1 = select[0].selectedIndex;
      var y1 = select[0].options;
      var x2 = select[1].selectedIndex;
      var y2 = select[1].options;
      var x3 = select[2].selectedIndex;
      var y3 = select[2].options;
      var x4 = select[3].selectedIndex;
      var y4 = select[3].options;
      const alm = setInterval(() => {
        Alarm();
        if (flag) {
          clearInterval(alm);
          flag = !flag;
        }
      }, 1000);
      console.log("hello")
      scheduleTime[0].innerHTML = "Wake Up Time :" + y1[x1].text; //temp
      scheduleTime[1].innerHTML = "Lunch Time : " + y2[x2].text; //temp
      scheduleTime[2].innerHTML = "Nap Time :" + y3[x3].text; //temp
      scheduleTime[3].innerHTML = "Night Time :" + y4[x4].text; //temp
    }
   
