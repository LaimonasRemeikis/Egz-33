function BookLine({ book, setDeleteId, setModalData }) {
  const imdb = (book) => {
    if (book.rating_count === 0) {
      return Number(0).toFixed(2);
    } else return (book.rating_sum / book.rating_count).toFixed(2);
  };

  return (
    <tr className="list-group-item">
      <td>{book.title}</td>
      <td>{book.price} Euro</td>
      <td>
        {
          book.category
        }
      </td>
      <td>{imdb(book)} votes</td>

      <td className="tree-line__buttons">
        <button
          type="button"
          className="btn"
          onClick={() => setModalData(book)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => setDeleteId({ id: book.id })}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default BookLine;
