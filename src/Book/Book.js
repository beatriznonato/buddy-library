export default class Book {
    bookName;
    authorName;
    isbn;

    constructor(authorName, bookName, isbn, availability) {
        this.bookName = bookName;
        this.authorName = authorName;
        this.isbn = isbn;
        this.availability = availability;
        Book.bookList.push(this);
    }

    validateBookAvailability(){
        if(this.availability === true) {
            return 'Book available for loan! (:';
        } else {
            return 'What a shame! Book not available for loan.';
        }
    }

    static bookList = [];
}