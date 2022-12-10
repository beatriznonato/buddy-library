import BookOwner from "./BookOwner.js";

describe('BookOwner class test', () => {
    const bookOwner = new BookOwner();
    test('check that the BookOwner instance is done correctly', () =>{
        expect(bookOwner instanceof BookOwner).toBe(true);
    });
})