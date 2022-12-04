import { useEffect, useMemo, useState } from "react";
import React from "react";
import { APP_CONSTANTS } from "../../../config/contants";
import Card from "./components/Card/Card";
import SearchBar from "./components/SearchBar/SearchBar";
import "./Content.css";
import YandexMap from "../../../YandexMap/YandexMap";
import Feedback from "./components/Feedback/Feedback";
import axios from "axios";


const client = axios.create({
  baseURL: "https://fakestoreapi.com",
});

const Content = () => {
const [formVisible, setFormVisible] = useState(false)
const changeFormVisibleState = () => {
    setFormVisible(state => !state)
}
  useEffect(()=>{
    async function getPost(){
      const response = await client.get("/products")
      setProducts(response.data);
    }
    getPost();
  }, [])

  const [products, setProducts] = useState([]);
  const [input, setInput] = useState("");

  // useEffect(() => {
  //   fetch(APP_CONSTANTS.API.PRODUCTS_URL)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setProducts(result);
  //     });
  // }, []);
  const memoizedProducts = useMemo(
    () =>
      products.filter((item) =>
        item.title.toLowerCase().includes(input.toLowerCase())
      ),
    [input, products]
  );
  return (
    <div className="content">
      <div className="search_bar">
        <h2 className="search_text">Найди товар:&nbsp;</h2>
        <div>
          <SearchBar input={input} setInput={setInput} />
        </div>
      </div>
      <div className="container_feedback">
        {formVisible&&<Feedback/>}
        <div className="circle_feedback" onClick={changeFormVisibleState}>
        <span className="pulse-button__icon"></span>
        <span className="pulse-button__text">Обратная связь</span>
        <span className="pulse-button__rings"></span>
        <span className="pulse-button__rings"></span>
        <span className="pulse-button__rings"></span>
        </div>
      </div>
      <p className="product_list">Список товаров:</p>
      <div className="products">
        {memoizedProducts.length ? (
          <>
            {memoizedProducts.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </>
        ) : (
          <div className="empry_data">Данные не найдены</div>
        )}
      </div>
      
      <div className="flex_contacts">
        <p className="colorTextShop">Наши магазины:&nbsp;</p>
        <YandexMap/>
      </div>
      
    </div>
  );
};

export default Content;
