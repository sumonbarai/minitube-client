import axiosInstance from "../../utils/axios";

const getVideos = async (author, tags, search) => {
  const tagQuery =
    tags.length > 0 ? tags?.map((tag) => `tags_like=${tag}`).join("&") : "";
  const authorQuery = author ? `author_like=${author}` : "";
  const searchQuery = search ? `q=${search}` : "";

  let filtering;
  if (tagQuery || authorQuery || searchQuery) {
    filtering = tagQuery + "&" + authorQuery + "&" + searchQuery;
  } else {
    filtering = "";
  }

  const response = await axiosInstance.get(`/videos?${filtering}`);
  return response.data;
};
export const postVideos = async (inputData) => {
  const response = await axiosInstance.post("/videos", inputData);
  return response.data;
};

export default getVideos;
