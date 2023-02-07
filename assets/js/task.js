//document selectors
let addTaskBtn = $("#add-button");
let taskInput = $(".task-input");
let taskOutput = $("#task-output");
let taskForm = $("#task-form");
let taskDisplay = $("#task-display");
let taskText = $("#daily-task");
let progressBar = $("#progress-bar");

let todaysDate = moment().format("DD MM YYYY")
let timerEnd = moment().hour(20).minutes(0)

console.log(timerEnd)

function addTask(event) {
    event.preventDefault();
    //get user input from text field
    var task = taskInput.val().trim();
    console.log(task);
    taskText.val(task);
    taskInput.val("");
    
    //hide input form and show inputted task and timer
    taskForm.css("display", "none");
    taskDisplay.css("display", "block");
    addTaskBtn.css("display", "none");
    progressBar.css("display", "block");
    taskText.text(task);
}

function saveTask(task) {

}

function updateTimer() {

}

//save and display task on button press
addTaskBtn.on("click", addTask);