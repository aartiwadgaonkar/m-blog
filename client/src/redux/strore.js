import { configureStore } from "@reduxjs/toolkit"
import blogSlice from "./blog/blogSlice"
import userSlice from "./user/userSlice"

const reduxStore = configureStore({
    reducer: {
        user:userSlice,
        blog:blogSlice
    }
})
export default reduxStore