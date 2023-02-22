import { useEffect, useState } from "react";
import "./VideoGallaryGrid.css";
function VideoGallaryGrid() {
    const url = process.env.REACT_APP_BACKEND_URL;
    const [gallary, setGallery] = useState([]);
    useEffect(() => {
        fetch(`${url}/gallery`)
            .then((res) => res.json())
            .then((data) => setGallery(data?.data?.results));
    }, []);

    const galleryVideo = gallary?.filter((video) => video.type === "Video");
    return (
        <div className="video-Gallary p-container">
            <div className="video-gallary-row">
                <h3>Video Gallary</h3>
                <div className="video-gallary-column grid">
                    {galleryVideo.map((item, i) => (
                        <div className="col-12 md:col-4" key={i}>
                            <iframe width="640" height="360" src={item.url} allowFullScreen />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default VideoGallaryGrid;
