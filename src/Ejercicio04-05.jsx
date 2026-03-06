
import './styles.css'
const books = [
  {
    author: 'Ursula K. Le Guin',
    title: 'Els desposseïts',
    img: './images/book-1.jpg',
    id: 1,
  },
  {
    author: 'Octavia Butler',
    title: 'La parábola del sembrador',
    img: 'https://capitanswing.com/wp-content/uploads/Octavia-Butler-La-parabola-del-sembrador.jpg',
    id: 2,
  },
  {
    author: 'Nnedi Okorafor',
    title: 'Binti: Fuego Sagrado',
    img: 'https://shop.crononauta.es/cdn/shop/products/BINTI_SACRED_FIRE_1.png',
    id: 3,
  },
];

function Ejercicio04() {
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

export default Ejercicio04