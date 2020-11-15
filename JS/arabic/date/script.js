let theDate = new Date();
console.log(theDate);

theDate = new Date(10000);
console.log(theDate);

theDate = new Date("October 25, 1982 12:20:50");
console.log(theDate);

theDate = new Date(1982,10,25,11,20,30,25);
console.log(theDate);

theDate = new Date("10/25/1982 10:10:30");
console.log(theDate);


theDate = new Date("1982-03-21 09:10:03+02:00");
console.log(theDate);

theDate = new Date();
console.log(theDate);

console.log("Today is: "+theDate.getDate());
theDay();
console.log(theDate.getFullYear());
console.log(theDate.getHours());
console.log(theDate.getMonth());
console.log(theDate.getSeconds());
console.log(theDate.getMilliseconds());
console.log(theDate.getTime());
console.log(Date.now());
console.log(Date.parse(1980));
// الفرق بين التوقيت المحلي والتوقيت العالمي بالدقيقة
console.log(theDate.toDateString());
console.log(theDate.toTimeString());

function theDay(){
    switch(theDate.getDay()){
        case 0:
            console.log("Sunday");
            break;
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        default:
            console.log("Day is not correct")
    }
}