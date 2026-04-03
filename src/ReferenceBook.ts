/**
 * @class ReferenceBook
 * @extends Book
 * @description Demonstrates INHERITANCE and POLYMORPHISM.
 * Inherits basic properties from Book and OVERRIDES displayInfo() to provide 
 * specialized behavior for reference materials.
 */
import { Book } from "./Book.js";

export class ReferenceBook extends Book {
    #locationCode: string;
    #edition: number;

constructor(title: string, author: string, category: string, locationCode: string, year: number = 2024, edition: number = 1) {
    super(title, author, category, year, 1); 
    this.#locationCode = locationCode;
    this.#edition = edition;
}
    get locationCode() { return this.#locationCode; }

    override displayInfo(): string {
        return `
            ${super.displayInfo()}
            <div class="info-item"> Location: ${this.#locationCode}</div>
            <div class="info-item"> Edition: ${this.#edition}</div>
        `;
    }
}