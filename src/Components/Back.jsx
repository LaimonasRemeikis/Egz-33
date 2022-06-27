import { useEffect, useState } from "react";
import axios from "axios";
import Create from "./Create";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import BookLine from "./BookLine";
import NewCategory from "./NewCategory";
import Category from "./Category";

function Back() {
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const [createData, setCreateData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [modalData, setModalData] = useState(null);

  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3005/categories-manager").then((res) => {
      console.log(res.data);
      setCategories(res.data);
    });
  }, [lastUpdate]);

  // Read
  useEffect(() => {
    axios.get("http://localhost:3005/books-manager").then((res) => {
      console.log(res.data);
      setBooks(res.data);
    });
  }, [lastUpdate]);

  //Create
  useEffect(() => {
    if (null === createData) {
      return;
    }
    axios
      .post("http://localhost:3005/books-manager", createData)
      .then((res) => {
        console.log(res);
        setLastUpdate(Date.now());
      });
  }, [createData]);

  //Edit
  useEffect(() => {
    if (null === editData) {
      return;
    }
    axios
      .put("http://localhost:3005/books-manager/" + editData.id, editData)
      .then((res) => {
        console.log(res);
        setLastUpdate(Date.now());
      });
  }, [editData]);

  //Delete
  useEffect(() => {
    if (null === deleteId) {
      return;
    }
    axios
      .delete("http://localhost:3005/books-manager/" + deleteId.id)
      .then((res) => {
        console.log(res);
        setLastUpdate(Date.now());
      });
  }, [deleteId]);

  return (
    <>
      <div className="back-container">
        <Create setCreateData={setCreateData}></Create>
        <div className="table-container">
        <div className="header">
        <h1 id="title">Books list</h1>
      </div>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Category</th>
                <th>Ranking</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="list-group">
              {books.map((book) => (
                <BookLine
                  key={book.id}
                  book={book}
                  setDeleteId={setDeleteId}
                  setModalData={setModalData}
                ></BookLine>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal
        setEditData={setEditData}
        setModalData={setModalData}
        modalData={modalData}
      ></Modal>
       <div className="back-office">
<NewCategory onSubmit={setLastUpdate}></NewCategory>
      <div className="back-container">
        <div className="table-container">
          <div className="header">
            <h1 id="title">Categories list</h1>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody className="list-group">
              {categories.map((category) => (
                <Category
                  key={category.id}
                  category={category}
                  setDeleteId={setDeleteId}
                ></Category>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
      <button>
        <Link to= '/logout'>LogOUT </Link>
      </button>
    </>
  );
}

export default Back;
