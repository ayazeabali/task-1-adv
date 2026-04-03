# 📚 Library Management System (Task 1 Adv)

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/OOP-Implementation-success?style=for-the-badge" alt="OOP" />
</p>

## 📖 Overview
An educational Electronic Library Management System built from scratch using **Vanilla TypeScript**. This project focuses on implementing core **Object-Oriented Programming (OOP)** principles to manage a collection of books, including specialized reference materials.

---

## 🚀 Getting Started | Installation

Follow these steps to run the project locally:

### 1. Prerequisites
Ensure you have the TypeScript compiler installed:
```bash
npm install -g typescript
2. Setup & Execution
# Clone the repository
git clone [https://github.com/YOUR_USERNAME/task-1-adv.git](https://github.com/YOUR_USERNAME/task-1-adv.git)

# Navigate to project directory
cd task-1-adv

# Compile TypeScript to JavaScript
tsc main.ts

# Launch the Application
# Simply open index.html in your preferred browser.
🏗️ Core OOP ImplementationThis project strictly follows the required OOP pillars as per the task guidelines:PrincipleImplementation DetailsEncapsulationUsed private class fields (#) to protect internal data from direct external access.InheritanceCreated a ReferenceBook class that extends the base Book class.PolymorphismOverrode the displayInfo() method in ReferenceBook to include locationCode.AbstractionDesigned classes to interact via dedicated methods (e.g., addBook, searchBooks) instead of direct property manipulation.🎨 UI FeaturesInteractive Cards: Displays book details (Title, Author, Category, and Availability).Search Engine: Filter books in real-time by Name or Author.Category Filtering: A dropdown menu to organize books by genre.Status Toggle: Instantly switch between "Available" and "Not Available".📂 Project StructurePlaintexttask-1-adv/
├── screenshots/        # Project UI previews
├── main.ts             # Core TypeScript logic (OOP Classes)
├── main.js             # Compiled JavaScript
├── style.css           # Vanilla CSS styling
├── index.html          # Main UI structure
└── README.md           # Documentation
📸 Screenshots:
### Home Screen
![Home](./screenshotes/Home.png)

### Add Book
![Add Book](./screenshotes/add_book.png)

### View Details
![Details](./screenshotes/view%20detailes.png)
