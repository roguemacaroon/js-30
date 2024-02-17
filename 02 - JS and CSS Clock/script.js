//variables that reference the doc
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

//function of setDate
function setDate() {
    //variable of new date
    const now = new Date();

    //seconds first --------
    //variables for seconds hand and degrees
    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;
    //to make the second hand move
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    //mins second ----------
    //variables for mins hand and degrees
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    //to make the min hand move
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    

    //hours third ------------
    //variables for hour hand and degrees
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    //make the hour hand move
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    
};
//this is telling the set interval to run every 1000 ms which is every second
setInterval(setDate, 1000);



//------------notes----------------------------------------
//explanation of the math for mins/seconds/hour hands

// Each 60 second prepares minute hand for its next position, and each 60 minutes tick does same for the hour hand.

//Assume that time is 17:17:41

//Calculate how much degrees minute hand make right now

//minsDegrees = (17/60) * 360 = 102

//Plus;

//Calculate how much degrees the elapsed seconds made our minute hand made;

//theDegreeFromSeconds = (41/60) *6= 4.1

//minDegree = 102 + 4.1 = 106.1

//We multiply by 6 because each elapsed second made 6° on clock btw. It is same for the hour degree calculation.