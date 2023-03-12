import React from 'react'
import './ContactInfo.css';
const ContactCard = ({ contact }) => {
    return (
        <div className='contactinfo-bn-txt  '>
            <div className='contactinfo-bn-details'>
                <div className='contactinfo-bn-title'>
                    <h2>
                        <span className='contactinfo-bn-title-span'>
                            {contact?.countryName} Office
                        </span>
                    </h2>
                </div>
                <div className='contactinfo-location-icon'>
                    <span className='material-icons-sharp'>location_on</span>
                    <h2>
                        <span>Address : </span>
                        {contact?.address}
                    </h2>
                </div>
                <div className='contactinfo-location-icon'>
                    <span className='material-icons-sharp'>call</span>
                    <h2>
                        <span>Phone : </span>{contact?.phone}
                    </h2>
                </div>
                <div className='contactinfo-location-icon'>
                    <span className='material-icons-sharp'>smartphone</span>
                    <h2>
                        <span>WhatsApp :</span> {contact?.whatsApp}
                    </h2>
                </div>
                <div className='contactinfo-location-icon'>
                    <span className='material-icons-sharp'>email</span>
                    <h2>
                        <span>E-mail :</span>{contact?.email}
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default ContactCard