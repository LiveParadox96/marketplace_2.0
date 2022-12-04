import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { APP_CONSTANTS } from "../../config/contants";
import NewCard from "../main/Content/NewCard/NewCard";
import Button from "../main/Content/components/Button/Button";
import Card from "../main/Content/components/Card/Card";
import './index.css'




const CardDetailPage = (props) => {
  console.log(props)
  const { productId } = useParams();
  const [currentCardInformation, setCurrentCardInformation] = useState(null);
  const navigate = useNavigate();
  useEffect(
    function getInformationByProductId() {
      const CURRENT_PRODUCT_URL = `${APP_CONSTANTS.API.PRODUCTS_URL}/${productId}`;
      fetch(CURRENT_PRODUCT_URL)
        .then((response) => response.json())
        .then((result) => {
          setCurrentCardInformation(result);
        });
    },
    [productId]
  );

  if (!currentCardInformation) {
    return "Загрузка...";
  }
  return  (<>
          <h3 onClick={() => navigate(-1)}>На главную</h3>
            <div className="flex_NewCard">
              <NewCard item={currentCardInformation}/>
            </div>
            </>)
};

export default CardDetailPage;