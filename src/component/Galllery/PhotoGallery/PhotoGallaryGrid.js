import { eventpic_data as eventImg } from '../../../data'
import './PhotoGallaryGrid.css'
import { Image } from 'primereact/image';
function PhotoGallaryGrid() {
    return (
        <div className='photo-Gallary'>
            <div className="photo-gallary-row">
                <div className="phtoto-gallary-column grid">
                    {eventImg.map((item, i) => (
                        <div className="col-12 md:col-3" key={i}>
                            <Image src={item.img} alt="Image" width="250" preview />
                        </div>
                    ))}

                </div>

                {/* <div className="photo-gallary-column-2">
                    {eventImg.slice(3, 9).map((photo, i) => (
                        <img src={photo.img} alt="" />
                    ))}
                </div>
                <div className="photo-gallary-column-3">
                    {eventImg.slice(2, 9).map((photo, i) => (
                        <img src={photo.img} alt="" />
                    ))}
                </div>
                <div className="photo-gallary-column-4">
                    {eventImg.slice(3, 10).map((photo, i) => (
                        <img src={photo.img} alt="" />
                    ))}
                </div> */}
            </div>
        </div>
    )
}

export default PhotoGallaryGrid