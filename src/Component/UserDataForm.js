import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string().required(),
    uuid: Yup.string().required(),
});

const UserDataForm = ({ state, setState }) => {
    const initialValues = {
        name: state?.name,
        uuid: state ? state.uuid : "default",
    };

    const onSubmit = (values) => {
        setState({
            name: values.name
        });
    };

    return (
        <div className='boxLayout'>
            <h3>User Data Form</h3>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, formikHelpers) => {
                    onSubmit(values);
                    formikHelpers.setSubmitting(false);
                }}
                validationSchema={validationSchema}
            >
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <pre>{JSON.stringify(state, null, 2)}</pre>

                        <div>
                            <label>Name</label>
                            <Field type="text" name="name" />
                            <ErrorMessage name="name" component="div" />
                        </div>

                        <div>
                            <label>Uuid</label>
                            <Field type="text" name="uuid" />
                            <ErrorMessage name="uuid" component="div" />
                        </div>

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

UserDataForm.propTypes = {
    state: PropTypes.object.isRequired,
    setState: PropTypes.func.isRequired,
};

export default UserDataForm