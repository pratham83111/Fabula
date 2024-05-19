import axios from "axios"
import {ModeId} from "@/utils/utils"

 export const createUser=async(data:any)=>{
  try {
      const resoponse = await axios.post(`https://jobapi.meander.software/User/create`,data)
      console.log(resoponse)
     
      return resoponse
  } catch (error) {
    console.log(error)
    throw error;    
  }
}


 const userLogin=async(data:any)=>{
    try {
        const resoponse = await axios.post(`https://jobapi.meander.software/User/login?mode=${ModeId}`,data)
        console.log(resoponse)
       
        return resoponse
    } catch (error) {
      console.log(error)
      throw error;    
    }
}

export const getbyIdRole=async(data:any)=>{
    const {id} = data;
    try {
        const resoponse = await axios.get(`https://jobapi.meander.software/roles/getById/${id}`,data)
        console.log(resoponse)
       
        return resoponse
    } catch (error) {
      console.log(error)
      throw error;    
    }
}


export const forgotPassword = async(data:any)=>{
  try {
    const resoponse = await axios.post("https://jobapi.meander.software/admin/forgot-password",data)
        console.log(resoponse)
        return resoponse
  } catch (error) {
    console.log(error)
    throw error;
  }
}

export const verifyOTP = async(data:any)=>{
  try {
    const resoponse = await axios.post("https://jobapi.meander.software/admin/verifyOTP",data)
        console.log(resoponse)
        return resoponse
  } catch (error) {
    console.log(error)
    throw error;
  }
}
export default userLogin    