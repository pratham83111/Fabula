"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import  userLogin, { forgotPassword, verifyOTP,getbyIdRole, createUser }  from "../Api/AuthAPi";


interface User {
    _id:string;
    email:string;
    password:string

}

interface UserState {
  createUser : [];
    user: User[];
    forgotUser:[];
    mode:[];
  loading: boolean;
  auth:boolean;
  error: null | string;
}

const initialState: UserState = {
    user: [],
    createUser:[],
  loading: false,
  auth:false,
  error: null,
  forgotUser:[],
  mode:[],
};


export const createUserSlice = createAsyncThunk<User[], any>(
  'Auth/createLoginSlice',
  async (data: any) => {
    try {
      const response: AxiosResponse<any, any> | undefined = await createUser(data);
      return response.data as User[];
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }
);

export const createLoginSlice = createAsyncThunk<User[], any>(
  'Auth/createLoginSlice',
  async (data: any) => {
    try {
      const response: AxiosResponse<any, any> | undefined = await userLogin(data);
      return response.data as User[];
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }
);

export const createForgotSlice = createAsyncThunk<User[], any>(
  'Auth/createForgotSlice',
  async (data: any) => {
    try {
      const response: AxiosResponse<any, any> | undefined = await forgotPassword(data);
      return response.data as User[];
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }
);

export const createOTPverfiySlice = createAsyncThunk<User[], any>(
  'Auth/createOTPverfiySlice',
  async (data: any) => {
    try {
      const response: AxiosResponse<any, any> | undefined = await verifyOTP(data);
      return response.data as User[];
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }
);export const creategetByIdRoleSlice = createAsyncThunk<User[], any>(
    'Auth/createOTPverfiySlice',
    async (data: any) => {
      try {
        const response: AxiosResponse<any, any> | undefined = await getbyIdRole(data);
        return response.data as User[];
      } catch (error) {
        console.error("Error creating user:", error);
        throw error;
      }
    }
  );
  

  
 
 
const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(createUserSlice.fulfilled, (state, action:any) => {
      
      state.createUser = action.payload;
      // state.createUser.push(action.payload as any) ;
      state.loading = false;
      state.auth = true
    })
    .addCase(createUserSlice.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(createUserSlice.rejected, (state, action) => {
      state.loading = false;
      state.error = "error";
    })

      .addCase(createLoginSlice.fulfilled, (state, action:any) => {
        // state.Subscription = action.payload;
        state.user.push(action.payload);
        state.loading = false;
        state.auth = true
      })
      .addCase(createLoginSlice.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createLoginSlice.rejected, (state, action) => {
        state.loading = false;
        state.error = "error";
      })
      .addCase(createForgotSlice.fulfilled, (state, action:any) => {
        state.forgotUser = action.payload
        state.loading = false;
      })
      .addCase(createForgotSlice.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createForgotSlice.rejected, (state, action) => {
        state.loading = false;
        state.error = "error";
      })
      .addCase(createOTPverfiySlice.fulfilled, (state, action:any) => {
        state.loading = false;
        state.auth = true

      })
      .addCase(createOTPverfiySlice.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createOTPverfiySlice.rejected, (state, action) => {
        state.loading = false;
        state.error = "error";
      })
      
   
     
}});

export default AuthSlice.reducer;
