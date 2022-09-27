import * as SRP from './srp';
import * as OCP from './ocp';
import * as LSP from './lsp';

// Test SRP
const square = new SRP.Square(2);
const rectangle = new SRP.Rectangle(2, 4);
const circle = new SRP.Circle(2);

let shapes: SRP.ShapeType[] = [ square, rectangle, circle];

console.log('Square Area', square.area());
console.log('Circle Area', circle.area());
console.log('Rectangle Area', rectangle.area());
console.log('Total area', new SRP.AreaCalculator(shapes).sum());

// Test OCP
const guitar = new OCP.GuitarWithFlames('Fender', 'Stratocaster', 40, 'Brown');
console.log(guitar);

//Test LSP
const dog = new LSP.Dog();
const cat = new LSP.Cat();
const rabbit = new LSP.Rabbit();
console.log('Dog noise', dog.makeNoise());
console.log('Cat noise', cat.makeNoise());
console.log('Rabbit noise', rabbit.makeNoise());

// Test ISP


