import "./PhotoGallaryGrid.css";
import { Image } from "primereact/image";
import { useState, useEffect } from "react";
import { slice } from "lodash";
import { Button } from "primereact/button";
function PhotoGallaryGrid() {
    const url = process.env.REACT_APP_BACKEND_URL;
    const [currentItem, setCurrentItem] = useState([]);
    const [isCompleted, setIsCompleted] = useState(false);
    const [index, setIndex] = useState(5);
    const initialImg = slice(currentItem, 0, index)
    const imgData = () => {
        fetch(`${url}/gallery`)
            .then((res) => res.json())
            .then((data) => setCurrentItem(data?.data?.results));
    }
    const galleryImg = initialImg?.filter((img) => img.type === "Photo");
    const loadMore = () => {
        setIndex(index + 5);
        console.log(index);
        if (index >= currentItem.length) {
            setIsCompleted(true);
        } else {
            setIsCompleted(false);
        }
    };
    useEffect(() => {
        imgData();
    }, []);
    return (
        <div className="photo-Gallary p-container">
            <div className="photo-gallary-row">
                <h3>Photo Gallary</h3>
                <div className="phtoto-gallary-column grid">
                    {galleryImg.slice(0, 4).map((item, i) => (
                        <div className="col-12 md:col-3" key={i}>
                            <Image src={item.url} alt="Image" width="250" preview />
                        </div>
                    ))}
                </div>
                <div className="flex align-items-center justify-content-center my-4">
                    {isCompleted ? (
                        <Button
                            onClick={loadMore}
                            label="That's It"
                        />


                    ) : (
                        <Button
                            onClick={loadMore}
                            label="Load More"
                            severity="secondary"

                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default PhotoGallaryGrid;
