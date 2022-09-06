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
        style={{ width: "100%", display: "block", height: "80vh" }}
      />
    );
  };

  return (
    <div>
      <div className="card" style={{ maxHeight: "80vh" }}>
        <Galleria
          value={images}
          responsiveOptions={responsiveOptions}
          numVisible={5}
          circular
          showItemNavigators
          showThumbnails={false}
          showItemNavigatorsOnHover
          showIndicators
          item={itemTemplate}
        />
      </div>
    </div>
  );
};
export default CardSlider;

// import React, { useState, useEffect } from "react";
// import { PhotoService } from "./CardPhoto";
// import { Galleria } from "primereact/galleria";

// const CardSlider = () => {
//   const [images, setImages] = useState(null);
//   const galleriaService = new PhotoService();

//   const responsiveOptions = [
//     {
//       breakpoint: "1024px",
//       numVisible: 5,
//     },
//     {
//       breakpoint: "768px",
//       numVisible: 3,
//     },
//     {
//       breakpoint: "560px",
//       numVisible: 1,
//     },
//   ];

//   useEffect(() => {
//     galleriaService.getImages().then((data) => setImages(data));
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps

//   const itemTemplate = (item) => {
//     return (
//       <img
//         src={item.itemImageSrc}
//         onError={(e) =>
//           (e.target.src =
//             "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
//         }
//         alt={item.alt}
//         style={{ width: "100%", display: "block", height: "80vh" }}
//       />
//     );
//   };

//   return (
//     <div>
//       <div className="card" style={{ maxHeight: "80vh" }}>
//         <Galleria
//           value={images}
//           responsiveOptions={responsiveOptions}
//           numVisible={5}
//           circular
//           showItemNavigators
//           showThumbnails={false}
//           showItemNavigatorsOnHover
//           showIndicators
//           item={itemTemplate}
//         />
//       </div>
//     </div>
//   );
// };
// export default CardSlider;
