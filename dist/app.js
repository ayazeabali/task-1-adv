/**
 * @function render
 * @description Dynamic UI rendering.
 * Notice the use of POLYMORPHISM: calling book.displayInfo() will execute
 * different logic depending on whether the object is a Book or ReferenceBook.
 */
import { Library } from "./Library.js";
import { Book } from "./Book.js";
import { ReferenceBook } from "./ReferenceBook.js";
const myLibrary = new Library();
myLibrary.addBook(new Book("Clean Code", "Robert C. Martin", "Programming"));
myLibrary.addBook(new ReferenceBook("Oxford Dictionary", "Oxford Press", "Languages", "Shelf-A1"));
myLibrary.addBook(new Book("Sapiens", "Yuval Noah Harari", "History"));
const bookGrid = document.getElementById("bookGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const modal = document.getElementById("formModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeBtn = document.querySelector(".close-btn");
openModalBtn.onclick = () => {
    modal.style.display = "block";
};
closeBtn.onclick = () => {
    modal.style.display = "none";
};
window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
function render() {
    const term = searchInput.value;
    const cat = categoryFilter.value;
    let books = myLibrary.searchBooks(term);
    if (cat !== "all") {
        books = books.filter(b => b.category === cat);
    }
    bookGrid.innerHTML = "";
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
        bookGrid.appendChild(card);
    });
}
window.toggleStatus = (title) => {
    myLibrary.toggleAvailability(title);
    render();
};
window.deleteBook = (title) => {
    if (confirm("Are you sure you want to delete this book?")) {
        myLibrary.removeBook(title);
        render();
    }
};
searchInput.addEventListener("input", render);
categoryFilter.addEventListener("change", render);
const addBtn = document.getElementById("addBtn");
addBtn?.addEventListener("click", () => {
    const t = document.getElementById("newTitle").value;
    const a = document.getElementById("newAuthor").value;
    const c = document.getElementById("newCat").value;
    const l = document.getElementById("newLoc").value;
    if (t && a) {
        const b = l ? new ReferenceBook(t, a, c, l) : new Book(t, a, c);
        myLibrary.addBook(b);
        render();
        modal.style.display = "none";
        document.getElementById("newTitle").value = "";
        document.getElementById("newAuthor").value = "";
        document.getElementById("newLoc").value = "";
    }
    else {
        alert("Please fill Title and Author");
    }
});
render();
