import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";
import './NewCards.css'


function NewCard({ item }) {
const { image, title, description, price, rating } = item;

const navigate = useNavigate();

const showDetailByProduct = () => {
    const { id } = item;
    navigate(`/${id}`, { item });
  };
  return (
    
      <div className="Card_new">
        <img className="Card-img_new" alt="card_image" src={image} />
        <div className="Card-container_new">
          <p className="Card-title_new common-header_new">{title}</p>
          <p className="Card-discription_new">{description}</p>
          <div className="Card-discriptiom_new_rating">
            <div className="Card-rating-count_new">{rating.count}</div>
            <div className="Card-rating-rate_new">{rating.rate}</div>
          </div>
          <div className="Card-price common-price_new">{price}</div>
          <div className="Card-button_new">
            <Button>В корзину</Button>
          </div>
        </div>
      </div>
    
  );
}

export default NewCard;