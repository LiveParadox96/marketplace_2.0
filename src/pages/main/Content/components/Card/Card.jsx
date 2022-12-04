import "./Card.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";



function Card({ item }) {
  const { image, title, description, price } = item;

  const navigate = useNavigate();

  const showDetailByProduct = () => {
    const { id } = item;
    navigate(`/${id}`, { item });
  };
  return (
    
      <div className="Card" onClick={showDetailByProduct}>
        <img className="Card-img" alt="card_image" src={image} />
        <div className="Card-container">
          <p className="Card-title common-header">{title}</p>
          <p className="Card-discription">{description}</p>
          <div className="Card-price common-price">{price}</div>
          <div className="Card-button">
            <Button>В корзину</Button>
          </div>
        </div>
      </div>
    
  );
}

export default Card;
