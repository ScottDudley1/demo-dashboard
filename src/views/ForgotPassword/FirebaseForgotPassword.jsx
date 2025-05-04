import React from 'react';

// material-ui
import { Box, Button, FormHelperText, TextField } from '@mui/material';

// third-party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
// import useAuth from '../../hooks/useAuth';
import useScriptRef from 'hooks/useScriptRef';

// ==============================|| FIREBASE FORGOT PASSWORD ||============================== //

const FirebaseForgotPassword = ({ ...rest }) => {
  const scriptedRef = useScriptRef();

  // const {firebaseEmailPasswordSignIn, firebaseGoogleSignIn} = useAuth();

  // const googleHandler = async () => {
  //     try {
  //         await firebaseGoogleSignIn();
  //     } catch (err) {
  //         console.error(err);
  //     }
  // };

  return (
    <>
      <Formik
        initialValues={{
          email: 'admin@phoenixcoded.net',
          password: 'aA123456',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          password: Yup.string().max(255).required('Password is required')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            // await firebaseEmailPasswordSignIn(values.email, values.password);

            if (scriptedRef.current) {
              setStatus({ success: true });
              setSubmitting(false);
            }
          } catch (err) {
            console.error(err);
            if (scriptedRef.current) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} {...rest}>
            <TextField
              error={Boolean(touched.email && errors.email)}
              fullWidth
              helperText={touched.email && errors.email}
              label="Email Address / Username"
              margin="normal"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              type="email"
              value={values.email}
              variant="outlined"
            />

            {errors.submit && (
              <Box mt={3}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box mt={2}>
              <Button color="primary" disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained">
                Send me Link
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FirebaseForgotPassword;
