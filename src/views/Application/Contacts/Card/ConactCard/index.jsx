import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { Card, Chip, Divider, CardContent, Grid, Typography, CardMedia } from '@mui/material';

// project import
import { gridSpacing } from 'config.js';

// assets
import PinDropTwoToneIcon from '@mui/icons-material/PinDropTwoTone';
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';
import PhoneAndroidTwoToneIcon from '@mui/icons-material/PhoneAndroidTwoTone';

// ==============================|| CONTACT CARD ||============================== //

const ContactCard = ({ primary, prodimg, position, location, email, phone }) => {
  return (
    <Card sx={{ marginTop: 10, overflow: 'visible', textAlign: 'center' }}>
      <CardContent>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <CardMedia
              component="img"
              image={prodimg}
              title="Cover image"
              sx={{
                borderRadius: 4,
                boxShadow: '0px 16px 32px rgba(169, 194, 209, 0.15), 0px 8px 16px rgba(169, 194, 209, 0.1)',
                mx: 'auto',
                mt: -12,
                width: 150
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography component="div" align="center" variant="h3">
              {primary}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Chip color="primary" label={position} />
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Grid container alignItems="center" spacing={0}>
              <Grid item xs zeroMinWidth>
                <Typography component="div" align="left" variant="body2">
                  <PinDropTwoToneIcon sx={{ width: 15, height: 15, verticalAlign: 'text-top', mr: 0.6 }} /> Location:
                </Typography>
              </Grid>
              <Grid item>
                <Typography component="div" align="right" variant="body2">
                  {location}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container alignItems="center" spacing={0}>
              <Grid item xs zeroMinWidth>
                <Typography component="div" align="left" variant="body2">
                  <MailTwoToneIcon sx={{ width: 15, height: 15, verticalAlign: 'text-top', mr: 0.6 }} /> Email:
                </Typography>
              </Grid>
              <Grid item>
                <Typography component="div" align="right" variant="body2">
                  {email}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container alignItems="center" spacing={0}>
              <Grid item xs zeroMinWidth>
                <Typography component="div" align="left" variant="body2">
                  <PhoneAndroidTwoToneIcon sx={{ width: 15, height: 15, verticalAlign: 'text-top', mr: 0.6 }} /> Phone:
                </Typography>
              </Grid>
              <Grid item>
                <Typography component="div" align="right" variant="body2">
                  {phone}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

ContactCard.propTypes = {
  primary: PropTypes.string,
  prodimg: PropTypes.string,
  position: PropTypes.string,
  location: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string
};

export default ContactCard;
