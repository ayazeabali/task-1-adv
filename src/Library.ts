/**
 * Class: Library
 * 
 * Manages a collection of books in the library.
 * Uses generics to handle any type of Book or subclass.
 */
import { Book } from "./Book.js";
import { BookCategory } from "./BookCategory.js"; 

export class Library<T extends Book> {
    #books: T[] = []; 

    addBook(book: T): void {
        this.#books.push(book);
    }

    searchBooks(term: string = "", category: BookCategory | "all" = BookCategory.All): T[] {
        const lowerTerm = term.toLowerCase().trim();

        return this.#books.filter((b: T) => {
            const matchesCategory = category === BookCategory.All || b.category === category;
            const matchesTerm = b.title.toLowerCase().includes(lowerTerm) || 
                                b.author.toLowerCase().includes(lowerTerm);
            return matchesCategory && matchesTerm;
        });
    }

    filterByCategory(category: BookCategory | "all"): T[] {
        return this.searchBooks("", category); 
    }

    toggleAvailability(title: string): void {
        const book = this.#books.find(b => b.title === title);
        if (book) book.toggleAvailability();
    }

    removeBook(title: string): void {
        this.#books = this.#books.filter(b => b.title !== title);
    }
}