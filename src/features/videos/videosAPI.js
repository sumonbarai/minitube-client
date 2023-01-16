import axiosInstance from "../../utils/axios";

const getVideos = async () => {
  const response = await axiosInstance.get("/videos");
  return response.data;
};
export const postVideos = async (inputData) => {
  const response = await axiosInstance.post("/videos", inputData);
  return response.data;
};

export default getVideos;
