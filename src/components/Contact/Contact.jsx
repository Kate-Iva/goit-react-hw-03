import classes from './Contact.module.css';
import { BsFillPersonFill, BsTelephoneFill } from 'react-icons/bs';
import PropTypes from 'prop-types';

const CustomButton = ({ buttonText = '', ...otherProps }) => {
  return (
    <button className={classes.customBtn} {...otherProps}>
      {buttonText}
    </button>
  );
};

CustomButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

const Contact = ({ id, name, number, deletedContact }) => {
  return (
    <>
      <div className={classes.contactInfo}>
        <div>
          <BsFillPersonFill />
          <span>{name}</span>
        </div>
        <div>
          <BsTelephoneFill />
          <span>{number}</span>
        </div>
      </div>
      <CustomButton buttonText={'Delete'} onClick={() => deletedContact(id)} />
    </>
  );
};

export default Contact;

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deletedContact: PropTypes.func.isRequired,
};