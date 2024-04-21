// --------- validating time duration ---------//
// retrieve user input 
var durationTimeElement = document.getElementById("durationTime");
var revTimeInElement = document.getElementById("revTimeIn").nextElementSibling.textContent.trim();
var revTimeOutElement = document.getElementById("revTimeOut").nextElementSibling.textContent.trim();

var durationTime = parseFloat(durationTimeElement.textContent.trim());

// parse input values into Date objects
var revTimeInParts = revTimeInElement.split(':');
var revTimeOutParts = revTimeOutElement.split(':');

// Constructing Date objects with today's date and the parsed time
var today = new Date();
var revTimeIn = new Date(today.getFullYear(), today.getMonth(), today.getDate(), parseInt(revTimeInParts[0]), parseInt(revTimeInParts[1]));
var revTimeOut = new Date(today.getFullYear(), today.getMonth(), today.getDate(), parseInt(revTimeOutParts[0]), parseInt(revTimeOutParts[1]));

// calculate duration in ms + min
var durationMilliseconds = revTimeOut - revTimeIn;
var durationMinutes = durationMilliseconds / (1000 * 60);
var popup = document.getElementById("myPopup");

// function popup
function timeError() {
    popup.classList.toggle("show");
}

//compare calculated duration with user input while they're putting in input
// if there's a valid date in revtimein and revtimeout AND durationMinutes = durationTime
    // black text
// else if there's an invalid date in retimein OR revtimeout OR duratoinMinutes != durationTime
    // red text
function errorColor() {
    if (durationMinutes == durationTime || (durationTime == 0 && (isNaN(revTimeIn.getTime()) || isNaN(revTimeOut.getTime())))) {
        durationTimeElement.style.color = "black";
        popup.classList.toggle("hide");
    } else {
        durationTimeElement.style.color = "red";
    }
}

// checking without live input
if (durationMinutes == durationTime || (durationTime == 0 && (isNaN(revTimeIn.getTime()) || isNaN(revTimeOut.getTime())))) {
    durationTimeElement.style.color = "black";
    popup.classList.toggle("hide");
} else {
    durationTimeElement.style.color = "red";
}

// Questions about Error 1:
// are there going to be other types of forms where no edits will be currently made and errors need to be checked?
// other possible solution: automatically calculating time duration
//
//--------------- checking input for supervising physician ------------------// 
var fieldPopup = document.getElementById("fieldPopUp");

function fieldError(){
    fieldPopup.classList.toggle("show");
}

 // Get the input field element
 var inputField = document.getElementById("supPhyInput");
 // Get the text content of the input field (inside the <a> tag)
 var inputValue = inputField.querySelector("a").textContent.trim();
 
 function checkInput() {
    // Change text color of the <td> element if there's content
    if (inputValue !== "") {
        var linkElement = document.querySelector("#supPhyInput a");
        // Change the color of the <a> element
        linkElement.style.color = "red"; 
        linkElement.removeAttribute("href");
    } else {
        inputField.style.color = ""; // Reset text color if empty
        fieldPopup.classList.toggle("hide");
    }
}

// checking without live input
if (inputValue !== "") {
    var linkElement = document.querySelector("#supPhyInput a");
    linkElement.style.color = "red"; 
    linkElement.removeAttribute("href");
} else {
    inputField.style.color = ""; 
    fieldPopup.classList.toggle("hide");
}

//--------------- validating treatment plan target date ------------------// 

var treatmentPopup = document.getElementById("treatmentPopup");
var checkDateElement = document.getElementById("treatPlanTargetDate");
var checkDate = checkDateElement.innerText.trim();


var dateOfVisitCell = document.getElementById("dateOfVisit").nextElementSibling;
var originalDate = dateOfVisitCell.textContent.trim();

function formatDate(dateString) {
    // Split the date string into day, month, and year
    var parts = dateString.split("/");
    var day = parseInt(parts[1]);
    var month = parseInt(parts[0]);
    var year = parseInt(parts[2]);

    // Return the formatted date in the format mm/dd/yyyy
    return month.toString().padStart(2, '0') + '/' + day.toString().padStart(2, '0') + '/' + year;
}

originalDate = formatDate(originalDate);
checkDate = formatDate(checkDate);

function treatmentError(){
    treatmentPopup.classList.toggle("show");
}

function checkTreatmentDate(){
    if (originalDate !== checkDate) {
        checkDateElement.style.color = "red";
    } else {
       checkDateElement.style.color = "black";
    }
}

if (originalDate === checkDate) {
    checkDateElement.style.color = "red";
} else {
   checkDateElement.style.color = "black";
   treatmentPopup.classList.toggle("hide");
}

// Questions:
// - is this a user input or automatically filled in by the computer?
// - are there times when this isn't 90 days from the date of service?
// should be greater than 0, and can't be more than 90

//--------------- missing target date ------------------// 

function showTargetDateError(show) {
    var targetDatePopUp = document.getElementById("targetDatePopUp");
    if (show) {
        targetDatePopUp.classList.add("show");
    } else {
        targetDatePopUp.classList.remove("show");
    }
}

function checkTargetDateInput() {
    var targetDateContent = document.getElementById("targetDateContent");
    var errorImage = document.getElementById("errorImage"); // Get reference to the image element
    
    if (targetDateContent.textContent.trim() === "") { // Check if the target date is empty
        // Show the image if the target date is empty
        errorImage.style.width = '11px'; // Adjust width as needed
        errorImage.style.height = '9px'; // Adjust height as needed
        errorImage.style.display = 'inline'; // Display the image
    } else {
        // Hide the image if the target date is not empty
        errorImage.style.display = 'none';
    }
}



// same function for testing outside of function
var targetDateContent = document.getElementById("targetDateContent");
var errorImage = document.getElementById("errorImage"); // Get reference to the image element

if (targetDateContent.textContent.trim() === "") { // Check if the target date is empty
    // Show the image if the target date is empty
    errorImage.style.width = '11px'; // Adjust width as needed
    errorImage.style.height = '9px'; // Adjust height as needed
    errorImage.style.display = 'inline'; // Display the image
} else {
    // Hide the image if the target date is not empty
    errorImage.style.display = 'none';
}


// Questions:
// - is this user input or automatically filled in by the computer?
// - for this to be more efficient, this needs to be equal to treatment plan target date? can the computer automatically fill it in or is the user doing this?
// i'm also assuming this date would be a certain time after the start date?
// whereever the date goes is kind of a guess on the html part - it depends on if its user input (in which case it will be difficult to test) or if it's computer auto math

//--------------- missing target date ------------------// 





// Questions
// how many objectives are there usually, or is it a standard 2?
// general question: for the errors, do you want an error when it's empty and not just wrong if applicable?
//  amount of objectives change - measurable goals
// can be an overall reminder 
// can be a short paragraph text
// essential elements for description: can be selected and copied - cheat sheet 
// sigantures - gaurdian if under 13 y/o
// - how would we use the changes we have live? - maybe open up a new tab and validate it then? if it can rerender - new tab that takes the data and validates it - more as an auditing tool
// if there's a way for me use this to validate other things - multiple buttons that would specify which data to validate triggered to the service - treatment plan, progress note, mental health treatment plan (can be expanded)
// 
// Assumptions
// I'm assuming you want this for both the objectives?
