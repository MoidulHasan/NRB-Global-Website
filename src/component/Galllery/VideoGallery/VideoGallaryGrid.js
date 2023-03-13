import { useEffect, useState } from "react";
import "./VideoGallaryGrid.css";
import { slice } from "lodash";
import { Button } from "primereact/button";
function VideoGallaryGrid() {
    const url = process.env.REACT_APP_BACKEND_URL;
    const [currentItem, setCurrentItem] = useState([]);
    const [isCompleted, setIsCompleted] = useState(false);
    const [index, setIndex] = useState(5);
    const initialImg = slice(currentItem, 0, index);
    const videoData = () => {
        fetch(`${url}/gallery`)
            .then((res) => res.json())
            .then((data) => setCurrentItem(data?.data?.results));
    };
    const galleryVideo = initialImg?.filter((video) => video.type === "Video");
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
        videoData();
    }, []);
    return (
        <div className="video-Gallary p-container">
            <div className="video-gallary-row">
                <h3>Video Gallary</h3>
                <div className="video-gallary-column grid">
                    {galleryVideo.slice(0, 4).map((item, i) => (
                        <div className="col-12 md:col-4" key={i}>
                            <iframe width="640" height="360" src={item.url} allowFullScreen />
                        </div>
                    ))}
                </div>
                <div className="flex align-items-center justify-content-center my-4">
                    {isCompleted ? (
                        <Button onClick={loadMore} label="That's It" />
                    ) : (
                        <Button onClick={loadMore} label="Load More" severity="secondary" />
                    )}
                </div>
            </div>
        </div>
    );
}

export default VideoGallaryGrid;
