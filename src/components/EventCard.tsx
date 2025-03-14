import "../styles/Card.css";
interface CardProps {
  title: string;
  image: string;
  time: string;
  bgColor?: string;
}
const EventCard: React.FC<CardProps> = ({ title, image, time, bgColor }) => (
  <view
    className="card-event"
    style={{ backgroundColor: bgColor || "#dee2fe" }}
  >
    <view className="image-container">
      <image src={image} className="image" />
    </view>
    <view className="card-content">
      <text className="title">{title}</text>
      <text className="time">{time}</text>
    </view>
  </view>
);
export default EventCard;
