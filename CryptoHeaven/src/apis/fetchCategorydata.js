import axiosInstance from "../cofigurations/axiosInstance";

export async function fetchCategorydata() {
  try {
    const response = await axiosInstance.get(`/coins/categories`);
    return response.data;
  } catch (error) {
    console.log(error, "please check the url");
    throw error;
  }
}
