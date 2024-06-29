import Contact from '../Contact/Contact';
import classes from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, deletedContact }) => {
  return (
    <ul className={classes.contactList}>
      {contacts.map((contact) => {
        return (
          <li className={classes.contact} key={contact.id}>
            <Contact deletedContact={deletedContact} {...contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deletedContact: PropTypes.func.isRequired,
};