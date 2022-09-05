// import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
function ContactForm() {
    // const [value1, setValue1] = useState('');
    return (
        <div className="contact-form-conatiner">
            {/* <form onSubmit={formik.handleSubmit} className="p-fluid"> */}
            <div className="contact-form-title">
                <h5>Leave us a message</h5>
            </div>
            <form className="contact-form">
                <div className='contact-form-grid grid '>
                    <InputText type="text" className="mb-2 col-12" placeholder="Name" />
                    <InputText type="email" className="mb-2 col-12" placeholder="Email" />
                    <InputText type="number" className="mb-2 col-12" placeholder="Phone" />
                    <InputText type="text" className=" mb-2 col-12" placeholder="Subject" />
                    {/* <InputTextarea value={value1} onChange={(e) => setValue1(e.target.value)} rows={5} cols={30} /> */}
                    <InputTextarea className='col-12' placeholder="Comment" rows={5} cols={30} />
                </div>
                <Button type="submit" label="Submit" className="contact-form-submit-btn mt-2" />
            </form>
        </div>
    )
}

export default ContactForm