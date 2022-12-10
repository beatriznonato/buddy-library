import BookRenter from "./BookRenter.js";

describe('BookRenter class test', () => {
    const bookRenter = new BookRenter();
    test('check that the BookRenter instance is done correctly', () =>{
        expect(bookRenter instanceof BookRenter).toBe(true);
    });
})