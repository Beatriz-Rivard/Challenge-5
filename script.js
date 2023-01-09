// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function (){
    
// this code will apply the past, present or future class to each time block by comparing the id to the current hour.
    var today = dayjs();
    $('#currentDay').text(today.format ('MMM,D,YYYY'));
    
    let currentTime = dayjs().hour();
    
    function myTime (timeBlock){

    if(currentTime > timeBlock) {
    eight.classList.remove('present')
    eight.classList.add('past')
      }

    else if (currentTime < timeBlock) 
    eight.classList.remove ('present')
    eight.classList.add('future')
    }
    
// change color of the time block doing it global.
    var eight =  document.getElementById('hour-8');
    var nine = document.getElementById('hour-9');
    var ten = document.getElementById('hour-10');
    var eleven = document.getElementById('hour-11');
    var twelve = document.getElementById('hour-12');
    var thirteen = document.getElementById('hour-13');
    var fourteen = document.getElementById('hour-14');
    var fifteen = document.getElementById('hour-15');
    var sixteen = document.getElementById('hour-16');
    var seventeen = document.getElementById('hour-17');
  
//---if currently time is greater than 8 
  if (currentTime > 8) {
    eight.classList.remove('present')
    eight.classList.add('future')
  }
// if currently time is less than 8
  else if (currentTime < 8) {
    eight.classList.remove('present')
    eight.classList.add('past')
  }
//---if currently time is greater than 9 
  if (currentTime > 9) {
   nine.classList.remove('present')
   nine.classList.add('future')
  }
// if currently time is less than 9
  else if (currentTime < 9) {
    nine.classList.remove('present')
    nine.classList.add('past')
  }

//---if currently time is greater than 10 
  if (currentTime > 10) {
   ten.classList.remove('present')
   ten.classList.add('future')
    }
// if currently time is less than 10
  else if (currentTime < 10) {
    ten.classList.remove('present')
    ten.classList.add('past')
  }

//---if currently time is greater than 11 
  if (currentTime > 11) {
    eleven.classList.remove('present')
    eleven.classList.add('future')
    }
// if currently time is less than 11
  else if (currentTime < 11) {
    eleven.classList.remove('present')
    eleven.classList.add('past')
  }

//---if currently time is greater than 12-- current time. 
 if (currentTime >= 12) {
  twelve.classList.remove('future')
  twelve.classList.add('present')
  }
//if currently time is less than 12-- current time.
 else if (currentTime < 12) {
  twelve.classList.remove('future')
  twelve.classList.add('past')
  }

//----if currently time is greater than 13 
  if (currentTime > 13) {
   thirteen.classList.remove('present')
   thirteen.classList.add('past')
  }
// if currently time is less than 13
 else if (currentTime < 13) {
   thirteen.classList.remove('present')
   thirteen.classList.add('future') 
  }

//---if currently time is greater than 14 
  if (currentTime > 14) {
  fourteen.classList.remove('present')
  fourteen.classList.add('past')
  }
// if currently time is less than 14
  else if (currentTime < 14) {
   fourteen.classList.remove('present')
   fourteen.classList.add('future')
  }

//---if currently time if greater than 15
  if (currentTime > 15) {
   fifteen.classList.remove('present')
   fifteen.classList.add('past')
  }
//if currently time is less than 15
  else if (currentTime < 15) {
  fifteen.classList.remove('present')
  fifteen.classList.add('future')
  }

//---if currently time if greater than 16
  if (currentTime > 16) {
   sixteen.classList.remove('present')
   sixteen.classList.add('past')
  }
// if currently time is less than 16
  else if (currentTime < 16) {
   sixteen.classList.remove('present')
   sixteen.classList.add('future')
  }

//---if currently time if greater than 17
  if (currentTime > 17) {
   seventeen.classList.remove('present')
   seventeen.classList.add('past')
  }
// if currently time is less than 17
  else if (currentTime < 17) {
  seventeen.classList.remove('present')
  seventeen.classList.add('future')
  }
    
    //
    // TODO: Add code to display the current date in the header of the page.
    //const id = document.getElementById('currentDay');
    //const currentDay = newDay().toCurrentDay();
    //id.textContent = currentDay
    //click events on the saved button.
$(".saveBtn").on("click", function () {
     
  console.log(this);//'this' represent the HTML DOM element.
  var text = $(this).siblings(".task").val();
  var time = $(this).parent().attr("id");

  localStorage.setItem(time, text);// Code will be saved in localStorage.
  window.alert('Saved Changes.');
  console.log('Click');
})


});


