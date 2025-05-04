import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { styled } from '@mui/material/styles';
import { Card, CardContent, Grid, Typography } from '@mui/material';

// custom style
const RoundIconDiv = styled((props) => <div {...props} />)(() => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '50px',
  height: '50px',
  position: 'relative',
  borderRadius: '50%',
  overflow: 'hidden'
}));

// ==============================|| ROUND ICON BG CARD ||============================== //

const RoundiconbgCard = ({ primary, secondary, content, iconPrimary, content2, iconFooter, color }) => {
  const IconPrimary = iconPrimary;
  const primaryIcon = iconPrimary ? (
    <IconPrimary
      style={{ color: color, position: 'relative', width: 30, height: 30, verticalAlign: 'top', zIndex: '5' }}
      fontSize="large"
    />
  ) : null;

  const IconFooter = iconFooter;
  const footerIcon = iconFooter ? <IconFooter style={{ width: 20, height: 20, verticalAlign: 'top' }} /> : null;

  return (
    <Card sx={{ position: 'relative', color: '#fff', background: color }}>
      <CardContent>
        <Grid container alignItems="center" spacing={2} justifyContent="space-between">
          <Grid item>
            <RoundIconDiv>
              <span
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  top: '0',
                  left: '0',
                  zIndex: '1',
                  background: '#fff'
                }}
              ></span>
              <span>{primaryIcon}</span>
            </RoundIconDiv>
          </Grid>
          <Grid item>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Typography align="right" variant="h3" color="inherit">
                  {secondary}
                </Typography>
              </Grid>
              <Grid item>
                <Typography align="right" variant="subtitle1" color="inherit">
                  {primary}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <Typography variant="subtitle2" color="inherit">
              {content}
            </Typography>
          </Grid>
          <Grid item sm zeroMinWidth>
            <Typography variant="subtitle2" align="right" color="inherit">
              <span>{footerIcon}</span> {content2}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

RoundiconbgCard.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
  iconPrimary: PropTypes.object,
  content: PropTypes.string,
  iconFooter: PropTypes.object,
  color: PropTypes.string,
  content2: PropTypes.string
};

export default RoundiconbgCard;
