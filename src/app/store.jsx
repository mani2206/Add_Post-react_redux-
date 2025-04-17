import { configureStore } from "@reduxjs/toolkit"
import PostsReducer from "../features/posts/postSlice"
import usersReducer from "../features/users/userSlice"
 
export const store = configureStore({
    reducer:{
      posts:PostsReducer,
      users:usersReducer
    }
}) 