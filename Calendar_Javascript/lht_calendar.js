"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Tutorial Case

   Author: Louisgene Guillaumette
   Date: 4/10/23 

   Filename:   lht_calendar.js  

   Function List:
   createCalendar(calDate)
      Creates the calendar table for the month specified in the
      calDate parameter. The current date is highlighted in 
      the table.

   calCaption(calDate)
      Writes the caption of the calendar table

   calWeekdayRow()
      Writes the weekday title rows in the calendar table

   daysInMonth(calDate)
      Returns the number of days in the month from calDate

   calDays(calDate)
      Writes the daily rows in the calendar table, highlighting calDate
	
*/

// Set the date to displayed in the calendar
//var thisDay = new Date("August 24, 2018");
var thisDay = new Date();


// Write the calendar table to the element with the id="calendar"
document.getElementById("calendar").innerHTML = createCalendar(thisDay);

// Function to generate the calendar table
function createCalendar(calDate){
   var calendarHTML = "<table id='calendar_table'>";
 calendarHTML += calCaption(calDate);
 calendarHTML += calweekdayRow();
 calendarHTML += calDays(calDate);
 calendarHTML += "</table>";
   return calendarHTML;
}
 
// function to write the calendar caption
function calCaption(calDate) {
// monthName Array contains the list of month names
   var monthName = ["January", "Febuary", "March", "April","MAy","June", "July",
                    "August", "September", "October", "November","December"];
   //Determine the current month
   var thisMonth = calDate.getMonth();

   //Determine the current year
   var thisYear = calDate.getFullYear();

   // write the caption
   return "<caption>" + monthName[thisMonth] + " " + thisYear +"</caption>";
} 

// function to write a table row of weekday abbreviation
function calweekdayRow() {
   // array of weekday abbreviation
   var dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
   var rowHTML = "<tr>";

   // Loop through the dayName array

for (var i = 0; i < dayName.length; i++){
    rowHTML += "<th class= 'calendar_weekday'>" + dayName[1] + "</th>";
}
rowHTML += "</tr>";
return rowHTML;
}


// function to calculate the number of the days in the month
function daysInMonth(calDate) {
   //array of days in each month
   var dayCount = [31,28,31,30,31,30,31,31,30,31,30,31];

   //Extract the four digit year and mont value
   var thisYear = calDate.getFullYear();
   var thisMonth = calDate.getMonth();

if (thisYear % 4 === 0) {
  if ((thisYear % 100 != 0) || (thisYear % 400 ===0)) {
      dayCount[1]= 29;
   } 

}

   // return the number of days for the current month
   return dayCount[thisMonth];

}

// function to write table rows for each day of the month
function calDays(calDate){
// Determine the starting day of the month
   var day = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
   var weekDay = day.getDay();

// Write blank cells preceding the starting day
   var htmlCode = "<tr>";
for (var i =  0; i < weekDay; i++) {
      
      htmlCode += "<td></td>"; 
}
   
//Write cells for each day of the month
var totalDays = daysInMonth(calDate);

var highlightDay = calDate.getDate();

for (var i = 1; i <= totalDays; i++){
   day.setDate(i);
   weekDay = day.getDay();
  
  if (weekDay === 0) htmlCode += "<tr>";
  if (i === highlightDay) {
     htmlCode += "<td class='calendar_dates' id='calendar_today'>" + i + dayEvent[i] + "</td>";
  } else{
   htmlCode += "<td class='calendar_dates'>" + i + dayEvent[i] + "</td>";
   }
   if (weekDay === 6) htmlCode += "</tr>";

    }

 return htmlCode;
   
}

