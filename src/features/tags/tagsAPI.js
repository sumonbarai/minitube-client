import axiosInstance from "../../utils/axios";

const getTags = async () => {
  const response = await axiosInstance.get("/tags");
  return response.data;
};

export default getTags;
