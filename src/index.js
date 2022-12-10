import User from './User/User.js';
import Book from './Book/Book.js';
import BookRenter from './BookRenter/BookRenter.js';
import BookOwner from './BookOwner/BookOwner.js';
import Library from './Library/Library.js';

const newUser = new User('Beatriz', 'bianonato@gmail.com', '04408876902', '11947049357', 'Avenida Paulista, 1500, São Paulo - SP');

const Book1 = new Book('Data Structures and Algorithms with JavaScript', 'Loiane Groner', '8575226932', true);
const Book2 = new Book('Clean Code','Robert C. Martin', '8576082675', false);
const Book3 = new Book('Domain-Driven Design: Tackling the Complexities at the Heart of Software', 'Eric Evans', '8550800651', false);
const Book4 = new Book('Refactoring', 'Martin Fowler', '9375526332', false);
const Book5 = new Book('Object Orientation and SOLID for Ninjas: Designing Flexible Classes', 'Maurício Aniche', 'B019OU0G5U', false);

const dataBookRenter = new BookRenter('Anna', 'annamaria@gmail.com', '12345678902', '21947038794', 'Rua Brasil, 500 - RJ', '001');

const dataBookOwner = new BookOwner('Valenthina', 'valenthina@gmail.com', '12335678902', '27947068794', 'Rua Brasil, 345 - PE', '054');

const dataLibrary = new Library(Book1, dataBookOwner, dataBookRenter);
const dataLibrary2 = new Library(Book2, dataBookOwner, dataBookRenter);


console.table(Book.bookList);
console.table(dataLibrary.loanOfBook());
console.table(dataLibrary);

console.table(dataLibrary2.loanOfBook());
console.table(dataLibrary2);