import "../styles/Search.css";
import searchIcon from "../assets/icons/search.png";
const Search = () => {
  return (
    <view className="Search-container">
      <image className="search-icon" src={searchIcon}></image>
      <text className="search-text">Search</text>
    </view>
  );
};

export default Search;
