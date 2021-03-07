interface StoreParam {
  temperature: number;
  humidity: number;
  pressure: number;
}

interface Subject {
  store: StoreParam
  registerObserver: (o: Observer) => void;
  removeObserver: (o: Observer) => void;
  notifyObservers: (o: Observer) => void;
}

interface Observer {
  update: (subject: Subject) => void;
}

interface DisplayElement {
  display: () => void;
}

class WeatherData implements Subject {
  private observers: Observer[] = [];
  store: StoreParam = {
    temperature: 0,
    pressure: 0,
    humidity: 0
  };

  registerObserver(o: Observer): void {
    const isExist = this.observers.includes(o);
    if (isExist) {
      return console.log('Subject: Observer has been attached already.');
    }
    console.log('Subject: Attached an observer.');
    this.observers.push(o);
  }

  removeObserver(o: Observer): void {
    const observerIndex = this.observers.indexOf(o);
    if (observerIndex === -1) {
      return console.log('Subject: Nonexistent observer.');
    }

    this.observers.splice(observerIndex, 1);
    console.log('Subject: Detached an observer.');
  }

  notifyObservers(): void {
    console.log('Subject: Notifying observers...');
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  measurementsChanged(): void {
    this.notifyObservers();
  }

  setMeasurements(param: StoreParam) {
    this.store = param;
    /*console.log(`Subject: My state has just changed to:
     ${this.store.humidity} / ${this.store.pressure} / ${this.store.temperature}`);*/
    this.measurementsChanged();
  }
}

class CurrentConditionsDisplay implements Observer, DisplayElement {
  private weatherData: Subject;

  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  update(subject: Subject): void {
    this.weatherData = subject
    this.display();
  }
  display(): void {
    console.log(`current condition: ${this.weatherData.store.humidity} / ${this.weatherData.store.pressure} / ${this.weatherData.store.temperature}`);
  }
}


const weatherData: WeatherData = new WeatherData();
const currentDisplay: CurrentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
weatherData.setMeasurements({temperature: 80, pressure: 65, humidity: 30});
weatherData.setMeasurements({temperature: 50, pressure: 65, humidity: 20});
weatherData.setMeasurements({temperature: 80, pressure: 70, humidity: 15});
