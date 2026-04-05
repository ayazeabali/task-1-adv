/**
 * @class Book
 * @description Base class demonstrating ENCAPSULATION and ABSTRACTION.
 * Uses private fields (#) to protect data and getters to provide controlled access.
 */
export class Book {
    #title;
    #author;
    #category; // ✅ بدل string
    #year;
    #copies;
    #isAvailable;
    constructor(title, author, category, // ✅ بدل string
    year = 2024, copies = 1) {
        this.#title = title;
        this.#author = author;
        this.#category = category;
        this.#year = year;
        this.#copies = copies;
        this.#isAvailable = true;
    }
    // 🔑 Getters
    get title() { return this.#title; }
    get author() { return this.#author; }
    get category() { return this.#category; }
    get isAvailable() { return this.#isAvailable; }
    get year() { return this.#year; }
    get copies() { return this.#copies; }
    toggleAvailability() {
        this.#isAvailable = !this.#isAvailable;
    }
    displayInfo() {
        return `
            <div class="info-item"> Year: ${this.#year}</div>
            <div class="info-item"> Total Copies: ${this.#copies}</div>
        `;
    }
}
