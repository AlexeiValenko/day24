'use strict'

function Month(name, numberOfDays) {
    this.name = name;
    this.days = [];
    this.currentDate = 1;
    this.class = 'month';
    for(var i = 0; i < numberOfDays; i++) {
        var day = new Day(i+1);
        this.days.push(day);
    }
}

Month.prototype.setCurrentDate = function (date) {
    this.date = date;
    this.days[date - 1].setCurrent(true);
};

Month.prototype.getDay = function (date) {
    return this.days[date-1];
};

Month.prototype.getDays = function () {
    return this.days;
}

Month.prototype.getCurrentDay = function () {
    return Month.prototype.getDay(this.currentDate);
};

Month.prototype.setEvent = function (date, name, note) {
    this.days[date - 1].addEvent(name,note);
}

Month.prototype.getEvents = function (date) {
    return this.days[date - 1].getEvents();

}