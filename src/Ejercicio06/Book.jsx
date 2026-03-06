

const Book = (props) => {
    const { img, title, author } = props;
    return (
        <article className="book">
            <Image img={img} title={title}/>
            <Title title={title}/>
            <Author author={author}/>
        </article>
    );
};

const Image = (props) => {
    const { img, title } = props;
    return <img src={img} alt={title} />;
}

const Title = (props) => {
    const { title } = props;
    return <h2>{title}</h2>;
};

const Author = (props) => {
    const { author } = props;
    return <h4>{author}</h4>;
};

export default Book;