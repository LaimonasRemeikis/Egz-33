import { useRef, useState } from "react";
import getBase64 from "../Functions/getBase64";

function Create({ setCreateData }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const[category_id, setCategory_id]= useState('1')
  const[categories, setCategories] = useState([])
  const [rating_count, setRating_count] = useState("0");
  const [rating_sum, setRating_sum] = useState("0");
  const fileInput = useRef();

  const buttonHandler = () => {
    const file = fileInput.current.files[0];

    if (file) {
      getBase64(file).then(photo => {
        console.log(photo);
        setCreateData({
          title,
          price,
          category_id,
          rating_count,
          rating_sum,
          photo,
        });
      });
    } else {
      setCreateData({
        title,
        price,
        category_id,
        rating_count,
        rating_sum,
        photo: null,
      });
    }
    setTitle("");
    setPrice("");
    // setCategory(1);
  };

  const inputHandler = (e, which) => {
    switch (which) {
      case "title":
        setTitle(e.target.value);
        break;
      case "price":
        setPrice(e.target.value.replace(/,/g, "."));
        break;
      case "category":
        setCategory_id(e.target.value);
        break;
      default:
    }
  };

  return (
    <div className="card-admin">
      <header className="header">
        <h1 id="title">Add New Book</h1>
      </header>
      <div id="form-container">
        <div className="question-container">
          <label id="name-label" className="question-label" >
            Book title
          </label>
          <input
            type="text"
            className="row-input"
            placeholder="Enter your book title"
            required
            onChange={(e) => inputHandler(e, "title")}
            value={title}
          />
        </div>
        <div className="question-container">
          <label id="number-label" className="question-label" >
            Book price
          </label>
          <input
            id="number"
            type="number"
            className="row-input"
            min="0"
            max="350"
            onChange={(e) => inputHandler(e, "price")}
            value={price}
          />
        </div>
        <div className="question-container">
          <label className="question-label" >
            Books category
          </label>
          <select className="row-input" required value={category_id}  onChange={e => inputHandler (e, 'category_id') } name="" id="">
        <option value=''></option>
        {categories.map((category) => (
                <option value={category.id}
                  key={category.id}
                >{category.name}</option>
              ))}
          
         </select>
        </div>
        <div className="question-container">
          <label id="name-label">Photo</label>
          <input ref={fileInput} type="file" className="row-input" />
        </div>
        <div>
          <button id="submit" type="submit" onClick={buttonHandler}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
export default Create;
