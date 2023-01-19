import axiosInstance from "../../utils/axios";

const getVideo = async (id) => {
  const response = await axiosInstance.get(`/videos/${id}`);
  return response.data;
};
export const putVideo = async (id, updatedDate) => {
  const response = await axiosInstance.patch(`/videos/${id}`, updatedDate);
  return response.data;
};

export const increaseLikes = async (id, updatedValue) => {
  const response = await axiosInstance.patch(`/videos/${id}`, {
    likes: updatedValue,
  });
  return response.data;
};

export const decreaseLikes = async (id, updatedValue) => {
  const response = await axiosInstance.patch(`/videos/${id}`, {
    unlikes: updatedValue,
  });
  return response.data;
};

export const deleteVideo = async (id) => {
  const response = await axiosInstance.delete(`/videos/${id}`);
  return response.data;
};

export default getVideo;
