import "./Footer.css";
import React from "react";




function Footer() {
  return (
    <div className="Footer">
      <address className="location_global">
        Москва:Неглинная улица, 12/2с5, Неглинная улица, 12/2с5, Москва, 107016
      </address>
        <div className="marketplace">
          <p>Наши товары вы можете найти так же на:</p>
          <p><a target="_blank" href="https://www.ozon.ru/category/" >Ozon</a></p>
          <p><a target="_blank" href="https://www.wildberries.ru/">Wildberries</a></p>
          <p><a target="_blank" href="https://market.yandex.ru/">Яндекс Маркет</a></p>
        </div>
        <div className="Contacts">
          <a>Наши контакты:</a>
          <a href="tel:+7 (495) 510-55-55">+7 (495) 510-55-55.</a>
          <a href="mailto:liveparadox@vk.com">liveparadox@vk.com</a>
      </div>
    </div>
  );
}

export default Footer;
