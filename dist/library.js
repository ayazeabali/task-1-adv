export class Library {
    #books = [];
    addBook(book) {
        this.#books.push(book);
    }
    removeBook(title) {
        this.#books = this.#books.filter(b => b.title !== title);
    }
    searchBooks(keyword) {
        return this.#books.filter(b => b.title.toLowerCase().includes(keyword.toLowerCase()) ||
            b.author.toLowerCase().includes(keyword.toLowerCase()));
    }
    filterByCategory(category) {
        if (category === "all")
            return this.#books;
        return this.#books.filter(b => b.category === category);
    }
    toggleAvailability(title) {
        const book = this.#books.find(b => b.title === title);
        if (book)
            book.toggleAvailability();
    }
    getAllBooks() {
        return [...this.#books];
    }
}
