/*
import Printer from './Printer';

let printer = new Printer();
printer.pushText('Hello');
printer.pushText('Design');
printer.pushText('Pattern');

let result = printer.print();
console.log(result);
*/
import HashTagPrinter from './HashTagPrinter';
import HashTagAdapter from './HashTagAdapter';

let printer = new HashTagAdapter(new HashTagPrinter());
printer.pushText('Hello');
printer.pushText('Design');
printer.pushText('Pattern');

console.log(printer.print());
