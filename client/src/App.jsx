import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Form from "./components/forms/Form";
import Posts from "./components/posts/Posts";
import { getPosts } from "./actions/actionPosts";
import memories from "./assets/AIA.jpg";
import "./App.css";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div className="container">
      <div className="app-bar">
        <h2 className="heading">Memories</h2>
        <img className="icon" src={memories} alt="icon" height="60" />
      </div>
      <div className="grow">
        <div className="container">
          <div className="grid-container">
            <div className="grid-item">
              <Posts />
            </div>
            <div className="grid-item">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
