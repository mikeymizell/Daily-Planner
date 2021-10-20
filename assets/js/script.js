// loads date on header
var loadDate = function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
}

// time slot setup
var loadTimeSlot = function() {
    var container = $(".container");

    var timeList = $("<ul>")

    var timeSlot = $("<li>")
        .addClass("row")
    
    var time = $("<span>")
        .addClass("m-0 col-1 border-top border-bottom border-dark")
        .text(moment().format("ha"));
    
    var task = $("<p>")
        .addClass("m-0 col-10 bg-secondary border border-light")
        .text("hello");
    
    var save = $("<button>")
        .addClass("m-0 col-1 bg-info border border-light rounded-right");

    timeSlot.append(time, task, save);
    timeList.append(timeSlot);
    container.append(timeSlot);
}

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
    
    var textInput = $("<p>")
        .addClass("m-0 col-10 bg-secondary border border-light")
        .text(text);
    
    $(".isSelected").replaceWith(textInput);
});

loadDate();
loadTimeSlot();