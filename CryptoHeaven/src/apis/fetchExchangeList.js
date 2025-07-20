import axiosInstance from "../cofigurations/axiosInstance";

export async function fetchExchangeList() {
  try {
    const response = await axiosInstance.get("/exchanges");
    return response.data;
  } catch (error) {
    console.log(error, "please check the url");
    throw error;
  }
}
