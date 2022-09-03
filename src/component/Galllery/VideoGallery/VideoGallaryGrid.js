import {
    eventvideo_data
        as eventvid
} from '../../../data'
import './VideoGallaryGrid.css'
function VideoGallaryGrid() {
    return (
        <div className='video-Gallary'>
            <div className="video-gallary-row">
                <div className="video-gallary-column grid">
                    {eventvid.map((item, i) => (
                        <div className="col-12 md:col-4" key={i}>
                            <iframe width="640" height="360" src={item.video} allowFullScreen />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default VideoGallaryGrid