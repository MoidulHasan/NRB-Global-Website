import React from "react";
import { Card } from "primereact/card";
import { executiveprofile_data } from "../../../data";
// import './ExecutiveAmbassadorProfile.css';
import "./ExOverlayCard.css";
function ExecutiveAbassadorProfile() {
  return (
    <div className="overlay-executive-ambassador-container">
      <div className="overlay-executive-ambassador grid">
        {executiveprofile_data.map((excutive, i) => (
          <div className="overlay-executive-ambassador-profile col lg:col-3 md:col-6 py-3">
            <div className="flex align-items-cetner justify-content-center">
              <Card
                className="overlay-executive-ambassador-card "
                style={{ width: "17em" }}
                key={i}
              >
                {/* <p className="cabinetcardquote" style={{ lineHeight: '1.5' }}> {excutive.description}
                        </p> */}
                <div className="overlay-executive-ambassador-flex">
                  <div className="overlay-image-container">
                    <img src={excutive.image} alt="img" />
                    <div className="overlay-executive-ambassador-socialicons">
                      <a
                        href={excutive.fblink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i
                          className="pi pi-facebook"
                          style={{ color: "#ffffff" }}
                        />
                      </a>
                      <a
                        href={excutive.wtapplink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i
                          className="pi pi-whatsapp"
                          style={{ color: "#ffffff" }}
                        />
                      </a>
                      <a
                        href={excutive.linkedinlink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        <i
                          className="pi pi-linkedin"
                          style={{ color: "#ffffff" }}
                        />
                      </a>
                      {/* <a href={excutive.linkedinlink}> <i className="pi pi-linkedin" style={{ color: '#333' }} /></a> */}
                      <a
                        href={excutive.weblink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i
                          className="pi pi-envelope"
                          style={{ color: "#ffffff" }}
                        />
                      </a>
                    </div>
                  </div>
                  <div className="overlay-executive-ambassador-flex1">
                    <p className="overlay-executive-ambassador-name">
                      {excutive.name}
                    </p>
                    <div className="overlay-executive-ambassador-address">
                      <i className="pi pi-map-marker text-xs font-bold social_Icon" />
                      <span className="overlay-executive-ambassador-address-span">
                        {excutive.address}
                      </span>
                    </div>

                    <h5 className="overlay-executive-ambassador-title">
                      {excutive.description}
                    </h5>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ExecutiveAbassadorProfile;
