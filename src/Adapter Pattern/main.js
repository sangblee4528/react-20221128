import Printer from './Printer';
import 

let printer = new Printer();
printer.pushText('Hello');
printer.pushText('Design');
printer.pushText('Pattern');

let result = printer.print();
console.log(result);
