// loads date on header
var loadDate = function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
}

// time slot setup
var loadTimeSlot = function() {
    var container = $(".container");
    var timeSlot = $("<section>")
        .addClass("row br-primary text-white")
    var time = $("<p>")
        .addClass("m-0 col-1 border-top border-bottom border-dark text-dark")
        .text(moment().format("ha"));
    var task = $("<p>")
        .addClass("m-0 col-10 bg-secondary border border-light")
    var save = $("<button>")
        .addClass("m-0 col-1 bg-info border border-light rounded-right")

    timeSlot.append(time, task, save);
    container.append(timeSlot);
}

loadDate();
loadTimeSlot();