
class Month {

    name;
    days;
    currentDate;
    myClass;

    constructor(name, numberOfDays) {
        this.name = name;
        this.days = [];
        this.currentDate = 1;
        this.myClass = 'month';
        for(var i = 0; i < numberOfDays; i++) {
            var day = new Day(i+1);
            this.days.push(day);
        }

    };

    setCurrentDate = (date) => {
        this.currentDate = date;
        this.days[date - 1].setCurrent(true);
    };

    getDay = (date) => {
        return this.days[date-1];
    };

    getDays = () => {
        return this.days;
    };

    getCurrentDay = () => {
        return Month.prototype.getDay(this.currentDate);
    };

    setEvent = (date, name, note) => {
        this.days[date - 1].addEvent(name,note);
    };

    getEvents = (date) => {
        return this.days[date - 1].getEvents();
    };
}