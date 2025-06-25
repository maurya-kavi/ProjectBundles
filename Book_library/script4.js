async function fetchBooks() {
    try {
        const response = await fetch("https://api.freeapi.app/api/v1/public/books");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const bookData = await response.json();
        console.log(bookData);
        displayBooks(bookData);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayBooks(bookData) {
    if (!bookData || !bookData.data || bookData.data.length === 0) {
        console.error("No book data available");
        return;
    }
    
    const sbook = bookData.data[0]; // Access the first book
    const card = document.getElementById("bookContainer");
    card.innerHTML = ""; // Clear previous content
    
    const bookName = sbook.title || "Unknown Title";
    const bookImage = sbook.image || "https://via.placeholder.com/300";
    const bookAuthor = sbook.author || "Unknown Author";

    // Creating elements dynamically
    const heading = document.createElement("h1");
    heading.innerHTML = bookName;
    card.appendChild(heading);
    
    const bookImg = document.createElement("img");
    bookImg.src = bookImage;
    bookImg.alt = "Book Cover";
    card.appendChild(bookImg);
    
    const authorList = document.createElement("ul");
    card.appendChild(authorList);

    const bAuthor = document.createElement("li");
    bAuthor.innerText = `Author: ${bookAuthor}`;
    authorList.appendChild(bAuthor);
}

fetchBooks();
