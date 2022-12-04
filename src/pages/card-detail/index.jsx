import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { APP_CONSTANTS } from "../../config/contants";
import NewCard from "../main/Content/NewCard/NewCard";
import Button from "../main/Content/components/Button/Button";
import Card from "../main/Content/components/Card/Card";
import './index.css'



const CardDetailPage = (props) => {
  console.log(props)
  const { productId } = useParams();
  const [currentCardInformation, setCurrentCardInformation] = useState(null);

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
            <a className="prev" to="/" href="http://localhost:3000">На главную</a>
            <div className="flex_NewCard">
              <NewCard item={currentCardInformation}/>
            </div>
            </>)
};

export default CardDetailPage;
