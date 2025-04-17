import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { postAdded } from "./postSlice";
import { useState } from "react";
import { selectAllUsers } from "../users/userSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const onSavePostClicked = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(postAdded(title, content, userId));
    }
    setTitle("");
    setContent("");
    setUserId("");
  };

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 col-md-8 mx-auto">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Add New Post</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="postTitle" className="form-label">
                    Post Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChange}
                    placeholder="Enter Title"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="postAuthor" className="form-label">
                    Author
                  </label>
                  <select
                    id="postAuthor"
                    className="form-select"
                    value={userId}
                    onChange={onAuthorChanged}
                  >
                    <option value="">Select an author</option>
                    {userOptions}
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="postContent" className="form-label">
                    Content
                  </label>
                  <textarea
                    className="form-control"
                    id="postContent"
                    name="postContent"
                    rows="3"
                    value={content}
                    onChange={onContentChange}
                    placeholder="Enter Content"
                  />
                </div>

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={onSavePostClicked}
                  disabled={!canSave}
                >
                  Add Post
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPostForm;