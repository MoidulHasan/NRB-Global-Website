import { Card } from 'primereact/card';
// import { Button } from 'primereact/button';
import { ycateam_data } from '../../../data'
import './YCMembersStyle.css'
function YCMembersCard() {
    return (
        <div className='ycm-container'>
            {/* <Card title="Simple Card" style={{ width: '25rem', marginBottom: '2em' }}> */}
            <div className="clip-path">

            </div>
            <div className="ycm-header">
                <h2> Meet our young congress members.</h2>
                <span>
                    Who is always ready to help you any kinds of issues.
                </span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ut, perspiciatis cum dicta assumenda aperiam eligendi tenetur omnis eos rerum quam voluptatem sunt repellendus facilis et recusandae exercitationem ea alias.</p>
            </div>
            <div className="ycm">
                {ycateam_data.map((acateam, i) => (
                    <Card className='ycm-profile' style={{ width: '18em' }} key={i}>
                        {/* <p className="cabinetcardquote" style={{ lineHeight: '1.5' }}> {acateam.description}
                        </p> */}
                        <div className="ycm-flex">
                            <img src={acateam.image} alt="img" />
                            <div className="ycm-flex1">
                                <p className='ycm-name'>{acateam.name}</p>
                                <h5 className='ycm-title'>{acateam.title}</h5>
                                <div className="ycm-socialicons">
                                    <a href={acateam.fblink}>
                                        <i className="pi pi-facebook" style={{ color: '#333' }} />
                                    </a>
                                    <a href={acateam.wtapplink}>
                                        <i className="pi pi-whatsapp" style={{ color: '#333' }} />
                                    </a>
                                    <a href={acateam.linkedinlink}> <i className="pi pi-linkedin" style={{ color: '#333' }} /></a>
                                    {/* <a href={acateam.linkedinlink}> <i className="pi pi-linkedin" style={{ color: '#333' }} /></a> */}
                                    <a href={acateam.weblink}>
                                        <i className="pi pi-link" style={{ color: '#333' }} />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </Card>
                ))}
            </div>
            <div className="ycm-btn">
                {/* <Button className='ycm-join-btn' label="Become a Young Congress" /> */}
                <button>Become a Young Congress</button>
            </div>
        </div>
    )
}
export default YCMembersCard;

