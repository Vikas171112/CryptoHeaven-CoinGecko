import axiosInstance from "../cofigurations/axiosInstance";

export async function fetchtrendingcoinData(currency) {
  try {
    const response = await axiosInstance.get("/search/trending");
    return response.data;
  } catch (error) {
    console.log(error, "please check the url");
    throw error;
  }
}
