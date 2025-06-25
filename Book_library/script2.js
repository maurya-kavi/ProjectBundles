
async function fetchBooks() {
    try {
      const response = await fetch("https://api.freeapi.app/api/v1/public/books");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const book = await response.json();
      console.log(book);
      // displayBooks(book);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
}

fetchBooks();

// function displayBooks(book){
//   const sbook = book.data[0];
//   const card = document.getElementById("bookContainer");
    
//     const bookName = sbook.;
//     const heading = document.createElement("h1");
//     heading.innerHTML = bookName;
//     card.appendChild(heading);
    
//     const bookImg = document.createElement("img");
//     bookImg.src = sbook.;
//     card.appendChild(bookImg);
   

//     const authorandtitle = document.createElement("ul");
//     card.appendChild(authorandtitle);

//     const bAuthor = document.createElement('li');
//     const bTitle = document.createElement('li');


//     bAuthor.innerText=sbook.;
//     bTitle.innerText=sbook.;

//     authorandtitle.appendChild(bAuthor);
//     authorandtitle.appendChild(bTitle);
    
// }