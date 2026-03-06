

const bookInfo = {'author':'Autor', 'title':'Títol', 'img':'./assets/book-1.jpg'}

function BookList() {
    return (
        <section className='booklist'>
            <h2>Ejercicio2:</h2>
            <Book book={bookInfo} />
        </section>
    );
}
const Book = (props) => {
    const { img, title, author } = props.book;
    return (
        <article className='book'>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    );
};
export default BookList;