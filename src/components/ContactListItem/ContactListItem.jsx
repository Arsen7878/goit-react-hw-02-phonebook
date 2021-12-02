import React from 'react';
import c from './ContactListItem.module.css';

const ContactListItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <>
      <p>{name + ': ' + number}</p>
      <button
        type="button"
        onClick={() => onDeleteContact(id)}
        className={c.btn__item}
      >
        Delete
      </button>
    </>
  );
};

export default ContactListItem;
