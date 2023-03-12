import { useEffect, useState } from "react";
import ContactCard from "./ContactCard";
import "./ContactInfo.css";
import GMapbn from "./ContactInfoBanMap";
import GMapus from "./ContactInfoUsMap";
function ContactInfo() {
  const url = process.env.REACT_APP_BACKEND_URL;
  const [contact, setContact] = useState([]);
  useEffect(() => {
    fetch(`${url}/contacts?limit=200`)
      .then((res) => res.json())
      .then((data) => setContact(data?.data?.results));
  }, []);
  const bd = contact?.filter(
    (country) => country.countryName === "Bangladesh"
  )[0];
  const usa = contact?.filter(
    (country) => country.countryName === "United States"
  )[0];

  // console.log(`${bd.address}`)
  // console.log(bd?.countryName);
  // console.log(usa?.countryName);

  return (
    <div className="contactinfo-container ">
      <div className="contactinfo-grid-container">
        {bd && <>
          <div className="contactinfo-bn align-items-center">
            <ContactCard contact={bd} />
          </div>
          <div className="contactinfo-bn-map   ">
            <GMapbn />
          </div>
        </>}
        {usa && <>
          <div className="conatactinfo-us-map">
            <GMapus />
          </div>
          <ContactCard contact={usa} />
        </>}
      </div>
      <div className="contactCard">
        {contact
          .filter((contactData) => {
            return (
              contactData.countryName !== "Bangladesh" &&
              contactData.countryName !== "United States"
            );
          })
          .map((contactData) => (
            <ContactCard contact={contactData} />
          ))}
      </div>
    </div>
  );
}

export default ContactInfo;
