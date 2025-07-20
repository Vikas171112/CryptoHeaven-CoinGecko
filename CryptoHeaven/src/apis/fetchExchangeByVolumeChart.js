import axiosInstance from "../cofigurations/axiosInstance";

export async function fetchExchangeByVolumeChart(id) {
  try {
    const response = await axiosInstance.get(
      `/exchanges/${id}/volume_chart?days=1}`
    );
    return response.data;
  } catch (error) {
    console.log(error, "please check the url");
    throw error;
  }
}
