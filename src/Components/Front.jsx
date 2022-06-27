import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./Navbar";
import BookLine from "./front/BookLine";


function Front({ show }) {
  const [books, setBooks] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(Date.now()); // state

  // Read
  useEffect(() => {
    axios.get("http://localhost:3005/books-list/" + show).then((res) => {
      console.log(res.data);
      setBooks(res.data);
    });
  }, [show, lastUpdate]);

  const saveVote = (id, value) => {
    axios
      .put("http://localhost:3005/books-vote/" + id, { vote: value })
      .then((res) => {
        setLastUpdate(Date.now());
      });
  };

  return (
    <>
      <div className="container">
      <Navbar></Navbar>
        {/* <nav className="navbar ">
          <Link className="nav-link" to="/">
          Movies rent
          </Link>
          <Link className="nav-link" to="/Documentary">
            Documentary
          </Link>
          <Link className="nav-link" to="/Family">
            Family
          </Link>
          <Link className="nav-link" to="/Animation">
            Animation
          </Link>
          <Link className="nav-link" to="/Drama">
            Drama
          </Link>
          <Link className="nav-link" to="/Horror">
            Horror
          </Link>
        </nav> */}
      </div>

     <div className="movies-container">
     {books.map((book) => (
          <BookLine
            key={book.id}
            book={book}
            saveVote={saveVote}
          ></BookLine>
        ))}
     </div>
    </>
  );
}

export default Front;
