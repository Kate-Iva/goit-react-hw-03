import { ErrorMessage, Field, Form, Formik } from 'formik';
import classes from './ContactForm.module.css';
import { useId } from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { nanoid } from 'nanoid'; 

//Button
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

//
const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(2, 'Too Short!')
    .max(12, 'Too Long!')
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      'Invalid phone number format. Expected format: 222-33-77'
    )
    .required('Required'),
});

const initialValue = {
  name: '',
  number: '',
};

//Form
const ContactForm = ({ addContact }) => {
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, { resetForm }) => {
    addContact({ id: nanoid(), ...values }); 
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={classes.contactForm}>
        <div className={classes.contactForm_Item}>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" name="name" id={nameId} />
          <ErrorMessage
            name="name"
            component="span"
            className={classes.error}
          />
        </div>
        <div className={classes.contactForm_Item}>
          <label htmlFor={numberId}>Number</label>
          <Field type="text" name="number" id={numberId} />
          <ErrorMessage
            name="number"
            component="span"
            className={classes.error}
          />
        </div>
        <CustomButton type="submit" buttonText={'Add Contact'} />
      </Form>
    </Formik>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

