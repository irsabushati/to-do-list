// Using the date JavaScript funtion to read the current time and greet the user based on it. 
const actualDate = new Date();
const currentHour = actualDate.getHours();
    /*console.log(currentHour);*/

let greet = document.getElementById("greetingText");

// Checks the current hour to determine what phase of the day it is in order to greet the user.
if (currentHour < 12){
    greet.innerHTML = "Good morning Irsa !";
} else if (currentHour < 18) {
    greet.innerHTML = "Good afternoon Irsa!";
} else {
    greet.innerHTML = "Good evening Irsa !"; 
}

let todotext = document.getElementById("todo-text");

// Declaring a counting variable for the sum of tasks and another counting variable for the sum of 
// done tasks.
let count = 0;
let countDone = 0;

let numberOfTasks = document.getElementById("totalTasks");
let numberOfDone = document.getElementById("totalDoneTasks");

// Default counters values.
numberOfTasks.innerHTML = "No tasks yet.";
numberOfDone.innerHTML = "No tasks done.";

//JavaScript event when enter is pressed. 
todotext.addEventListener("keypress", (event) => {
    if(event.key == "Enter"){

        // Creating new list element that contains the input text when not empty. 
        if(todotext.value != "") {
            let ul = document.getElementById("u-list");
            let newelement = document.createElement("li");

            newelement.innerHTML = todotext.value;
            ul.appendChild(newelement);
            
            // Each added task is calculated into a sum of total tasks active at the moment. 
            count++;
            numberOfTasks.innerHTML = count + " total task/-s.";

            //The input is emptied as soon as enter is pressed, in order to insert another task through its' field.
            todotext.value = "";

            // To-do task turns to green when mouse is over. 
            newelement.addEventListener('mouseover', (event) => {
                newelement.style.color = "rgb(141,187,127)";
            });

            // To-do task turns to normal (white) when mouse is out. 
            newelement.addEventListener('mouseout', (event) => {
                newelement.style.color = "rgb(245, 244, 244)";
            });

            // To-do gets done when clicked (through a line-through).
            newelement.addEventListener('click', (event) => {
                newelement.style.textDecoration = "line-through";

                // Done tasks counter increases with one when a task is marked as done.
                countDone++;
                numberOfDone.innerHTML = countDone + " task/-s done.";
            });

            //Delete funtion.
            let deleteicon = document.createElement("button");
            deleteicon.innerHTML = "Delete";
            deleteicon.className = "material-icons";
            deleteicon.innerHTML = "close";
            newelement.appendChild(deleteicon);

            deleteicon.addEventListener("click", function (event) {
                event.stopPropagation();
                event.preventDefault();
                //Everytime a certain task is deleted, the total task counter decreases with one.
                count--;
                numberOfTasks.innerHTML = count + " total task/-s.";

                //This if-statements checks if a task is done (by checking if it has a line-through), if the statement is
                //true, then the done counter decreases by one along with the total task counter.
                if(newelement.style.textDecoration){
                    countDone--;
                    numberOfDone.innerHTML = countDone + " task/-s done.";
                }

                let li = event.target.parentElement;
                ul.removeChild(li);
            });
        }
    } 
});
