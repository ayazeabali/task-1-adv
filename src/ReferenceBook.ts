/**
 * Class: ReferenceBook
 * 
 * Represents a reference book in the library
 * Inherits from Book and adds:
 * - locationCode: Shelf or section code
 * - edition: Edition number
 * 
 * Overrides displayInfo() to show additional details
 */
import { Book } from "./Book.js";
import { BookCategory } from "./BookCategory.js"; 

export class ReferenceBook extends Book {
    #locationCode: string;
    #edition: number;

    constructor(
        title: string, 
        author: string, 
        category: BookCategory, 
        locationCode: string, 
        year: number = 2024, 
        edition: number = 1
    ) {
        super(title, author, category, year, 1); 
        this.#locationCode = locationCode;
        this.#edition = edition;
    }

    get locationCode() { return this.#locationCode; }
    get edition() { return this.#edition; }

    override displayInfo(): string {
        return `
            ${super.displayInfo()}
            <div class="info-item"> Location: ${this.#locationCode}</div>
            <div class="info-item"> Edition: ${this.#edition}</div>
        `;
    }
}