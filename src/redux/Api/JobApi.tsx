import axios from "axios";

const BaseUrl = 'https://jobapi.meander.software/'



export const create_job = async (data: any) => {
  const { values } = data;
  
  try {
   
    const user: any = localStorage.getItem("IsLoginData");
    const parsedUser = JSON.parse(user);
    const token = parsedUser.token;

    // Get modeId from localStorage
    const modeId = localStorage.getItem("modeid");

    console.log("Token:", token);
    console.log("Mode ID:", modeId);

    if (!token) {
      throw new Error("No authentication token found. Please log in.");
    }

    if (!modeId) {
      throw new Error("No mode ID found in localStorage.");
    }

    const requestData = {
      ...values,
      modeId,
    };

    const response = await axios.post(
      `${BaseUrl}jobs/create`,
      requestData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(response);
    return response;
  } catch (error) {
    console.error("Error creating job:", error);
    throw error;
  }
};





export const getAlljobs = async () => {
  try {
 
    const modeId = localStorage.getItem("modeid");

    if (!modeId) {
      throw new Error("No mode ID found in localStorage.");
    }

   
    const response = await axios.get(
      `${BaseUrl}jobs/getall?page_number=1&page_size=11`
    );

    console.log("woooo",response.data.data)

    const filteredJobs = response.data.data.filter((job: any) => job.userId.mode === modeId);
    console.log("gajab",filteredJobs)

    return filteredJobs;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
};

export const updateJobs = async (data:any) => {
  const { editId , values } = data;
  console.log("valuesvaluesvaluesvalues",values);
  
 
  try {
    const user:any = localStorage.getItem("IsLoginData");
    const parsedUser = JSON.parse(user);
    const token = parsedUser.token;
    
    // console.log(token)
    
    if (!token) {
      throw new Error("No authentication token found. Please log in.");
    }
    const response:any = await axios.put(`${BaseUrl}jobs/updateJob/${editId}`, values,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("responseresponseresponse",response);
    
    return response.data; 
  } catch (error) {
    console.error("Error updating job:", error);
    throw error; // Throw the error to handle it elsewhere
  }
}



export const deleteJobs = async (id: any) => {
  console.log(id);
  try {
    const user: any = localStorage.getItem("IsLoginData");
    const parsedUser = JSON.parse(user);
    const token = parsedUser.token;

    if (!token) {
      throw new Error("No authentication token found. Please log in.");
    }

    const response: any = await axios.delete(
      `${BaseUrl}jobs/deleteJob/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting job:", error);
    throw error;
  }
};

export const viewJobs = async (id: any) => {
  console.log(id);
  try {
    const user: any = localStorage.getItem("IsLoginData");
    const parsedUser = JSON.parse(user);
    const token = parsedUser.token;
    console.log("sssssss",token)

    if (!token) {
      throw new Error("No authentication token found. Please log in.");
    }

    // const response: any = await axios.get(
    //   `${BaseUrl}jobs/getById/${id}`,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   }
    // );
    const response = await axios.get(
      `${BaseUrl}jobs/getById/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    
    if (!response.data || response.data.error) {
      throw new Error("Failed to fetch job details");
    }
    
    return response.data;
    
    // return response.data;
  } catch (error) {
    console.error("Error Viewing job:", error);
    throw error;
  }
};






