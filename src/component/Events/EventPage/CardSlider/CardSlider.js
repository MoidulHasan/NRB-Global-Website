import React, { useState, useEffect } from "react";
import { PhotoService } from "../CardSlider/CardPhoto";
import { Galleria } from "primereact/galleria";

const CardSlider = () => {
  const [images, setImages] = useState(null);
  const galleriaService = new PhotoService();

  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 5,
    },
    {
      breakpoint: "960px",
      numVisible: 4,
    },
    {
      breakpoint: "768px",
      numVisible: 3,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
    },
  ];

  useEffect(() => {
    galleriaService.getImages().then((data) => setImages(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const itemTemplate = (item) => {
    return (
      <img
        src={item.itemImageSrc}
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
        alt={item.alt}
        style={{ width: "100%", display: "block", height: "85vh" }}
      />
    );
  };

  return (
    <div className="card" style={{ maxHeight: "85vh" }}>
      <Galleria
        value={images}
        responsiveOptions={responsiveOptions}
        numVisible={5}
        showItemNavigators
        showThumbnails={false}
        // changeItemOnIndicatorHover
        // showIndicators
        showItemNavigatorsOnHover
        showIndicators
        item={itemTemplate}
        circular
        autoPlay
        transitionInterval={2000}
      />
    </div>
  );
};
export default CardSlider;
{
  /* <div className="card">
  <h5>Inside Content</h5>
  <Galleria
    value={images}
    responsiveOptions={responsiveOptions}
    numVisible={5}
    style={{ maxWidth: "640px" }}
    showThumbnails={false}
    showIndicators
    changeItemOnIndicatorHover
    showIndicatorsOnItem
    item={itemTemplate}
  />
</div>; */
}
