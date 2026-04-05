import { Book } from "./Book.js";
import { BookCategory } from "./BookCategory.js"; // ✅ استيراد enum

export class ReferenceBook extends Book {
    #locationCode: string;
    #edition: number;

    constructor(
        title: string, 
        author: string, 
        category: BookCategory, // ✅ النوع الصحيح
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