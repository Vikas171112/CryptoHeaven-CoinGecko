import axiosInstance from "../cofigurations/axiosInstance";

export async function fetchcoinData(currency) {
  try {
    const response = await axiosInstance.get(
      `/coins/markets/?vs_currency=${currency}`
    );
    return response.data;
  } catch (error) {
    console.log(error, "please check the url");
    throw error;
  }
}
