import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import '../assets/movies.scss'

function Book({ saveVote}) {

  const imdb = (book) => {
    if (book.rating_count === 0) {
      return 0;
    } else return book.rating_sum / book.rating_count;
  };


  // const [lastUpdate, setLastUpdate] = useState(Date.now());
  
  const [book, setBook]=useState(null)
  
   let params= useParams()
   console.log(params)
   useEffect(() => {
    axios.get('http://localhost:3005/books-manager/' + params.id, params).then((res) => {
      console.log(res.data);
      setBook(res.data);
      console.log(book);
    });
  }, []);

  if(!book) return <p>loading</p>

  return (
    
    <div className="movies-card">
      <div className="card-content">
          
          <div className="image-place">
                          <img id="card-img" src={book.photo}></img>
                      </div>
            <div className="card-text">
            <h5>{book.title}</h5>
            {/* <span>{movie.price} Euro</span> */}
            {/* <span>
              {
                ["documentary", "family", "animation", "drama", " horror"][
                  movie.category - 1
                ]
              }
            </span> */}
            <StarRatings
              starDimension= '25px'
              rating={imdb(book)}
              starRatedColor="yellow"
              changeRating={(newValue) => saveVote(book.id, newValue)}
              numberOfStars={5}
              name="rating"
            />
            </div>
      </div>
    </div>

  );
}

export default Book;

