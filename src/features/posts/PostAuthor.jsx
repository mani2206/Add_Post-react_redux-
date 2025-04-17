import { useSelector } from "react-redux";
import React from "react";
import {selectAllUsers} from "../users/userSlice";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers) || [];
  if (!users) throw new Error("Users not loaded");

  const author = users.find(user => user.id === userId);
  return (
    <>
      <span className="text-danger">
       by {author ? author.name : "Unknow Author"}
      </span>
    </>
  );
};

export default PostAuthor;
