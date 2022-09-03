import './ContactInfo.css'
// import ContactInfoMap from './ContactInfoMap'
function ContactInfo() {
    return (
        <div className="contactinfo-container">
            <div className="contactinfo-bn grid">
                <div className="contactinfo-bn-txt col">
                    <div className="contactinfo-bn-details">
                        <div className="contactinfo-bn-title">
                            <h2>Bangladesh Office</h2>
                        </div>
                        <div className="contactinfo-location-icon">
                            <span className="material-icons-sharp">
                                location_on
                            </span>
                            <h2><span>Address : </span>
                                Bijoy Nagar, Shaheed Syed Nazrul<br /> Islam Sarani ,Dhaka-1000, Bangladesh</h2>                        </div>
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
                <div className="contactinfo-us-txt col">
                    {/* <ContactInfoMap /> */}
                </div>
            </div>
            {/* <div className="contactinfo-us grid">
                <div className="col">3</div>
                <div className="col">4</div>
            </div> */}
        </div>
    )
}

export default ContactInfo