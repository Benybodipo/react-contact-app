import React from 'react';


const ContactCard = (props) => {

    const {id, name, email} = props.contact;

    return (
        <div className='contact-card clearfix'>
            <div className='contact-img'>
                <i class="fas fa-user-circle"></i>
            </div>
            <div className='contact-info'>
                <strong>{name}</strong><br/>
                <span>{email}</span>
            </div>
            <div className='action'>
                <i class="far fa-trash-alt" onClick={() => props.clickHandler(id)} key={id}></i>
            </div>
        </div>
    );
}

export default ContactCard;