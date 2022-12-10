import BookRenter from '../BookRenter/BookRenter.js';
import Book from '../Book/Book.js';

export default class LibraryCard  {
    constructor(book, dateOfLoan, returnDate, bookRenter) {
        if(bookRenter instanceof BookRenter && book instanceof Book) {
            this.dateOfLoan = dateOfLoan;
            this.returnDate = returnDate;
            this.bookRenter = bookRenter;
            this.book = book;
        }
    }
}
