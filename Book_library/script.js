const bookContainer = document.getElementById("bookContainer");
const searchBar = document.getElementById("searchBar");
const sortOptions = document.getElementById("sortOptions");
const listViewBtn = document.getElementById("listViewBtn");
const gridViewBtn = document.getElementById("gridViewBtn");

let books = []; // Store books globally

// Fetch books from API
async function fetchBooks() {
    try {
        const response = await fetch("https://api.freeapi.app/api/v1/public/books"); // Fixed API URL
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        
        const data = await response.json();
        console.log(data); // Adjust based on actual API response structure
        displayBooks(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Display books in list or grid format
function displayBooks(bookList, view = "grid") {
    bookContainer.innerHTML = ""; // Clear previous content

    if (view === "grid") {
        bookContainer.className = "bookGrid"; // Apply grid class
        bookList.forEach(book => {
            const bookDiv = document.createElement("div");
            bookDiv.classList.add("book-item");
            bookDiv.innerHTML = `
                <h3>${book.title}</h3>
                <p><strong>Author:</strong> ${book.author || "Unknown"}</p>
                <p><strong>Published:</strong> ${book.publishedDate || "N/A"}</p>
            `;
            bookContainer.appendChild(bookDiv);
        });
    } else {
        bookContainer.className = "bookList"; // Apply list class
        const ul = document.createElement("ul");
        bookList.forEach(book => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${book.title}</strong> - ${book.author || "Unknown"} (${book.publishedDate || "N/A"})`;
            ul.appendChild(li);
        });
        bookContainer.appendChild(ul);
    }
}

// Search books
searchBar.addEventListener("input", () => {
    const searchTerm = searchBar.value.toLowerCase();
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm) ||
        (book.author && book.author.toLowerCase().includes(searchTerm))
    );
    displayBooks(filteredBooks);
});

// Sort books
sortOptions.addEventListener("change", () => {
    const sortBy = sortOptions.value;
    const sortedBooks = [...books].sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
    displayBooks(sortedBooks);
});

// Toggle views
listViewBtn.addEventListener("click", () => displayBooks(books, "list"));
gridViewBtn.addEventListener("click", () => displayBooks(books, "grid"));

// Initial fetch
fetchBooks();

