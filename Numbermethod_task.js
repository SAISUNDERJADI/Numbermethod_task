// To convert 24 hr time to 12hr time


function convertTo12HourFormat(time24) {
    let [hours, minutes] = time24.split(':').map(Number);
    const suffix = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${hours}:${String(minutes).padStart(2, '0')} ${suffix}`;
}

// Examples
console.log(convertTo12HourFormat("14:30")); // "2:30 PM"
console.log(convertTo12HourFormat("00:15")); // "12:15 AM"
console.log(convertTo12HourFormat("12:00")); // "12:00 PM"
console.log(convertTo12HourFormat("09:05")); // "9:05 AM"


let hor=new Date()
let hrs=hor.getHours()
function hors(){
    if(hrs>12){
        console.log(hrs-12)
    }
    else{
        console.log(hrs)
    }
}
hors(hrs)

// OTP

function generateOTP() { 
    digits = '0123456789'; 
    OTP = ''; 
   len = digits.length 
   for ( i = 0; i < 6; i++) { 
       OTP += digits[Math.floor(Math.random() * len)]; 
   } 
   return OTP; 
} 
console.log("OTP of 6 digits: ") 
console.log(generateOTP());


function otp(){
    console.log((Math.random(otp)*1000000).toFixed(0))
}
otp(otp)


// DayOfWeek

function getDayOfWeek(dayNumber) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return (dayNumber >= 0 && dayNumber <= 6) ? daysOfWeek[dayNumber] : 'Invalid input';
}

// Examples:
console.log(getDayOfWeek(0)); // Sunday
console.log(getDayOfWeek(3)); // Wednesday
console.log(getDayOfWeek(6)); // Saturday
console.log(getDayOfWeek(7)); // Invalid input


// OR

let today=new Date
let day=today.getDay()
function days(day){
    if(day==1){
        console.log("mon")
    }
    
    else if(day==2){
        console.log("tues")
    }

    else if(day==3){
        console.log("wed")
    }

    else if(day==4){
        console.log("thurs")
    }

    else if(day==5){
        console.log("fri")
    }

    else if(day==6){
        console.log("sat")
    }
    else{
        console.log("sun")
    }
}
days(6)