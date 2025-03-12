import Header from "../components/Header.jsx";
import Search from "../components/Search.jsx";
import "../styles/screens/HomePage.css";
const HomePage = () => {
  return (
    <view className="container">
      <Header />
      <Search />
      <view className="content">
        <view className="heading">
          <text className="title">Next Agenda</text>
          <text className="link">see all</text>
        </view>
      </view>
    </view>
  );
};
export default HomePage;
