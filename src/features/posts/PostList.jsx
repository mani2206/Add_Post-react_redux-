import React from "react";
import { useSelector } from "react-redux";
import { selectAllPost } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostList = () => {
  const posts = useSelector(selectAllPost);
  
  const orderList = posts.slice().sort((a,b)=>b.date.localeCompare(a.date))
  if (!posts) throw new Error("Users not loaded");

  const renderedPost = orderList.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post?.content?.substring(0, 100)}</p>
      <div className="postCredit">
        <PostAuthor  userId={post.userId}/>
        <TimeAgo timestamp={post.date} /> 
        <ReactionButtons post ={post}/>
      </div>
    </article>
  ));

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-md-8 mx-auto">
            <section>
              <h2 className="mb-4">Posts</h2>
              {renderedPost}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostList;
