import LibraryCard from "./LibraryCard.js";

describe('Card class test', () => {
    const card = new LibraryCard();
    test('check that the Card instance is done correctly', () =>{
        expect(card instanceof LibraryCard).toBe(true);
    });
})