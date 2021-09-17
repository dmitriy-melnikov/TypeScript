interface Subject {
  registerObserver(o: Observer): void
  removeObserver(o: Observer): void
  notifyObservers(): void
}

interface Observer {
  update(temperature: number): void
}


class WeatherStation implements Subject{
  private temperature: number;
  private observers: Observer[] = []

  setTemperature(temp: number) {
    console.log('Weather station: new temperature measurement: ' + temp)
    this.temperature = temp;
    this.notifyObservers();
  }

  notifyObservers(): void {
    for(const observer of this.observers) {
      observer.update(this.temperature)
    }
  }

  registerObserver(o: Observer): void {
    this.observers.push(o)
  }

  removeObserver(o: Observer): void {
    const index = this.observers.indexOf(o);
    this.observers.splice(index, 1)
  }
}

class Fan implements Observer {
  private subject: Subject;

  constructor(weatherStation: WeatherStation) {
    this.subject = weatherStation
    weatherStation.registerObserver(this)
  }
  update(temperature: number): void {
    if (temperature > 25) {
      console.log('Fan its hot here turning myself on...')
    } else {
      console.log('Fan its nice and cool here turning myself on...')
    }
  }
}
class TemperatureDisplay implements Observer {
  private subject: Subject;

  constructor(weatherStation: WeatherStation) {
    this.subject = weatherStation
    weatherStation.registerObserver(this)
  }
  update(temperature: number): void {
    console.log('Temperature dispalay: I need to update my display')
  }
}
let weatherStation = new WeatherStation()
let temperatureDisplay = new TemperatureDisplay(weatherStation)
let fan = new Fan(weatherStation)

weatherStation.setTemperature(20)
weatherStation.setTemperature(30)