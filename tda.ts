class Plant {
    private humidity: number;
    private substratum: string;
    private pH: number;
    private potSize: number;

    constructor(
        humidity: number,
        pH: number,
        substratum: string,
        potSize: number
    ) {
        this.humidity = humidity;
        this.substratum = substratum;
        this.pH = pH;
        this.potSize = potSize;
    }

    get getHumidity(): number {
        return this.humidity;
    }
    
    set setHumidity(humidity: number) {
        this.humidity = humidity;
    }
}

class IrrigationControl {
    private readonly MINIUM_HUMIDITY = 20;
    private plant: Plant;

    constructor(plant: Plant) {
        this.plant = new Plant(plant);
    }

    private irrigate(): void {
        if (this.plant.getHumidity < this.MINIUM_HUMIDITY) {

        }
    }
}