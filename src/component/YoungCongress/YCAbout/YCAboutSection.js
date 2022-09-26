import './YCAboutpage.css'
import { Button } from 'primereact/button';
function YCAboutSection() {
    return (
        <div className='ycasection-container'>
            {/* <div className="yca-img">            
            </div> */}
            <div className="yca-description">
                {/* <div className="yca-title">
                    <h1>
                        Young congress amis to become worldwide attachment of
                    </h1>
                    <h1>
                        young dynamic Bangladesh.
                    </h1>
                </div> */}
                {/* <div className="yca-join-btn">
                    <Button label="Join with us" className="p-button-outlined p-button-secondary" />
                </div> */}
            </div>
            <div className="yca-about-section">
                <div className="yca-about-text">
                    <h3>About Us</h3>
                    <p className='yca-about-text-p'>Young Congress NRB Global is a non-political Organization. This platform is open for all young generation. We give the opportunities to be a good person in life as well as to improve skills for career build up.</p>
                </div>
                <div className="yca-presenet-them">
                    <div className="yca-research">
                        <h1> 6 years of intense  research</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut reprehenderit repellendus consequatur asperiores voluptate corrupti?</p>
                    </div>
                    <div className="yca-audience">
                        <h1> 7 years of intense  research</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut reprehenderit repellendus consequatur asperiores voluptate corrupti?</p>
                    </div>
                    <div className="yca-contact">
                        <h1> 8 years of intense  research</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut reprehenderit repellendus consequatur asperiores voluptate corrupti?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YCAboutSection