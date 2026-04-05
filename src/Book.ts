/**
 * @class Book
 * @description Base class demonstrating ENCAPSULATION and ABSTRACTION.
 * Uses private fields (#) to protect data and getters to provide controlled access.
 */

import { BookCategory } from "./BookCategory.js"; // ✅ استيراد enum

export class Book {
    #title: string;
    #author: string;
    #category: BookCategory; // ✅ بدل string
    #year: number;
    #copies: number;
    #isAvailable: boolean;

    constructor(
        title: string, 
        author: string, 
        category: BookCategory, // ✅ بدل string
        year: number = 2024, 
        copies: number = 1
    ) {
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

    toggleAvailability(): void {
        this.#isAvailable = !this.#isAvailable;
    }

    displayInfo(): string {
        return `
            <div class="info-item"> Year: ${this.#year}</div>
            <div class="info-item"> Total Copies: ${this.#copies}</div>
        `;
    }
}