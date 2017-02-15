'use strict'

var table;
var ROWS = 4;
var COLS = 8;
var month;

function showMonth() {
    var daysArray = month.getDays();
    var dayCounter = 0;


    table.html('');
    for (var r = 0; r < ROWS; r++) {
        var row = $('<div class="row"></div>').appendTo(table);
        for (var c = 0; c < COLS; c++) {
            if (dayCounter < daysArray.length) {
                var day = $('<div class="' + daysArray[dayCounter].getClass() + '" data-date="' + (dayCounter + 1) + '">'
                    + daysArray[dayCounter].getDate() + '</div>');
                day.appendTo(row);
                day.click(clickDay);
                dayCounter++;
            }
        }
    }

    $('<br><br><br>').appendTo(table);
}

function clickEvents(e) {
    e.stopPropagation();

    var list = $('div.list');
    var date = $(this).data('date');

    if(list.length > 0 ) clickClose();
    showEvents(date);
    return false;
}

function showEvents(date) {
    var eventsList = $('<div class="list" data-date="' + date + '">List of events on ' + date + '</div>');
    var events = month.getEvents(date);
    var ul = $('<ul></ul>');
    for(var i = 0; i < events.length; i++) {
        var li = $('<li data-date="' + date + '">' + events[i][0] + ' - ' + events[i][1] + '</li>');
        var buttonDelete = $('<button class="delete" data-date="' + date + '" data-id="' + i + '">x</button>');
        buttonDelete.click(clickDelete);
        li.append(buttonDelete);
        ul.append(li);
    }
    var button = $('<button>Close</button>');
    button.click(clickClose);
    eventsList.append(ul).append(button);
    table.append(eventsList);

}

function clickDelete(e) {
    e.stopPropagation();
    var index = $(this).data('id');
    var date = $(this).data('date');
    var daysArray = month.getDays();
    daysArray[date - 1].removeEvent(index);
    clickClose();
    if(daysArray[date - 1].hasEvents()) showEvents(date);
    else {

    var li = $('a[data-date=' + date + ']');
    li.remove();

    }

    return false;
}

function clickClose() {
    var list = $('div.list');
    if(list.length > 0) list.remove();

}

function clickDay(e) {

    var date = $(this).data('date');
    var daysArray = month.getDays();
    var addLinkToEvents = !daysArray[date - 1].hasEvents();
    var eventName = prompt('Insert event name');
    if(!eventName) return false;
    var eventNote = prompt('Inset event note');
    if(!eventNote) return false;
    month.setEvent(date, eventName, eventNote);
    var day = $('div.day[data-date=' + date + ']');

    //if first event for this day add link
    if (addLinkToEvents) {
        var dayEvents = $('<a href="" class="notes" data-date="' +date + '">*</a>');
        dayEvents.click(clickEvents);
        dayEvents.appendTo(day);
    }

    // if events are open update
    var events = $('div.list[data-date=' + date + ']');
    if(events.length > 0) {
        clickClose();
        showEvents(date);
    }
}

$(document).ready(function () {
    table = $('.table');
    month = new Month('february', 28);
    var date = new Date();
    var today = date.getDate();
    month.setCurrentDate(today);

    showMonth();
});
