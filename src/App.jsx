// import { pipe, compose } from "lodash/fp";
import "./App.css";
import AddPostForm from "./features/posts/AddPostForm";
import PostList from "./features/posts/PostList";

function App() {
  return (
    <>
      <div className="container">
        <AddPostForm />
        <PostList />
      </div>
    </>
  );
}

export default App;
