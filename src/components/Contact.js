// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css'
const Contact = ({name, phone, email,photo}) => {
    return (
        <div className='contact'>
            <div className='image'>
                <img src={photo}/>
            </div>
            <div className='data'>
            <p><b>{name} </b></p>
            <p>{phone}</p>
            <p>{email}</p>
            </div>
        </div>
    )
}

export default Contact;