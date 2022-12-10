import Book from '../Book/Book.js';
import BookRenter from '../BookRenter/BookRenter.js';
import BookOwner from '../BookOwner/BookOwner.js';
import LibraryCard from '../LibraryCard/LibraryCard.js';

export default class Library {
    constructor(book, bookOwner, bookRenter) {
        if(book instanceof Book && bookRenter instanceof BookRenter && bookOwner instanceof BookOwner) {
            this.book = book;
            this.bookOwner = bookOwner;
            this.bookRenter = bookRenter;
        } else {
            return 'Too bad, Parameters are invalid!';
        }
    }

    loanOfBook(dateOfLoan, returnDate){
        if(this.book.availability === true) {
            this.book.availability = false;
            const newLibraryCard = new LibraryCard(this.book, dateOfLoan, returnDate, this.bookRenter);
            // console.log(newLibraryCard);
            return `Book ${this.book.bookName} is borrowed for ${this.bookRenter.name}.`
        } else {
            return `Book ${this.book.bookName} currently unavailable for loan.`
        }
    }

    returnOfBook(){
        if(this.book.availability === false) {
            this.book.availability = true;
            return `Book ${this.book.bookName} was returned to ${this.bookRenter.name}.`
        } else {
            return `Book ${this.book.bookName} book is available again for loan.`
        }
    }
}