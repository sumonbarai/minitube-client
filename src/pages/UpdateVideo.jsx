import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTagsThunk } from "../features/tags/tagsSlice";
import { getVideoThunk, updateVideoThunk } from "../features/video/videoSlice";
import Loader from "../shared/Loader";

const UpdateVideo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { tags } = useSelector((state) => state.tags);
  const { isLoading, video } = useSelector((state) => state.video);

  const [title, setTitle] = useState(video.title);
  const [description, setDescription] = useState(video.description);
  const [author, setAuthor] = useState(video.author);
  const [avatar, setAvatar] = useState(video.avatar);
  const [views, setViews] = useState(video.views);
  const [duration, setDuration] = useState(video.duration);
  const [link, setLink] = useState(video.link);
  const [thumbnail, setThumbnail] = useState(video.thumbnail);
  const [selectedTags, setSelectedTags] = useState(video.tags);
  // initial value
  useEffect(() => {
    setTitle(video.title);
    setDescription(video.description);
    setAuthor(video.author);
    setAvatar(video.avatar);
    setViews(video.views);
    setDuration(video.duration);
    setLink(video.link);
    setThumbnail(video.thumbnail);
    setSelectedTags(video.tags);
  }, [video]);
  // get tags
  useEffect(() => {
    dispatch(getTagsThunk());
  }, [dispatch]);
  // get single video fetch
  useEffect(() => {
    dispatch(getVideoThunk(id));
  }, [dispatch, id]);

  // handle checkBox
  const handleCheckBox = (value) => {
    const newCheckBox = [...selectedTags];
    const index = newCheckBox.indexOf(value);
    if (index === -1) {
      newCheckBox.push(value);
    } else {
      newCheckBox.splice(index, 1);
    }
    setSelectedTags(newCheckBox);
  };

  // handle post form
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      description: description,
      author: author,
      avatar: avatar,
      date: new Date().toLocaleDateString(),
      duration: duration,
      views: views,
      link: link,
      thumbnail: thumbnail,
      tags: selectedTags,
    };

    if (
      title &&
      description &&
      author &&
      avatar &&
      duration &&
      views &&
      link &&
      thumbnail &&
      selectedTags.length > 0
    ) {
      dispatch(updateVideoThunk({ id, updateData: data }));
      toast.success("Update Successfully");
      // navigation("/");
    }
  };

  return isLoading ? (
    <Loader />
  ) : (
    <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
      <div className="max-w-7xl mx-auto px-5 lg:px-0">
        <div className="w-full">
          <div className="px-4 sm:px-0 pb-4">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Update video
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Please Update the form to video
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleSubmit}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Title
                      </label>
                      <input
                        required
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="shadow-sm p-2  mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Author
                      </label>
                      <input
                        required
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="shadow-sm p-2  mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Description
                      </label>
                      <div className="mt-1">
                        <textarea
                          required
                          id="about"
                          name="about"
                          rows="3"
                          className="shadow-sm p-2 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Brief description for your video
                      </p>
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        YouTube Video Emabed src Link
                      </label>
                      <input
                        required
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="shadow-sm p-2  mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Thumbnail link
                      </label>
                      <input
                        required
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="shadow-sm p-2  mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        value={thumbnail}
                        onChange={(e) => setThumbnail(e.target.value)}
                      />
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Avatar link
                      </label>
                      <input
                        required
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="shadow-sm p-2  mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        value={avatar}
                        onChange={(e) => setAvatar(e.target.value)}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Duration
                      </label>
                      <input
                        required
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="shadow-sm p-2  mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 ">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Views
                      </label>
                      <input
                        required
                        type="number"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="shadow-sm p-2  mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        value={views}
                        onChange={(e) => setViews(e.target.value)}
                      />
                    </div>
                    <div className="col-span-6 ">
                      <div
                        htmlFor="postal-code"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Tags
                      </div>
                      <div className="flex gap-3">
                        {tags.map((tag) => {
                          const { id, title } = tag;
                          return (
                            <div
                              key={id}
                              className="flex justify-center items-center gap-2"
                            >
                              <input
                                id={title}
                                type="checkbox"
                                checked={selectedTags?.includes(title)}
                                onChange={() => handleCheckBox(title)}
                              />
                              <label htmlFor={title} className="cursor-pointer">
                                {title}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3  text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-black focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
                  >
                    Upload
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateVideo;
