import axiosInstance from "../cofigurations/axiosInstance";

export async function fetchExchangeList(page, per_page) {
  try {
    const response = await axiosInstance.get(
      `/exchanges?page=${page}&per_page=${per_page}`
    );
    return response.data;
  } catch (error) {
    console.log(error, "please check the url");
    throw error;
  }
}
