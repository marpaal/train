// Author: Martín
// Example Open Close Principle

class Guitar {
    public brand: string;
    public model: string;
    public volume: number;

    constructor(
        brand: string,
        model: string,
        volume: number
    ) {
        this.brand = brand;
        this.model = model;
        this.volume = volume;
    }
}

class GuitarWithFlames extends Guitar {
    public flameColor: string;

    constructor(brand: string, model: string, volume: number, flameColor: string) {
        super(brand, model, volume);
        this.flameColor = flameColor;
    }
}

export { Guitar, GuitarWithFlames };