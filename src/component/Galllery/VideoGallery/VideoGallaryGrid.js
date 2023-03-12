import { useEffect, useState } from "react";
import "./VideoGallaryGrid.css";
import { Paginator } from 'primereact/paginator';
function VideoGallaryGrid() {
    const url = process.env.REACT_APP_BACKEND_URL;
    const [gallary, setGallery] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        fetch(`${url}/gallery?page=${page}`)
            .then((res) => res.json())
            .then((data) => setGallery(data?.data?.results));
    }, [page]);
    const [basicFirst, setBasicFirst] = useState(0);
    const [basicRows, setBasicRows] = useState(10);
    const onPageChange = (event) => {
        setPage(event.page + 1);
        setBasicFirst(event.first);
        setBasicRows(event.rows);
    }
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
            <Paginator
                totalRecords={gallary?.totalResults}
                onPageChange={onPageChange}
                first={basicFirst}
                rows={basicRows}
                rowsPerPageOptions={gallary?.limit}
            />
        </div>
    );
}

export default VideoGallaryGrid;
