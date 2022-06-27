import { useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";



function BookLine({ book, saveVote }) {
  const imdb = (book) => {
    if (book.rating_count === 0) {
      return 0;
    } else return book.rating_sum / book.rating_count;
  };

  const navigate = useNavigate();

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
          <button className="btn" onClick={() => navigate('/book/'+ book.id)}>View</button>
            </div>
      </div>
    </div>
  );
}

export default BookLine;
