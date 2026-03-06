import { createSlice } from "@reduxjs/toolkit";
import type { Comment } from "../../types/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getComments } from "../../lib/GetComments";



interface InitialState {
    comments: Comment[]
}

const initialState: InitialState = {
    comments: getComments()
}


export const commentSlice =  createSlice({
    name : "comment-slice",
    initialState,
    reducers : {
        postComment: (state, action: PayloadAction<Comment>) => {
            state.comments.push(action.payload)
            localStorage.setItem("comments", JSON.stringify(state.comments))
        }
    }
})

export default commentSlice.reducer

export const {postComment} = commentSlice.actions