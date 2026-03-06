
const Book = (props) => {
    const { img, title, author, id, number, getBook} = props;
    return (
        <article className='book'>
            <span className='number'>{`# ${number + 1}`}</span>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <button type='button' onClick={() => getBook(id)}>Troba</button>
            <h4>{author} </h4>
        </article>
    );
};

export default Book;