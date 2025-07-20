import axiosInstance from "../cofigurations/axiosInstance";

export async function fetchExchangeDetails(id) {
  try {
    const response = await axiosInstance.get(`/exchanges/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
    throw error;
  }
}
