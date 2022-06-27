import Back from "./Components/Back";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Front from "./Components/Front";
import "./assets/admin.scss";
import Login from "./Auth/Login";
import RequireAuth from "./Auth/RequireAuth";
import LogoutPage from "./Auth/LogoutPage";
import Book from "./Components/Book";

// import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/book/:id" element={<Book></Book>}></Route>
        <Route index element={<Front show="all" />} />
        <Route path="Documentary" element={<Front show="Documentary" />} />
        <Route path="Family" element={<Front show="Family" />} />
        <Route path="Animation" element={<Front show="Animation" />} />
        <Route path="Drama" element={<Front show="Drama" />} />
        <Route path="Horror" element={<Front show="Horror" />} />
        <Route
          path="admin"
          element={
            <RequireAuth>
              <Back />
            </RequireAuth>
          }
        ></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="logout" element={<LogoutPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
