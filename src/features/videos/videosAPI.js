import axiosInstance from "../../utils/axios";

const getVideos = async (author, tags, search, page, limit) => {
  const tagQuery =
    tags.length > 0 ? tags?.map((tag) => `tags_like=${tag}`).join("&") : "";
  const authorQuery = author ? `author_like=${author}` : "";
  const searchQuery = search ? `q=${search}` : "";

  let filtering;
  if (tagQuery || authorQuery || searchQuery) {
    filtering =
      tagQuery +
      "&" +
      authorQuery +
      "&" +
      searchQuery +
      `&_page=${page}&_limit=${limit}`;
  } else {
    filtering = `_page=${page}&_limit=${limit}`;
  }

  const response = await axiosInstance.get(
    `/videos?${filtering}&_sort=id&_order=desc`
  );

  return {
    data: response.data,
    totalNumberOfData: response.headers[`x-total-count`],
  };
};
export const postVideos = async (inputData) => {
  const response = await axiosInstance.post("/videos", inputData);
  return response.data;
};

export default getVideos;
