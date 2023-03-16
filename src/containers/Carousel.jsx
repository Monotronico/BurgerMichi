import React, { useState, useEffect } from "react";

const images = [
  "https://img.freepik.com/fotos-premium/hamburguesa-queso-sobre-fondo-blanco-aislado_742252-2203.jpg?w=2000",
  "https://static.vecteezy.com/system/resources/previews/000/763/553/non_2x/hamburger-isolated-on-white-background-photo.jpg",
  "https://mcdonalds.es/api/cms/images/mcdonalds-es/713f5f5c-d75c-4337-90b8-4cb830b89d6f_1080x943_Menu%CC%814You_triple+cheeseburguer.png?auto=compress,format",
  "http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c1a8.png",
];

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((activeIndex) => (activeIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={images[activeIndex]}
          alt={`img${activeIndex}`}
          style={{
            width: "500px",
            height: "500px",
          }}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {images.map((_, index) => (
          <div
            key={index}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: activeIndex === index ? "black" : "gray",
              margin: "0 5px",
              cursor: "pointer",
            }}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};
