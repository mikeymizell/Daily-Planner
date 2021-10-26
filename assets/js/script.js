var planner = {};

var container = $(".container");
var timeList = $("<ul>");

// loads date on header
var loadDate = function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
};

// time slot setup
var loadTimeSlot = function() {
    var hours = moment();
    hours.set('hours', 9);

    planner = JSON.parse(localStorage.getItem("planner"));

    if (!planner) {
        planner = {
            time: [],
            task: []
        }
    }

    for (var i = 0; i < 9; i++) {
        var timeSlot = $("<li>")
            .addClass("row")
            .attr("time", hours.format("HH"));

        var time = $("<span>")
            .addClass("m-0 col-1 border-top border-bottom border-dark pt-4")
            .text(hours.format("ha"));

        var task = $("<p>")
        if (hours.format("HH") < moment().format("HH")) {
            task
                .addClass("m-0 col-10 bg-secondary border border-light pt-2");
        }
        else if (hours.format("HH") === moment().format("HH")) {
            task
                .addClass("m-0 col-10 bg-warning border border-light pt-2");
        }
        else if (hours.format("HH") > moment().format("HH")) {
            task
                .addClass("m-0 col-10 bg-success text-white border border-light pt-2");
        }
        
        var save = $("<button>")
            .addClass("m-0 col-1 bg-info border border-light rounded-right");

        if (planner.task[i]) {
            task.text(planner.task[i]);
        }
        else {
            planner.task[i] = "";
        }
        
        timeSlot.append(time, task, save);
        timeList.append(timeSlot);
        container.append(timeSlot);

        planner.time[i] = hours.format("ha");

        hours.add(1, 'h');
    }
};

// save tasks to browser
var saveData = function() {
    localStorage.setItem("planner", JSON.stringify(planner));
};

// add and edit tasks
$(".container").on("click", "p", function() {
    var text = $(this)
        .text()
        .trim();

    var textInput = $("<textarea>")
        .addClass("form-control col-10 isSelected")
        .val(text);

    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

$(".container").on("click", "button", function() {
    var text = $(".isSelected")
        .val()
        .trim();

    var time = $(this)
        .closest("li")
        .attr("time");

    var index = $(this)
        .closest("li")
        .index();

    var textInput = $("<p>");
    if (time < moment().format("HH")) {
        textInput.addClass("m-0 col-10 bg-secondary border border-light pt-2");
    }
    else if (time === moment().format("HH")) {
        textInput.addClass("m-0 col-10 bg-warning border border-light pt-2");
    }
    else if (time > moment().format("HH")) {
        textInput.addClass("m-0 col-10 bg-success text-white border border-light pt-2");
    }
    textInput
        .addClass("m-0 col-10 bg-secondary border border-light pt-2")
        .text(text);
    
    $(".isSelected").replaceWith(textInput);

    planner.task[index] = text;
    saveData();
});

loadDate();
loadTimeSlot();