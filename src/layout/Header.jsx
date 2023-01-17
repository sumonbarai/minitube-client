import React, { useEffect, useState } from "react";
import searchIcon from "../assets/search.svg";
import { GrYoutube } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filterBySearch } from "../features/filter/filterSlice";

const Header = () => {
  const { search } = useSelector((state) => state.filter);
  const [input, setInput] = useState(search);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (input) {
      let timer = setTimeout(() => {
        dispatch(filterBySearch(input));
        navigate("/");
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [dispatch, input, navigate]);

  useEffect(() => {
    setInput(search);
  }, [search]);
  return (
    <nav className="bg-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-0 flex flex-col gap-1 sm:flex-row justify-between py-3 items-center">
        <Link to="/">
          <span className="text-red-500 flex justify-center items-center gap-1">
            <span className="text-4xl">
              <GrYoutube />
            </span>
            <span className="text-2xl">MiniTube</span>
          </span>
        </Link>
        {/* <!-- search --> */}
        <div className="border border-slate-200 flex items-center bg-white px-5 rounded-lg text-sm ring-emerald-500">
          <form>
            <input
              className="mr-2 p-2 border-transparent"
              type="search"
              name="search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search"
              style={{ outline: "none" }}
            />
          </form>
          <img
            className="inline h-4 cursor-pointer"
            src={searchIcon}
            alt="Search"
          />
        </div>
        <Link
          to="addVideo"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-red-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-red-500"
        >
          + UpLoad Video
        </Link>
      </div>
    </nav>
  );
};

export default Header;
