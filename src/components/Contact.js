// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css'
const Contact = ({data}) => {
    return (
        <div className='contact'>
            <div className='image'>
                <img src={data.photo} alt={data.name} />
            </div>
            <div className='data'>
            <p><b>{data.name} </b></p>
            <p>{data.phone}</p>
            <p>{data.email}</p>
            </div>
        </div>
    )
}

export default Contact;