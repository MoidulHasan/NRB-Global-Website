import { Card } from 'primereact/card';
// import { Button } from 'primereact/button';
import { ycateam_data } from '../../../data'
import './YCMembersStyle.css'
function YCMembersCard() {
    return (
        <div className='ycm-container p-container'>
            {/* <Card title="Simple Card" style={{ width: '25rem', marginBottom: '2em' }}> */}
            <div className="ycm-header-container grid">
                <div className="ycm-header col-12 md:col-6 px-3">
                    <h2> Meet our young congress members. <br /> <br />
                        Who is always ready to help you any kinds of issues.
                    </h2>
                    <p className='ycm-header-para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ut, perspiciatis cum dicta assumenda aperiam eligendi tenetur omnis eos  </p>
                </div>
                <div className="ycm-header-sticker col-12 md:col-6 px-3">
                    <img src="../../../assets/image/YCAbout/memberpic.png" alt="" />
                </div>
            </div>
            <div className="ycm grid">
                {ycateam_data.map((acateam, i) => (
                    <div className="ycm-profile lg:col-3 md:col-4 py-3">
                        <div className="flex align-items-cetner justify-content-center">
                            <Card className='ycm-card ' style={{ width: '17em' }} key={i}>
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
                        </div>
                    </div>
                ))}
            </div>
            <div className="ycm-btn">
                {/* <Button className='ycm-join-btn' label="Become a Young Congress" /> */}
                <button>Become a Young Congress</button>
            </div>
        </div >
    )
}
export default YCMembersCard;

