import ContactForm from './ContactForm'
import './ContactInfo.css'
import GMapbn from './ContactInfoBanMap'
import GMapus from './ContactInfoUsMap'
function ContactInfo() {
    return (
        <div className="contactinfo-container ">
            <div className="contactinfo-grid-container">
                <div className="contactinfo-bn align-items-center">
                    <div className="contactinfo-bn-txt  ">
                        <div className="contactinfo-bn-details">
                            <div className="contactinfo-bn-title">
                                <h2><span className='contactinfo-bn-title-span'>Bangladesh Office</span></h2>
                            </div>
                            <div className="contactinfo-location-icon">
                                <span className="material-icons-sharp">
                                    location_on
                                </span>
                                <h2><span>Address : </span>
                                    Bijoy Nagar, Shaheed Syed Nazrul  Islam Sarani ,
                                    <br></br> <br></br>Dhaka-1000,  Bangladesh</h2>                        </div>
                            <div className="contactinfo-location-icon">
                                <span class="material-icons-sharp">
                                    call
                                </span>
                                <h2><span>Phone : </span>+8801715411141</h2>
                            </div>
                            <div className="contactinfo-location-icon">
                                <span class="material-icons-sharp">
                                    smartphone
                                </span>
                                <h2><span>WhatsApp :</span> +8801715411141</h2>
                            </div>
                            <div className="contactinfo-location-icon">
                                <span class="material-icons-sharp">
                                    email
                                </span>
                                <h2><span>E-mail :</span> nrbglobal20@gmail.com</h2>
                            </div>
                            <div className="contactinfo-location-icon">
                                <span class="material-icons-sharp">
                                    public
                                </span>
                                <h2><span>Website : </span>www.nrbglobal.org</h2>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="contactinfo-bn-map   ">
                    <GMapbn />
                </div>
                <div className="conatactinfo-us-map"><GMapus /></div>
                <div className="contactinfo-us">
                    {/* <div className="col lg:col-6 md:col-12 lg:flex-order-1 md:flex-order-2"><GMapus /></div> */}
                    <div className="contactinfo-us-txt ">
                        <div className="contactinfo-us-details">
                            <div className="contactinfo-us-title">
                                <h2><span className='contactinfo-us-title-span'>USA Office</span></h2>
                            </div>
                            <div className="contactinfo-location-icon">
                                <span className="material-icons-sharp">
                                    location_on
                                </span>
                                <h2><span>Address : </span>
                                    542 N Normandy Avenue Unit #106 Los Angeles Ca 90004</h2>                        </div>
                            <div className="contactinfo-location-icon">
                                <span class="material-icons-sharp">
                                    call
                                </span>
                                <h2><span>Phone : </span>+8801715411141</h2>
                            </div>
                            <div className="contactinfo-location-icon">
                                <span class="material-icons-sharp">
                                    smartphone
                                </span>
                                <h2><span>WhatsApp :</span> +8801715411141</h2>
                            </div>
                            <div className="contactinfo-location-icon">
                                <span class="material-icons-sharp">
                                    email
                                </span>
                                <h2><span>E-mail :</span> nrbglobal20@gmail.com</h2>
                            </div>
                            <div className="contactinfo-location-icon">
                                <span class="material-icons-sharp">
                                    public
                                </span>
                                <h2><span>Website : </span>www.nrbglobal.org</h2>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <ContactForm />

        </div >
    )
}

export default ContactInfo


