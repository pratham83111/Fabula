"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import {createProfile, createUsers} from '../Api/UserManagementApi';

interface UserState {
    users: any;
    user: any;
    page:any;
    loading: boolean;
    error: null | string;
  }
  
  const initialState: UserState = {
    users: [],
    user:[],
    page:1,
    loading: false,
    error: null,
  };

  
  export const createUser = createAsyncThunk<any, any>(
    'user/createUser',
    async (data: any) => {
      const {values,avatarFil}=data
      try {
        const response: AxiosResponse<any, any> | undefined = await createUsers(values);
        const imageid = response.data.data._id
        if(response.data.isSuccess){
          createProfile({imageid,avatarFil})
        }
        return response.data as any;
      } catch (error) {
        console.error("Error creating user:", error);
        throw error;
      }
    }
  );
  



  const userSlice:any = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
      setPage:(state,action)=>{
        state.page=action.payload
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(createUser.fulfilled, (state, action:any) => {
          // state.users = action.payload;
  
          state.loading = false;
        })
        .addCase(createUser.pending, (state, action) => {
          state.loading = true;
        })
        .addCase(createUser.rejected, (state, action) => {
          state.loading = false;
          state.error = "error";
        })
    },
});

export const { setPage } = userSlice.actions

export default userSlice.reducer;