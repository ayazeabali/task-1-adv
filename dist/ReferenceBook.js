import { Book } from "./Book.js";
export class ReferenceBook extends Book {
    #locationCode;
    #edition;
    constructor(title, author, category, // ✅ النوع الصحيح
    locationCode, year = 2024, edition = 1) {
        super(title, author, category, year, 1);
        this.#locationCode = locationCode;
        this.#edition = edition;
    }
    get locationCode() { return this.#locationCode; }
    get edition() { return this.#edition; }
    displayInfo() {
        return `
            ${super.displayInfo()}
            <div class="info-item"> Location: ${this.#locationCode}</div>
            <div class="info-item"> Edition: ${this.#edition}</div>
        `;
    }
}
