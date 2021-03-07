"use strict";
class WeatherData {
    constructor() {
        this.observers = [];
        this.store = {
            temperature: 0,
            pressure: 0,
            humidity: 0
        };
    }
    registerObserver(o) {
        const isExist = this.observers.includes(o);
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }
        console.log('Subject: Attached an observer.');
        this.observers.push(o);
    }
    removeObserver(o) {
        const observerIndex = this.observers.indexOf(o);
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }
        this.observers.splice(observerIndex, 1);
        console.log('Subject: Detached an observer.');
    }
    notifyObservers() {
        console.log('Subject: Notifying observers...');
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
    measurementsChanged() {
        this.notifyObservers();
    }
    setMeasurements(param) {
        this.store = param;
        /*console.log(`Subject: My state has just changed to:
         ${this.store.humidity} / ${this.store.pressure} / ${this.store.temperature}`);*/
        this.measurementsChanged();
    }
}
class CurrentConditionsDisplay {
    constructor(weatherData) {
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);
    }
    update(subject) {
        this.weatherData = subject;
        this.display();
    }
    display() {
        console.log(`current condition: ${this.weatherData.store.humidity} / ${this.weatherData.store.pressure} / ${this.weatherData.store.temperature}`);
    }
}
const weatherData = new WeatherData();
const currentDisplay = new CurrentConditionsDisplay(weatherData);
weatherData.setMeasurements({ temperature: 80, pressure: 65, humidity: 30 });
weatherData.setMeasurements({ temperature: 50, pressure: 65, humidity: 20 });
weatherData.setMeasurements({ temperature: 80, pressure: 70, humidity: 15 });
//# sourceMappingURL=Observer.js.map