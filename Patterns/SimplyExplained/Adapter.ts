interface IPhone {
  useLightning(): void
}

interface IAndroin {
  useMicroUSB(): void
}

class IPhoneSeven implements IPhone{
  useLightning(){
    console.log('Using lightning port...')
  }
}
class GooglePixel implements IAndroin{
  useMicroUSB(){
    console.log('Using Micro USB port...')
  }
}

class LightningToMicroUSBAdapter implements IAndroin {
  iphoneDevice: IPhone;
  constructor(iphone: IPhone) {
    this.iphoneDevice = iphone
  }

  useMicroUSB(): void {
    console.log('Want to use micro USB, converting to Lightning...');
    this.iphoneDevice.useLightning();
  }
}

let iphone = new IPhoneSeven();
let chargeAdapter = new LightningToMicroUSBAdapter(iphone);

chargeAdapter.useMicroUSB();