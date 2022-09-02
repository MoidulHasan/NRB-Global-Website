import React from 'react';
import { Card } from 'primereact/card';
import { cabinetcared_data } from '../../../data'
import './CabinateCard.css';
function CabinateCard() {
    const cardImg = (imgName) => {

        return <img className='cabinercardimg' alt="Card" src={`../../../assets/image/committess/cabinetmembers/${imgName}`} />

    }
    return (
        <div>
            {/* <Card title="Simple Card" style={{ width: '25rem', marginBottom: '2em' }}> */}
            <div className="cabinetorgcenterdiv">
                <div className="cabinetorganizer">
                    {cabinetcared_data.slice(0, 2).map((card, i) => (
                        <Card className='cabinetcard' title={card.name} subTitle={card.title} style={{ width: '19em' }} header={cardImg(card.image)} key={i}>
                            <p className="cabinetcardquote" style={{ lineHeight: '1.5' }}> {card.description}
                            </p>
                            <div className="cabinetsocialicons">
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
                    ))}
                </div>
            </div>
            <div className="cabinetmembers">
                {cabinetcared_data.slice(2, 6).map((card, i) => (
                    <Card className='cabinetcard' title={card.name} subTitle={card.title} style={{ width: '19em' }} header={cardImg(card.image)} key={i}>
                        <p className="cabinetcardquote" style={{ lineHeight: '1.5' }}> {card.description}
                        </p>
                        <div className="cabinetsocialicons">
                            <a href={card.fblink}>
                                <i className="pi pi-facebook" style={{ color: '#ffffff' }} />
                            </a>
                            <a href={card.wtapplink}>
                                <i className="pi pi-whatsapp" style={{ color: '#ffffff' }} />
                            </a>
                            <a href={card.linkedinlink}> <i className="pi pi-linkedin" style={{ color: '#ffffff' }} /></a>
                            {/* <a href={card.linkedinlink}> <i className="pi pi-linkedin" style={{ color: '#4267B2' }} /></a> */}
                            <a href={card.weblink}>
                                <i className="pi pi-link" style={{ color: '#ffffff' }} />
                            </a>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}
export default CabinateCard

