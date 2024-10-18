import { TProduct } from "@customTypes/product";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse = TProduct[]



const actGetProductsCatByPrefix = createAsyncThunk("categories/actGetProductsCatByPrefix",async(prefix:String,thunkAPI)=>{
const {rejectWithValue} =thunkAPI
  try {
  const response = await axios.get<TResponse>(`http://localhost:5005/products?cat_prefix=${prefix}`);
  return response.data
} catch (error) {
  if (axios.isAxiosError(error)) {
    return rejectWithValue(error.response?.data.message || error.message)
  }else{
    return rejectWithValue("An expected error")
  }
}
})
export default actGetProductsCatByPrefix;