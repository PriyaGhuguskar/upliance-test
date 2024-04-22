import React from 'react'
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const validationSchema = Yup.object().shape({
    email: Yup.string().required(),
    phone: Yup.string().required(),
    address: Yup.string().required(),
});

const ContactForm = ({ state, setState }) => {
    const initialValues = {
        email: state?.email || '',
        phone: state?.phone || '',
        address: state?.address || '',
    };

    const onSubmit = (values) => {
        console.log("onSubmit called");
        console.log(values);

        setState({
            email: values.email,
            phone: values.phone,
            address: values.address
        });
    };

    return (
        <div className='boxLayout'>
            <h3>Contact Form</h3>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, formikHelpers) => {
                    console.log("form submitted");
                    onSubmit(values);
                    formikHelpers.setSubmitting(false);
                }}
                validationSchema={validationSchema}
            >
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <div>
                            <label>Email</label>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="div" />
                        </div>
                        <div>
                            <label>Phone</label>
                            <Field type="text" name="phone" />
                            <ErrorMessage name="phone" component="div" />
                        </div>
                        <div>
                            <label>Address</label>
                            <Field type="text" name="address" />
                            <ErrorMessage name="address" component="div" />
                        </div>
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
ContactForm.propTypes = {
    state: PropTypes.object.isRequired,
    setState: PropTypes.func.isRequired,
};
export default ContactForm