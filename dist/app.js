import { Library } from "./Library.js";
import { Book } from "./Book.js";
import { ReferenceBook } from "./ReferenceBook.js";
import { BookCategory } from "./BookCategory.js";
const myLibrary = new Library();
myLibrary.addBook(new Book("Clean Code", "Robert C. Martin", BookCategory.Programming));
myLibrary.addBook(new ReferenceBook("Oxford Dictionary", "Oxford Press", BookCategory.Languages, "Shelf-A1"));
myLibrary.addBook(new Book("Sapiens", "Yuval Noah Harari", BookCategory.History));
const elements = {
    bookGrid: document.getElementById("bookGrid"),
    searchInput: document.getElementById("searchInput"),
    categoryFilter: document.getElementById("categoryFilter"),
    modal: document.getElementById("formModal"),
    openModalBtn: document.getElementById("openModalBtn"),
    closeBtn: document.querySelector(".close-btn"),
    addBtn: document.getElementById("addBtn"),
    inputs: {
        title: document.getElementById("newTitle"),
        author: document.getElementById("newAuthor"),
        category: document.getElementById("newCat"),
        location: document.getElementById("newLoc"),
    }
};
elements.openModalBtn.onclick = () => elements.modal.style.display = "block";
elements.closeBtn.onclick = () => elements.modal.style.display = "none";
window.onclick = (event) => {
    if (event.target === elements.modal)
        elements.modal.style.display = "none";
};
function render() {
    const searchTerm = elements.searchInput.value.toLowerCase();
    const selectedCat = elements.categoryFilter.value;
    let books = myLibrary.filterByCategory(selectedCat);
    if (searchTerm) {
        books = books.filter(b => b.title.toLowerCase().includes(searchTerm) ||
            b.author.toLowerCase().includes(searchTerm));
    }
    elements.bookGrid.innerHTML = "";
    const fragment = document.createDocumentFragment();
    books.forEach(book => {
        const card = document.createElement("div");
        card.className = `card ${!book.isAvailable ? "unavailable" : ""}`;
        card.innerHTML = `
            <div class="card-header">
                <h3>${book.title}</h3>
                <span class="badge">${book.category}</span>
            </div>
            <p class="author">By: ${book.author}</p>
            
            <div class="extra-info-panel">
                ${book.displayInfo()} 
            </div>

            <div class="status-box">
                <span class="status-dot ${book.isAvailable ? 'online' : 'offline'}"></span>
                ${book.isAvailable ? "Available" : "Checked Out"}
            </div>

            <div class="actions">
                <button class="info-btn" onclick="this.parentElement.previousElementSibling.previousElementSibling.classList.toggle('show')">
                    View Details
                </button>
                <button class="toggle-btn" onclick="window.toggleStatus('${book.title.replace(/'/g, "\\'")}')">
                    ${book.isAvailable ? "Borrow" : "Return"}
                </button>
                <button class="del-btn" onclick="window.deleteBook('${book.title.replace(/'/g, "\\'")}')">
                    Delete
                </button>
            </div>
        `;
        fragment.appendChild(card);
    });
    elements.bookGrid.appendChild(fragment);
}
window.toggleStatus = (title) => {
    myLibrary.toggleAvailability(title);
    render();
};
window.deleteBook = (title) => {
    if (confirm(`Are you sure you want to delete "${title}"?`)) {
        myLibrary.removeBook(title);
        render();
    }
};
elements.searchInput.addEventListener("input", render);
elements.categoryFilter.addEventListener("change", render);
elements.addBtn?.addEventListener("click", () => {
    const { title, author, category, location } = elements.inputs;
    const titleVal = title.value.trim();
    const authorVal = author.value.trim();
    const locationVal = location.value.trim();
    if (titleVal && authorVal) {
        const catValue = category.value;
        const newBook = locationVal
            ? new ReferenceBook(titleVal, authorVal, catValue, locationVal)
            : new Book(titleVal, authorVal, catValue);
        myLibrary.addBook(newBook);
        render();
        elements.modal.style.display = "none";
        title.value = "";
        author.value = "";
        location.value = "";
    }
    else {
        alert("Please fill Title and Author");
    }
});
render();
