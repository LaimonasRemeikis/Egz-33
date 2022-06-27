import axios from "axios";
import { useState } from "react";


function NewCategory({onSubmit}) {
 
   const [name, setName] = useState('');
   



  const selectHandler = (e, which) => {
    console.log(e.target.value)
    switch (which) {
      case "name":
        setName(e.target.value);
        break;
        default:

    }
  }

  const addCategory = () => {
    axios
    .post("http://localhost:3005/library-manager/categories", {name})
    .then((res) => {
      console.log(res);
      onSubmit(Date.now());
    });
  }

  return (
    <div className="card-admin">
      <header className="header">
        <h1 id="title">Add New Category</h1>
      </header>
      <div id="form-container">
      <div className="question-container">
          <label id="name-label" className="question-label">
            Category
          </label>
          <input
            type="text"
            className="row-input"
            placeholder="Enter your  category name"
            required
            onChange={(e) => selectHandler(e, "name")}
            value={name}
          />
        </div>
        <div>
          <button onClick={addCategory}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default NewCategory;
