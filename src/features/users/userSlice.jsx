import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "manikandan" },
  { id: "1", name: "rex" },
  { id: "2", name: "aruna" },
];

const userSlice= createSlice({
    name:"users",
    initialState,
    reducers:{}
})


export const selectAllUsers = (state)=>state.users;

export default userSlice.reducer 