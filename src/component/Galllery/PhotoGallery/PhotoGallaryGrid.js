import "./PhotoGallaryGrid.css";
import { Image } from "primereact/image";
import { useState, useEffect } from "react";
import { Button } from "primereact/button";
function PhotoGallaryGrid() {
    const url = process.env.REACT_APP_BACKEND_URL;
    const [currentItem, setCurrentItem] = useState([]);
    const [page, setPage] = useState(1);
    const [totalpage, setTotalPage] = useState();
    const imgData = () => {
        if (totalpage === page) return;
        fetch(`${url}/gallery?type=Photo&limit=20&page=${page}`)
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
        imgData();
    }, [page]);
    return (
        <div className="photo-Gallary p-container">
            <div className="photo-gallary-row">
                <h3>Photo Gallary</h3>
                <div className="phtoto-gallary-column grid">
                    {currentItem.map((item, i) => (
                        <div className="col-12 md:col-3" key={i}>
                            <Image src={item.url} alt="Image" width="250" preview />
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

export default PhotoGallaryGrid;
