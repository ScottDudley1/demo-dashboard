import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { styled } from '@mui/material/styles';
import { Card, CardContent, Grid, Typography } from '@mui/material';

// custom style
const RoundIconDiv = styled((props) => <div {...props} />)(() => ({
  display: 'inline-flex',
  alignItems: 'center',
  position: 'relative',
  borderRadius: '50px',
  overflow: 'hidden',
  padding: '6px 12px'
}));

// ==============================|| TICKET CARD ||============================== //

const TicketCard = ({ primary, secondary, secondary1, content, iconPrimary, iconFooter, color }) => {
  const IconPrimary = iconPrimary;
  const primaryIcon = iconPrimary ? <IconPrimary style={{ width: 18, height: 18, verticalAlign: 'top' }} fontSize="large" /> : null;

  const IconFooter = iconFooter;
  const footerIcon = iconFooter ? <IconFooter style={{ width: 20, height: 20, verticalAlign: 'middle' }} /> : null;

  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12}>
            <RoundIconDiv>
              <span
                style={{
                  background: color,
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  top: '0',
                  left: '0',
                  opacity: '0.2',
                  zIndex: '1'
                }}
              ></span>
              <span style={{ color: color }}>
                {primaryIcon} {content}
              </span>
            </RoundIconDiv>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item xs={6}>
                <Typography variant="h3" align="right" sx={{ color: color }}>
                  {primary}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle1" align="left">
                  {secondary}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center" variant="subtitle2" color="inherit">
              <span style={{ color: color }}>{footerIcon}</span> {secondary1}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

TicketCard.propTypes = {
  color: PropTypes.string,
  primary: PropTypes.string,
  iconPrimary: PropTypes.object,
  secondary: PropTypes.string,
  secondary1: PropTypes.string,
  content: PropTypes.string,
  iconFooter: PropTypes.object
};

export default TicketCard;
