import { useEffect, useState } from "react";
import "./VideoGallaryGrid.css";
import { Button } from "primereact/button";
function VideoGallaryGrid() {
    const url = process.env.REACT_APP_BACKEND_URL;
    const [currentItem, setCurrentItem] = useState([]);
    const [page, setPage] = useState(1);
    const [totalpage, setTotalPage] = useState();
    const videoData = () => {
        if (totalpage === page) return;
        fetch(`${url}/gallery?type=Video&limit=20&page=${page}`)
            .then((res) => res.json())
            .then((data) => {
                setCurrentItem([...currentItem, ...data?.data?.results]);
                setTotalPage(data?.data?.totalPages);
            });
    };
    const loadMore = () => {
        setPage(page + 1);
    };
    useEffect(() => {
        videoData();
    }, [page]);
    return (
        <div className="video-Gallary p-container">
            <div className="video-gallary-row">
                <h3>Video Gallary</h3>
                <div className="video-gallary-column grid">
                    {currentItem.map((item, i) => (
                        <div className="col-12 md:col-4" key={i}>
                            <iframe width="640" height="360" src={item.url} allowFullScreen />
                        </div>
                    ))}
                </div>
                <div className="flex align-items-center justify-content-center my-4">
                    {totalpage >= page && (
                        <Button onClick={loadMore} label="Load More" severity="secondary" />
                    )}
                </div>
            </div>
        </div>
    );
}

export default VideoGallaryGrid;
