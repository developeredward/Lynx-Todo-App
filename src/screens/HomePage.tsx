import Card from "../components/Card.jsx";
import EventCard from "../components/EventCard.jsx";
import Header from "../components/Header.jsx";
import Search from "../components/Search.jsx";
import "../styles/screens/HomePage.css";
import dance from "../assets/images/dance.jpg";
import art from "../assets/images/art.jpg";

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
        <Card
          title="Meeting with John"
          description="Discuss the new project"
          time="Today, 10:12am"
          category="Work"
        />
        <view className="heading">
          <text className="title">Events</text>
          <text className="link">see all</text>
        </view>
        <view className="event-cards">
          <EventCard
            title="Art Conference"
            time="Today, 10:00am"
            image={art}
            bgColor="#FCF0FE"
          />
          <EventCard
            title="Dance Party"
            time="Monday, 10:00am"
            image={dance}
            bgColor={"#EBFEFB"}
          />
        </view>
      </view>
    </view>
  );
};
export default HomePage;
