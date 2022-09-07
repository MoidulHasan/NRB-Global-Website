import React from 'react';
import { Card } from 'primereact/card';
import { cabinetcared_data } from '../../../data'
import './CabinateCard.css';
function CabinateCard() {
    // const cardImg = (imgName) => {
    //     return <img className='cabinercardimg' alt="Card" src={`../../../assets/image/committess/cabinetmembers/${imgName}`} />

    // }
    return (
        <div className='cabinet-card-main-container'>
            {/* <Card title="Simple Card" style={{ width: '25rem', marginBottom: '2em' }}> */}
            <div className="cabinate-org-ceo-div grid">
                <div className="cabinate-ceo-gird-one col lg:col-2 md:col-0">
                </div>
                <div className="cabinate-ceo-gird-two grid col lg:col-8 md:col-12">
                    {cabinetcared_data.slice(0, 2).map((card, i) => (
                        <div className="cabinate-card-ceo-profile col lg:col-6 md:col-6">
                            <div className="flex align-items-center justify-content-center">
                                <Card className='cabinate-card' key={i}>
                                    <div className="cabinate-card-ceo-img">
                                        <img src={card.image} alt="" />
                                    </div>
                                    <h3 className="cabinate-ceo-name">{card.name}</h3>
                                    <h6 className="cabinate-ceo-title">{card.title}</h6>
                                    <p className="cabinate-card-quote" style={{ lineHeight: '1.5' }}> {card.description}
                                    </p>
                                    <div className="cabinate-social-icons">
                                        <a href={card.fblink}>
                                            <i className="pi pi-facebook" style={{ color: '#ffffff' }} />
                                        </a>
                                        <a href={card.wtapplink}>
                                            <i className="pi pi-whatsapp" style={{ color: '#ffffff' }} />
                                        </a>
                                        <a href={card.linkedinlink}> <i className="pi pi-linkedin" style={{ color: '#ffffff' }} /></a>
                                        <a href={card.weblink}>
                                            <i className="pi pi-link" style={{ color: '#ffffff' }} />
                                        </a>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cabinate-ceo-gird-three col lg:col-2 md:col-0"></div>
            </div>
            {/* MEMBERS   */}
            <div className="cabinate-org-members-div ">
                <div className="cabinate-ceo-gird-two grid">
                    {cabinetcared_data.slice(2, 5).map((card, i) => (
                        <div className="cabinate-card-member-profile col lg:col-4 md:col-6">
                            <div className="flex align-items-center justify-content-center">
                                <Card className='cabinate-card' key={i}>
                                    <div className="cabinate-card-ceo-img">
                                        <img src={card.image} alt="" />
                                    </div>
                                    <h3 className="cabinate-ceo-name">{card.name}</h3>
                                    <h6 className="cabinate-ceo-title">{card.title}</h6>
                                    <p className="cabinate-card-quote" style={{ lineHeight: '1.5' }}> {card.description}
                                    </p>
                                    <div className="cabinate-social-icons">
                                        <a href={card.fblink}>
                                            <i className="pi pi-facebook" style={{ color: '#ffffff' }} />
                                        </a>
                                        <a href={card.wtapplink}>
                                            <i className="pi pi-whatsapp" style={{ color: '#ffffff' }} />
                                        </a>
                                        <a href={card.linkedinlink}> <i className="pi pi-linkedin" style={{ color: '#ffffff' }} /></a>
                                        <a href={card.weblink}>
                                            <i className="pi pi-link" style={{ color: '#ffffff' }} />
                                        </a>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* MEMBERS DIV  */}
        </div>
    )
}
export default CabinateCard

