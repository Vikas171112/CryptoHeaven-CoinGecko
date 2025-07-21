import axiosInstance from "../cofigurations/axiosInstance";

export async function fetchGlobalMarketData() {
  try {
    const response = await axiosInstance.get("/global");
    return response.data;
  } catch (error) {
    console.log(error, "Please check the url");
    throw error;
  }
}
