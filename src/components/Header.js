import React, { useEffect, useState } from "react";
import Logo from "../assets/images/logo.png";
import MenuIcon from "../assets/images/menu.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux/slices/appSlice";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constant";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestionTerms, setSuggestionTerms] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestion(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
    const jsonData = await data.json();
    setSuggestionTerms(jsonData[1]);
  };
  const dispatch = useDispatch();
  const handleTogggle = () => {
    dispatch(toggleMenu());
  };

  console.log(suggestionTerms);
  return (
    <div className=" grid grid-flow-col p-5 my-2 shadow-lg ">
      <div className="flex col-span-1">
        <img
          onClick={handleTogggle}
          className="h-8 cursor-pointer"
          src={MenuIcon}
          alt="menu"
        />
        <a href="/">
          <img className="h-8 " src={Logo} alt="logo" />
        </a>
      </div>
      <div className="col-span-10 flex justify-center items-center">
        <div className="w-1/2 relative">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
            className="border border-gray-400 px-5 py-2  rounded-l-full focus:outline-0 w-full"
            type="search"
          />
          {showSuggestion && (
            <div className="shadow-lg absolute bg-white w-full px-3 rounded-lg">
              <ul>
                {suggestionTerms.map((item) => (
                  <li
                    key={item}
                    className="hover:bg-gray-200 cursor-pointer p-1"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          Search
        </button>
      </div>
      <div className=" col-span-1 flex justify-end">
        <img
          className="h-8"
          src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;
