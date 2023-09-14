// OOP --> Object Oriented Programming

// Sketsa / Blueprint
class Book {

    constructor(title, author, year) {
        this.title = title;
        this.year = year;
        this.author = author;
    }
} 

// Database books
const bookList = [
    new Book("Lord of the Rings", "Tolkien", 2001),
    new Book("Mocking Jay", "Suzanne Collins", 2014),
    new Book("Harry Potter", "Rowling", 2007)
]

// Kalau pagenya sudah selesai loading, maka codingan dibawah akan tereksekusi
window.addEventListener("load", (event) => {

    // DOM --> Document Object Model

    const titleInput = document.getElementById("input-title")
    const authorInput = document.getElementById("input-author")
    const yearInput = document.getElementById("input-year")

    const submitButton = document.getElementById("submit-button")

    const tableBody = document.getElementById("table-body")

    renderData(tableBody)

    submitButton.addEventListener("click", (e) => {


        // Object new Book
        const newBook = new Book(titleInput.value, authorInput.value, yearInput.value);

        bookList.push(newBook);

        renderData(tableBody)
    })
})

const renderData = (tableBody) => {

    // Reset Data table body
    tableBody.innerHTML = ""

    for(let i = 0; i < bookList.length; i++) {
        let row = tableBody.insertRow(i);

        let currentBook = bookList[i];

        // td number
        let numberCell = row.insertCell(0)

        // td title
        let titleCell = row.insertCell(1);

        // td author
        let authorCell = row.insertCell(2);

        // td year
        let yearCell = row.insertCell(3);

        // td action
        let actionCell = row.insertCell(4);

        numberCell.innerHTML = i + 1;
        titleCell.innerHTML = currentBook.title;
        authorCell.innerHTML = currentBook.author;
        yearCell.innerHTML = currentBook.year;

        let deleteButton = document.createElement("button");
        deleteButton.classList.add("bg-red-500", "rounded-xl", "px-3")
        deleteButton.textContent = "DELETE"
        deleteButton.addEventListener("click", (e) => {
            
            const rowElement = e.target.parentElement.parentElement
            const titleElement = rowElement.children[1]
            // const titleElement = rowElement.child

            // Hapus melalui array bookList

            bookList.forEach((book, index) => {
                if(book.title === titleElement.textContent) {
                    // HAPUS ROW atau Baris
                    bookList.splice(index, 1);
                }
            })

            // render ulang
            renderData(tableBody)
        })

        actionCell.append(deleteButton)
    }

}