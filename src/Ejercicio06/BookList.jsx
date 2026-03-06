import Book from "./Book";
import books from "./llibres";

function bookList() {
    const getBook = (id) =>{
        const book = books.find((b) => b.id === id);
        console.log(book)
    }
    return (
    <>
        <h1>Lista de libros</h1>
        <section className='booklist'>
            {books.map((book, index) => {
                return <Book {...book} key={book.id} getBook={getBook} number={index} />;
            })}
        </section>
    </>
    );
}

export default bookList;