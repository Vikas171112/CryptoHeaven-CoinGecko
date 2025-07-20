import axiosInstance from "../cofigurations/axiosInstance";

export async function fetchNftList(page, per_page) {
  try {
    const response = await axiosInstance.get(
      `/nfts/list/?page=${page}&per_page=${per_page}`
    );
    return response.data;
  } catch (error) {
    console.log(error, "please check the url");
    throw error;
  }
}
