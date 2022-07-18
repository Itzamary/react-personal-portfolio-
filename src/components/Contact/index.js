import React, { useState } from "react";
import { validateEmail } from '../../utils/herlpers';


function ContactForm() {
    //hook
    const [formState, setFormState] = useState({name: '', email: '', message: ''});

    const {name, email, message} = formState;

    // error message hook
    const [errorMessage, setErrorMessage] = useState('');

    // handle change to the form data
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement

            if (!isValid) {
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

        if (!errorMessage){
            setFormState({...formState, [e.target.name]: e.target.value });
        }
    }
      
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    //JSX
    return (
        <section>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <br/>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <br/>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <br/>
                    <textarea name="message" rows="5"  defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button data-testid="button"  type="submit" >Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;