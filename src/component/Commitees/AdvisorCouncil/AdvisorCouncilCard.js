import React from "react";
import { Card } from "primereact/card";
import { advisorProfile_data } from "../../../data";
import "./AdvisorCouncilCard.css";
function AdvisorCouncilCard() {
  return (
    <div>
      {/* <Card title="Simple Card" style={{ width: '25rem', marginBottom: '2em' }}> */}
      <div className="advisorcouncil">
        {advisorProfile_data.slice(0, 3).map((advisor, i) => (
          <Card className="advisorprofile" style={{ width: "30em" }} key={i}>
            {/* <p className="cabinetcardquote" style={{ lineHeight: '1.5' }}> {advisor.description}
                        </p> */}
            <div className="advisorflex">
              <img src={advisor.image} alt="img" />
              <div className="advisorflex1">
                <p className="advisorname">{advisor.name}</p>
                <h5 className="advisortitle">{advisor.title}</h5>
                <div className="advisorsocialicons">
                  <a href={advisor.fblink} target="_blank" rel="noreferrer">
                    <i
                      className="pi pi-facebook"
                      style={{ color: "#4267B2" }}
                    />
                  </a>
                  <a href={advisor.wtapplink} target="_blank" rel="noreferrer">
                    <i
                      className="pi pi-whatsapp"
                      style={{ color: "#34B7F1" }}
                    />
                  </a>
                  <a
                    href={advisor.linkedinlink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <i
                      className="pi pi-linkedin"
                      style={{ color: "#0072b1" }}
                    />
                  </a>
                  {/* <a href={advisor.linkedinlink}> <i className="pi pi-linkedin" style={{ color: '#4267B2' }} /></a> */}
                  <a href={advisor.weblink} target="_blank" rel="noreferrer">
                    <i className="pi pi-link" style={{ color: "blue" }} />
                  </a>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
export default AdvisorCouncilCard;
