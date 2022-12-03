import React from "react";
import { createRoot } from "react-dom/client";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import "./YandexMap.css";

const center = [55.76, 37.64];

const images = [...Array(26)].map((n, i) => {
  const letter = String.fromCharCode(i + 97);
  return `https://img.icons8.com/ios-filled/2x/marker-${letter}.png`;
});

const YandexMap = (props) => (
  <YMaps query={{ load: "package.full" }}>
    <Map
      state={{
        center,
        zoom: 10,
        controls: []
      }}
      width="1000px"
      height="1000px"
    >
      {images.map((n) => (
        <Placemark
          key={n}
          geometry={center.map((c) => c + (Math.random() - 0.5))}
          options={{
            iconLayout: "default#image",
            iconImageSize: [50, 50],
            iconImageHref: n
          }}
        />
      ))}
    </Map>
  </YMaps>
);

export default YandexMap;