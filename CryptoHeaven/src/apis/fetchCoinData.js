import axiosInstance from "../cofigurations/axiosInstance";

export async function fetchcoinData(currency, per_page = 10, page = 1) {
  try {
    const response = await axiosInstance.get(
      `/coins/markets/?vs_currency=${currency}&per_page=${per_page}&page=${page}`
    );
    return response.data;
  } catch (error) {
    console.log(error, "please check the url");
    throw error;
  }
}
