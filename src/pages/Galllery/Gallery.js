import {
  eventpic_data as eventImg, eventvideo_data
    as eventvid
} from '../../data'
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import './Gallary.css'
import { Link } from 'react-router-dom';
const Gallery = () => {
  return (
    <div className='gallary-container p-container'>
      <div className="gallary-event-img">
        <h3>Our Event Pictures</h3>
        <div className="photo-gallary-row">
          <div className="phtoto-gallary-column grid">
            {eventImg.slice(1, 10).map((item, i) => (
              <div className="col-12 md:col-3" key={i}>
                <Image src={item.img} alt="Image" width="250" preview />
              </div>
            ))}
          </div>
        </div>
        <div className="gallary-img-seemoreBtn">
          <Link to="photoGallery"> <Button label="see more" /></Link>
        </div>
      </div>
      <div className="gallary-event-video">
        <h3>Our Event Videos</h3>
        <div className='gallary-video'>
          <div className="gallary-video-row">
            <div className="gallary-video-column grid">
              {eventvid.slice(0, 8).map((item, i) => (
                <div className="col-12 md:col-4" key={i}>
                  <iframe width="640" height="360" src={item.video} allowFullScreen />
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

