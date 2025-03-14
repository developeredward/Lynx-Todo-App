import "../styles/Card.css";
interface CardProps {
  title: string;
  description: string;
  time: string;
  category: string;
}
const Card: React.FC<CardProps> = ({ title, description, time, category }) => (
  <view className="card">
    <view className="category">
      <text className="category-text">{category}</text>
    </view>
    <view className="card-content">
      <text className="title">{title}</text>
      <text className="time">{time}</text>
      <text className="description">{description}</text>
    </view>
  </view>
);
export default Card;
