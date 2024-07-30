import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../api"

export const addBlog = createAsyncThunk("blog/add",
    async (blog, { rejectWithValue, getState }) => {
        console.log(blog, "blog");
        try {
            const { data } = await api.post("/blog/add-blog", blog, {
                headers: {
                    authorization: getState().user.info.token
                }
            })
            console.log(data, "data");
        } catch (error) {
            return rejectWithValue(error.response.data.message || error.message)
        }
    })

export const getBlog = createAsyncThunk("blog/get",
    async (blog, { rejectWithValue, getState }) => {
        console.log(blog, "blog");
        try {
            const { data } = await api.get("/blog")
            return data.result
        } catch (error) {
            return rejectWithValue(error.response.data.message || error.message)
        }
    })