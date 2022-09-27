// Author: Martín
// Example Single Responsability Principle

interface Shape {
    area: (x: number) => number;
}

class Square implements Shape {
    private length: number;

    constructor(length: number) { this.length = length; }

    area() { return this.length * 2; }
}

class Rectangle implements Shape {
    private base: number;
    private height: number;

    constructor(base: number, height: number) { this.base = base; this.height = height; }

    area(): number { return (this.base * this.height) / 2; }
}

class Circle implements Shape {
    private radius: number;
    private readonly PI: number = 3.1416;

    constructor(radius: number) { this.radius = radius; }

    area(): number { return this.PI * (this.radius ** 2); }
}

type ShapeType = Square | Rectangle | Circle;
class AreaCalculator {
    private shapes: ShapeType[];

    constructor(shapes: ShapeType[]) { this.shapes = shapes; }

    sum(): number {
        let sumAreaShapes = 0;
        this.shapes.forEach((shape) => {
            sumAreaShapes += shape.area();
        })
        return sumAreaShapes;
    } 
}

export { ShapeType, Square, Rectangle, Circle, AreaCalculator };