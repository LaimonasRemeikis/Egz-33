import { useEffect, useRef, useState } from "react";
import getBase64 from "../Functions/getBase64";

function Modal({ setModalData, modalData, setEditData }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  // const [category, setCategory] = useState("1");
  const [id, setId] = useState("0");
  const [remove, setRemove] = useState(false);
  const fileInput = useRef();

  const buttonHandler = () => {
    const file = fileInput.current.files[0];
    if (file) {
      getBase64(file).then(photo => {
        console.log(photo);
        setEditData({
          title,
          price,
          // category,
          id,
          photo,
          del: remove ? 1 : 0,
        });
        setModalData(null);
        setRemove(false);
      });
    } else {
      setEditData({
        title,
        price,
        // category,
        id,
        photo: '',
        del: remove ? 1 : 0,
      });
      setModalData(null);
      setRemove(false);
    }
  };

  const inputHandler = (e, which) => {
    switch (which) {
      case "title":
        setTitle(e.target.value);
        break;
      case "price":
        setPrice(e.target.value.replace(/,/g, "."));
        break;
      // case "category":
      //   setCategory(e.target.value);
      //   break;
      default:
    }
  };

  useEffect(() => {
    if (modalData === null) {
      setTitle("");
      setPrice("");
      // setCategory(1);
    } else {
      setTitle(modalData.title);
      setPrice(modalData.price);
      // setCategory(modalData.category);
      setId(modalData.id);
    }
  }, [modalData]);

  if (modalData === null) {
    return null;
  }

  return (
    <div className="modal">
    <div className="edit">
      <div className="title">
      <header className="header">
        <h1 id="title">Edit Book</h1>
        <button
            type="button"
            className="close"
            onClick={() => setModalData(null)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
      </header>
        
      </div>
     
      <form
        className="form"
      >

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
            Movie price
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
          <label id="name-label">Photo</label>
          <input ref={fileInput} type="file" className="row-input" />
        </div>
        <div className="input">
          <div className="input-photo">
            <div>
              {" "}
              <input
                type="checkbox"
                onChange={() => setRemove((remove) => !remove)}
                checked={remove}
              />
              <label>Delete Photo</label>{" "}
            </div>
            <div>
              {modalData.photo ? (
                <img className="photo" src={modalData.photo} alt="#"></img>
              ) : null}
            </div>
          </div>
        </div>
        <div className="input-btn">
          <button
            type="button"
            className=""
            onClick={buttonHandler}
          >
            Save
          </button>
          <button
            type="button"
            className=""
            onClick={() => setModalData(null)}
          >
            Cancel
          </button>
          </div>
      </form>
    </div>
  </div>
  );
}

export default Modal;
