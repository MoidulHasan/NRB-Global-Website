import "./PhotoGallaryGrid.css";
import { Image } from "primereact/image";
import { useState, useEffect } from "react";
function PhotoGallaryGrid() {
    const url = process.env.REACT_APP_BACKEND_URL;
    const [gallary, setGallery] = useState([]);
    useEffect(() => {
        fetch(`${url}/gallery`)
            .then((res) => res.json())
            .then((data) => setGallery(data?.data?.results));
    }, []);
    const galleryImg = gallary?.filter((img) => img.type === "Photo");
    return (
        <div className="photo-Gallary p-container">
            <div className="photo-gallary-row">
                <h3>Photo Gallary</h3>
                <div className="phtoto-gallary-column grid">
                    {galleryImg.map((item, i) => (
                        <div className="col-12 md:col-3" key={i}>
                            <Image src={item.url} alt="Image" width="250" preview />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PhotoGallaryGrid;
