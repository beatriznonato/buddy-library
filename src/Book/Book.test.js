import Book from "./Book";

describe('Book class test', () => {
    const book = new Book();
    test('check that the Book instance is done correctly', () =>{
        expect(book instanceof Book).toBe(true);
    });

    test('Check if book is available for loan', () => {
        const Book1 = new Book('Data Structures and Algorithms with JavaScript', 'Loiane Groner', '8575226932', true);
        expect(Book1.validateBookAvailability()).toBe('Book available for loan! (:');
    });

    test('Check if the book is unavailable for borrowing', () => {
        const Book1 = new Book('Data Structures and Algorithms with JavaScript', 'Loiane Groner', '8575226932', false);
        expect(Book1.validateBookAvailability()).toBe('What a shame! Book not available for loan.');
    });
})