import axiosInstance from "../../utils/axios";

const getRelatedVideo = async (id, tags) => {
  const limit = 5;
  const queryString =
    tags.length > 0
      ? tags?.map((tag) => `tags_like=${tag}`).join("&") +
        `&id_ne=${id}&_limit=${limit}`
      : `id_ne=${id}&_limit=${limit}`;
  // ?tags_like=react&tags_like=tips&id_ne=1&_limit=2
  const response = await axiosInstance.get(`/videos/?${queryString}`);
  return response.data;
};

export default getRelatedVideo;
