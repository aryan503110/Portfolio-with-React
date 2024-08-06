import React from 'react'
import './Contact.css'
import mail_icon from "../assets/mail_icon.svg"
import location_icon from "../assets/location_icon.svg"
import call_icon from "../assets/call_icon.svg"

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9b4ffe27-440b-4de9-bdeb-4431e929a395");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
  
  return (
    <div id='contact' className='contact'>
     <div className="contact-title">
        <h1>Get In Touch</h1>
     </div>
     <div className="contact-section">
        <div className="contact-left">
            <h1>Lets Talk</h1>
            <p>Excited to contribute to innovative teams and develop solutions that make a meaningful impact</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon}></img>
                    <p>aryan503110@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon}></img>
                    <p>+91-9425093120</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon}></img>
                    <p>Indore , India</p>
                </div>
            </div>
        </div>
        <form className="contact-right">
          <label>Your Name</label>
          <input type='text' placeholder='Enter Your Name' name='name'></input>
          <label>Your Email</label>
          <input type='email' placeholder='Enter Your Email' name='email'></input>
          <label>Enter Your Message</label>
          <textarea name='message' rows="10" placeholder='Enter Your Message'></textarea>
          <button onSubmit={onSubmit} type='submit' className='contact-submit'>Submit</button>
        </form>
     </div>
    </div>
  )
}

export default Contact
