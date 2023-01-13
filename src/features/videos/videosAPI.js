import axiosInstance from "../../utils/axios";

const getVideos = async () => {
  const response = await axiosInstance.get("/videos");
  return response.data;
};

export default getVideos;
