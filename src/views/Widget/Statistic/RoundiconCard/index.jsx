import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { styled } from '@mui/material/styles';
import { Card, CardContent, Grid, Typography } from '@mui/material';

// custom style
const RoundIconDiv = styled((props) => <div {...props} />)(() => ({
  width: '50px',
  height: '50px',
  display: 'inline-flex',
  alignItems: 'center',
  position: 'relative',
  borderRadius: '50%',
  overflow: 'hidden',
  justifyContent: 'center'
}));

// ==============================|| ROUND ICON CARD ||============================== //

const RoundiconCard = ({ primary, secondary, content, iconPrimary, color }) => {
  const IconPrimary = iconPrimary;
  const primaryIcon = iconPrimary ? (
    <IconPrimary style={{ color: color, width: 20, height: 20, verticalAlign: 'middle' }} fontSize="large" />
  ) : null;

  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Grid container alignItems="center" spacing={0} justifyContent="space-between">
          <Grid item>
            <Grid container spacing={1} direction="column">
              <Grid item>
                <Typography variant="h6" color="inherit">
                  {primary}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h3" sx={{ color: color }}>
                  {secondary}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle2" color="inherit">
                  {content}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
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
              <span>{primaryIcon}</span>
            </RoundIconDiv>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

RoundiconCard.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
  content: PropTypes.string,
  iconPrimary: PropTypes.object,
  color: PropTypes.string
};

export default RoundiconCard;
