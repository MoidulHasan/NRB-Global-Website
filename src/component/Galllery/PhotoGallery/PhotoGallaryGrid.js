import "./PhotoGallaryGrid.css";
import { Image } from "primereact/image";
import { useState, useEffect } from "react";
import { Paginator } from 'primereact/paginator';

function PhotoGallaryGrid() {
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
    console.log(page)
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

export default PhotoGallaryGrid;
