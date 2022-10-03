// import React, { useState } from 'react';

function ContactForm() {
    // const [value1, setValue1] = useState('');
    return (
        <div className="contact-form-conatiner ">
            {/* <form onSubmit={formik.handleSubmit} className="p-fluid"> */}
            <div className="contact-form-contact-txt">
                {/* <h3>Leave a message</h3> */}
                <img src="../../assets/image/contact/airplanes.jpg" alt="" />
            </div>
            <form className="contact-form  ">
                <div className="contact-form-title">
                    <h2>
                        <span className="contact-form-title-span">Leave a message</span>
                    </h2>
                </div>
                <div className='contact-form-grid '>
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='Email' />
                    <input type="number" placeholder='Number' />
                    <input type="text" placeholder='Subject' />
                    <textarea name="" id="" cols="80" rows="3" placeholder='Write your message'></textarea>
                    {/* <InputTextarea className='col' placeholder="Comment" rows={5} cols={30} /> */}

                </div>
                <button type="submit" className="contact-form-submit-btn" >Submit</button>
            </form>

        </div>
    )
}
export default ContactForm