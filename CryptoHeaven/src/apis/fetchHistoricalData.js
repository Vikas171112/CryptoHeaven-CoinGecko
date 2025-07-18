// src/apis/fetchHistoricalData.js
import axiosInstance from "../cofigurations/axiosInstance";

// Correct endpoint!
export async function fetchcoinHistoricalData(currency, days, id) {
  try {
    const response = await axiosInstance.get(
      `/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`
    );
    return response.data;
  } catch (error) {
    console.log(error, "please check the url");
    throw error;
  }
}
