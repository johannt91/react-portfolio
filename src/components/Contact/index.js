import React, { useState } from 'react'
import { validateEmail } from '../../utils/helpers'
import emailjs from 'emailjs-com';

 function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' }); //hook clears input fields on component loading
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');


    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_nz98vf2', 'template_5ndv0in', e.target, 'user_UclJrm4doPiXL8ccaAeI4')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset(formState);
          console.log(formState);
      }

    function handleChange(e) { // synchronizes internal state of component's formState with user input from the DOM
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if(!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
        }
        if (!errorMessage) {
        setFormState({...formState, [e.target.name]:e.target.value }) //name property of target refers to name attribute of html form element which matches property names of formState allowing the use of [ ] to create dynamic property names
        }
        console.log('errorMessage', errorMessage);
    }

    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={sendEmail}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input className="form-control" type="text" name="name" onBlur={handleChange} defaultValue={name} /> {/*onChange event listener listens for keystrokes  */}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input className="form-control" type="email" name="email" placeholder="name@example.com" onBlur={handleChange} defaultValue={email} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea className="form-control" name="message" onBlur={handleChange} defaultValue={message} rows="5" />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;