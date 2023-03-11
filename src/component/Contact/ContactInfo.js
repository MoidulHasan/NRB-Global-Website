import { useEffect, useState } from "react";
import './ContactInfo.css';
import GMapbn from './ContactInfoBanMap';
import GMapus from './ContactInfoUsMap';
function ContactInfo() {
  const url = process.env.REACT_APP_BACKEND_URL;
  const [contact, setContact] = useState([]);
  useEffect(() => {
    fetch(`${url}/contacts`)
      .then((res) => res.json())
      .then((data) => setContact(data?.data?.results));
  }, []);
  const bd = contact?.filter(
    (country) => country.countryName === "Bangladesh"
  )[0];
  const usa = contact?.filter(
    (country) => country.countryName === "Malaysia"
  )[0];
  // console.log(`${bd.address}`)
  // console.log(bd?.countryName);
  // console.log(usa?.countryName);
  return (
    <div className='contactinfo-container '>
      <div className='contactinfo-grid-container'>
        <div className='contactinfo-bn align-items-center'>
          <div className='contactinfo-bn-txt  '>
            <div className='contactinfo-bn-details'>
              <div className='contactinfo-bn-title'>
                <h2>
                  <span className='contactinfo-bn-title-span'>
                    {bd?.countryName} Office
                  </span>
                </h2>
              </div>
              <div className='contactinfo-location-icon'>
                <span className='material-icons-sharp'>location_on</span>
                <h2>
                  <span>Address : </span>
                  {bd?.address}
                </h2>
              </div>
              <div className='contactinfo-location-icon'>
                <span className='material-icons-sharp'>call</span>
                <h2>
                  <span>Phone : </span>{bd?.phone}
                </h2>
              </div>
              <div className='contactinfo-location-icon'>
                <span className='material-icons-sharp'>smartphone</span>
                <h2>
                  <span>WhatsApp :</span> {bd?.whatsApp}
                </h2>
              </div>
              <div className='contactinfo-location-icon'>
                <span className='material-icons-sharp'>email</span>
                <h2>
                  <span>E-mail :</span>{bd?.email}
                </h2>
              </div>
              <div className='contactinfo-location-icon'>
                <span className='material-icons-sharp'>public</span>
                <h2>
                  <span>Website : </span>www.nrbglobal.org
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className='contactinfo-bn-map   '>
          <GMapbn />
        </div>
        <div className='conatactinfo-us-map'>
          <GMapus />
        </div>
        <div className='contactinfo-us'>
          {/* <div className="col lg:col-6 md:col-12 lg:flex-order-1 md:flex-order-2"><GMapus /></div> */}
          <div className='contactinfo-us-txt '>
            <div className='contactinfo-us-details'>
              <div className='contactinfo-us-title'>
                <h2>
                  <span className='contactinfo-us-title-span'>{usa?.countryName}  Office</span>
                </h2>
              </div>
              <div className='contactinfo-location-icon'>
                <span className='material-icons-sharp'>location_on</span>
                <h2>
                  <span>Address : </span>
                  {usa?.address}
                </h2>
              </div>
              <div className='contactinfo-location-icon'>
                <span className='material-icons-sharp'>call</span>
                <h2>
                  <span>Phone : </span> {usa?.phone}
                </h2>
              </div>
              <div className='contactinfo-location-icon'>
                <span className='material-icons-sharp'>smartphone</span>
                <h2>
                  <span>WhatsApp :</span>  {usa?.whatsApp}
                </h2>
              </div>
              <div className='contactinfo-location-icon'>
                <span className='material-icons-sharp'>email</span>
                <h2>
                  <span>E-mail :</span> {usa?.email}
                </h2>
              </div>
              <div className='contactinfo-location-icon'>
                <span className='material-icons-sharp'>public</span>
                <h2>
                  <span>Website : </span>www.nrbglobal.org
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;