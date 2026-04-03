/**
 * @class Library
 * @description Acting as a Controller to manage the collection of books.
 * Encapsulates the book array and provides clean methods for searching and filtering.
 */
import { Book } from "./Book.js";

export class Library {
    #books: Book[] = [];

    addBook(book: Book): void {
        this.#books.push(book);
    }

    removeBook(title: string): void {
        this.#books = this.#books.filter(b => b.title !== title);
    }

    searchBooks(keyword: string): Book[] {
        return this.#books.filter(b =>
            b.title.toLowerCase().includes(keyword.toLowerCase()) ||
            b.author.toLowerCase().includes(keyword.toLowerCase())
        );
    }

    filterByCategory(category: string): Book[] {
        if (category === "all") return this.#books;
        return this.#books.filter(b => b.category === category);
    }

    toggleAvailability(title: string): void {
        const book = this.#books.find(b => b.title === title);
        if (book) book.toggleAvailability();
    }

    getAllBooks(): Book[] {
        return [...this.#books];
    }
}