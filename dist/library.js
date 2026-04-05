import { BookCategory } from "./BookCategory.js";
export class Library {
    #books = [];
    addBook(book) {
        this.#books.push(book);
    }
    searchBooks(term = "", category = BookCategory.All) {
        const lowerTerm = term.toLowerCase().trim();
        return this.#books.filter((b) => {
            const matchesCategory = category === BookCategory.All || b.category === category;
            const matchesTerm = b.title.toLowerCase().includes(lowerTerm) ||
                b.author.toLowerCase().includes(lowerTerm);
            return matchesCategory && matchesTerm;
        });
    }
    filterByCategory(category) {
        return this.searchBooks("", category);
    }
    toggleAvailability(title) {
        const book = this.#books.find(b => b.title === title);
        if (book)
            book.toggleAvailability();
    }
    removeBook(title) {
        this.#books = this.#books.filter(b => b.title !== title);
    }
}
