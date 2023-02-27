import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/actionPosts";

const Form = () => {
  const [postData, setPostData] = useState({
    title: "",
    creator: "",
    tags: "",
    selectedFile: "",
    message: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
    console.log("handle submit", postData);
  };
  const clearForm = () => {};
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          name="title"
          value={postData.title}
          placeholder="Title"
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <input
          className="form-input"
          type="text"
          value={postData.tags}
          name="tags"
          placeholder="tags"
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <input
          className="form-input"
          type="text"
          name="creator"
          value={postData.creator}
          placeholder="creator"
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <textarea
          className="form-textarea"
          name="message"
          value={postData.message}
          placeholder="message"
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        ></textarea>
        <div className="image-upload">
          <FileBase64
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
          {postData.selectedFile && (
            <img src={postData.selectedFile} alt="uploaded" />
          )}
        </div>
        <div className="form-buttons">
          <button className="form-button" type="submit">
            Submit
          </button>
          <button className="form-button" type="button" onClick={clearForm}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
