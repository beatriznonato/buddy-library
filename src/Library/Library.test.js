import Book from '../Book/Book.js';
import BookRenter from '../BookRenter/BookRenter.js';
import BookOwner from '../BookOwner/BookOwner.js';
import Library from '../Library/Library.js';

describe('Library class test', () => {
    const library = new Library();
    test('check that the Library instance is done correctly', () =>{
        expect(library instanceof Library).toBe(true);
    });

    const dataBookRenter = new BookRenter('Anna', 'annamaria@gmail.com', '12345678902', '21947038794', 'Rua Brasil, 500 - RJ', '001');
    const dataBookOwner = new BookOwner('Valenthina', 'valenthina@gmail.com', '12335678902', '27947068794', 'Rua Brasil, 345 - PE', '054');

    test('book available on loan to reader', () => {
        const Book1 = new Book('Data Structures and Algorithms with JavaScript', 'Loiane Groner', '8575226932', true);
        const dataLibrary = new Library(Book1, dataBookOwner, dataBookRenter);
        expect(dataLibrary.loanOfBook()).toBe(`Book ${Book1.bookName} is borrowed for ${dataBookRenter.name}.`);
    });

    test('book currently unavailable for loan', () => {
        const Book1 = new Book('Data Structures and Algorithms with JavaScript', 'Loiane Groner', '8575226932', false);
        const dataLibrary = new Library(Book1, dataBookOwner, dataBookRenter);
        expect(dataLibrary.loanOfBook()).toBe(`Book ${Book1.bookName} currently unavailable for loan.`);
    });

    test('return book to owner', () => {
        const Book1 = new Book('Data Structures and Algorithms with JavaScript', 'Loiane Groner', '8575226932', false);
        const dataLibrary = new Library(Book1, dataBookOwner, dataBookRenter);
        expect(dataLibrary.returnOfBook()).toBe(`Book ${Book1.bookName} was returned to ${dataBookRenter.name}.`);
    });

    test('return of the book to make it available again for loan', () => {
        const Book1 = new Book('Martin', 'Codigo Limpo', 'Alta Books', 'Arquitetura', true);
        const dataLibrary = new Library(Book1, dataBookOwner, dataBookRenter);
        expect(dataLibrary.returnOfBook()).toBe(`Book ${Book1.bookName} book is available again for loan.`);
    });
})