/**
 * @class ReferenceBook
 * @extends Book
 * @description Demonstrates INHERITANCE and POLYMORPHISM.
 * Inherits basic properties from Book and OVERRIDES displayInfo() to provide
 * specialized behavior for reference materials.
 */
import { Book } from "./Book.js";
export class ReferenceBook extends Book {
    #locationCode;
    #edition;
    constructor(title, author, category, locationCode, year = 2024, edition = 1) {
        super(title, author, category, year, 1);
        this.#locationCode = locationCode;
        this.#edition = edition;
    }
    get locationCode() { return this.#locationCode; }
    displayInfo() {
        return `
            ${super.displayInfo()}
            <div class="info-item"> Location: ${this.#locationCode}</div>
            <div class="info-item"> Edition: ${this.#edition}</div>
        `;
    }
}
