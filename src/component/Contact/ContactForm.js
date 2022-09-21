// import React, { useState } from 'react';

function ContactForm() {
    // const [value1, setValue1] = useState('');
    return (
        <div className="contact-form-conatiner ">
            {/* <form onSubmit={formik.handleSubmit} className="p-fluid"> */}
            <div className="contact-form-contact-txt col-12 lg:col-4  ">
                {/* <h3>Leave a message</h3> */}
            </div>
            <form className="contact-form  ">
                <div className="contact-form-title">
                    <h2>Leave a message</h2>
                </div>
                <div className='contact-form-grid grid '>
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='Email' />
                    <input type="number" placeholder='Number' />
                    <input type="text" placeholder='Subject' />
                    <textarea name="" id="" cols="80" rows="3" placeholder='Comment'></textarea>
                    {/* <InputTextarea className='col' placeholder="Comment" rows={5} cols={30} /> */}

                </div>
                <button type="submit" className="contact-form-submit-btn" >Submit</button>
            </form>

        </div>
    )
}

export default ContactForm