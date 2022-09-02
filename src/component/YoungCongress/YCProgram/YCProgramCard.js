import { Card } from 'primereact/card';
import './YCProgramStyle.css';
import { ycprogram_data } from '../../../data'
function YCProgramCard() {
    return (
        <div className='ycpc-container'>
            <div className="ycpc-header-flex">
                <div className="ycpc-flex1">
                    <h1>Our programs in different</h1>
                    <h1> places</h1>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae repudiandae quo aut, blanditiis sunt atque, odio quibusdam quis repellendus velit non incidunt, nisi eligendi neque rerum doloribus illo ea qui.</p>
            </div>
            <hr className='ycpc-hr' />
            <div className="ycpc-card">
                {ycprogram_data.map((service, i) => (
                    <div className="ycpc-details" key={i}>
                        <Card className='ycpc-profile' style={{ width: '18em' }}>
                            <div className="ycpc-txt">
                                <h6 className='ycpc-type'>{service.programName}</h6>
                                <h4 className='ycpc-title'>{service.title}</h4>
                                <p className='ycpc-description'>{service.description}</p>
                            </div>
                            <div className="ycpc-img">
                                <img src={service.image} alt="" />
                            </div>
                        </Card>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default YCProgramCard