import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
const BookList = () => {
  return (
    <section className="booklist">
      <Book author={author} title={title} img={img} alt={title} />
      <Book author={author} title={title} img={img} alt={title} />
    </section>
  );
};
const title = "The Good Daughter";
const author = "Karin Slaughter";
const img = "https://m.media-amazon.com/images/I/412nNS-i0qL._SY445_SX342_.jpg";
const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>;<h4>{props.author} </h4>;
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
