
class Day {


    date;
    currentDate;
    events;
    myClass;

    constructor(date) {
        this.date = date;
        this.currentDate = false;
        this.events = [];
        this.myClass = 'day';
    }

    setCurrent = (isCurrent) =>  {
        this.currentDate = isCurrent;
        if(isCurrent) this.myClass = 'current day';
        else this.myClass = 'day';
    };

    isCurrent = () => {
        return this.currentDate;
    };

    addEvent = (eventName, eventNote) => {
        this.events.push([eventName, eventNote]);
    };

    removeEvent = (eventIndex) => {
        this.events.splice(eventIndex, 1);
    };

    getEvent = (eventIndex) => {
        return this.events[eventIndex][1];
    };

    getEvents = () => {
        return this.events;
    };

    hasEvents = () =>{
        return this.events.length > 0 ;
    };

    getDate = () => {
        return this.date;
    };

    getClass = () => {
        return this.myClass;
    };
}

