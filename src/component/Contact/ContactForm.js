// import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
function ContactForm() {
    // const [value1, setValue1] = useState('');
    return (
        <div className="contact-form-conatiner">
            {/* <form onSubmit={formik.handleSubmit} className="p-fluid"> */}
            <form className="contact-form p-fluid ">
                <div className='grid'>
                    <InputText type="text" className="contact-form-name-input block mb-2  " placeholder="Name" />
                    <InputText type="email" className="block mb-2" placeholder="Email" />
                    <InputText type="number" className="block mb-2" placeholder="Phone" />
                    <InputText type="text" className="block mb-2" placeholder="Subject" />
                    {/* <InputTextarea value={value1} onChange={(e) => setValue1(e.target.value)} rows={5} cols={30} /> */}
                    <InputTextarea placeholder="Comment" rows={5} cols={30} />
                    <Button type="submit" label="Submit" className="contact-form-submit-btn mt-2" />
                </div>
            </form>
        </div>
    )
}

export default ContactForm