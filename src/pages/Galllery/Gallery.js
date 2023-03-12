import { Image } from "primereact/image";
import { Button } from "primereact/button";
import "./Gallary.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Gallery = () => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const [gallary, setGallery] = useState([]);
  useEffect(() => {
    fetch(`${url}/gallery`)
      .then((res) => res.json())
      .then((data) => setGallery(data?.data?.results));
  }, []);
  const galleryImg = gallary?.filter((img) => img.type === "Photo");
  const galleryVideo = gallary?.filter((video) => video.type === "Video");
  // console.log(galleryImg.url?.url);
  return (
    <div className="gallary-container p-container">
      <div className="gallary-event-img">
        <h3>Our Event Pictures</h3>
        <div className="photo-gallary-row">
          <div className="phtoto-gallary-column grid">
            {galleryImg?.slice(1, 20).map((item, i) => (
              <div className="col-12 md:col-3" key={i}>
                <Image src={item.url} alt="Image" width="250" preview />
              </div>
            ))}
          </div>
        </div>
        <div className="gallary-img-seemoreBtn">
          <Link to="photoGallery">
            {" "}
            <Button label="see more" />
          </Link>
        </div>
      </div>
      <div className="gallary-event-video">
        <h3>Our Event Videos</h3>
        <div className="gallary-video">
          <div className="gallary-video-row">
            <div className="gallary-video-column grid">
              {galleryVideo.slice(0, 20).map((item, i) => (
                <div className="col-12 md:col-4" key={i}>
                  <iframe
                    width="640"
                    height="360"
                    src={item.url}
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="gallary-video-seemoreBtn">
          <Link to="videoGallery">
            <Button label="see more" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Gallery;
