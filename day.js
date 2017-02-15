'use strict'

function Day(date) {
    this.date = date;
    this.currentDate = false;
    this.events = [];
    this.class = 'day';
}

Day.prototype.setCurrent = function(isCurrent) {
    this.currentDate = isCurrent;
    if(isCurrent) this.class = 'current day';
    else this.class = 'day';
};

Day.prototype.isCurrent = function() {
    return this.currentDate;
};

Day.prototype.addEvent = function(eventName, eventNote) {
    this.events.push([eventName, eventNote]);
};

Day.prototype.removeEvent = function(eventIndex) {
    this.events.splice(eventIndex, 1);
};

Day.prototype.getEvent = function(eventIndex) {
    return this.notes[eventIndex][1];
};

Day.prototype.getEvents = function() {
    return this.events;
}

Day.prototype.hasEvents = function() {
    return this.events.length > 0 ;
}

Day.prototype.getDate = function () {
    return this.date;
}

Day.prototype.getClass = function() {
    return this.class;
}
// add get all events or all event names ?