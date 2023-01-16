import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTagsThunk } from "../features/tags/tagsSlice";

const UpdateVideo = () => {
  const [checkBox, setCheckBox] = useState([]);
  const dispatch = useDispatch();
  const { tags } = useSelector((state) => state.tags);
  useEffect(() => {
    dispatch(getTagsThunk());
  }, [dispatch]);
  const handleCheckBox = (value) => {
    const newCheckBox = [...checkBox];
    const index = newCheckBox.indexOf(value);
    if (index === -1) {
      newCheckBox.push(value);
    } else {
      newCheckBox.splice(index, 1);
    }
    setCheckBox(newCheckBox);
  };

  const data = {
    title: "",
    description: "",
    author: "",
    avatar: "",
    date: "",
    duration: "",
    views: "",
    link: "",
    thumbnail: "",
    tags: "",
    likes: "",
    unlikes: "",
  };

  return (
    <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
      <div className="max-w-7xl mx-auto px-5 lg:px-0">
        <div className="w-full">
          <div className="px-4 sm:px-0 pb-4">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Add new video
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Please fillup the form to add new video
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form>
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
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="shadow-sm p-2  mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
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
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="shadow-sm p-2  mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
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
                          id="about"
                          name="about"
                          rows="3"
                          className="shadow-sm p-2 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
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
                        YouTube Video Link
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="shadow-sm p-2  mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
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
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="shadow-sm p-2  mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Date
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="shadow-sm p-2  mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Duration
                      </label>
                      <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="shadow-sm p-2  mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Views
                      </label>
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="shadow-sm p-2  mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
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
                                checked={checkBox.includes(title)}
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
