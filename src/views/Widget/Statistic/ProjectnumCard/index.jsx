import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { styled } from '@mui/material/styles';
import { Card, CardContent, Grid, Typography, useTheme } from '@mui/material';

// assets
import SyncAltRoundedIcon from '@mui/icons-material/SyncAltRounded';

// custom style
const RoundIcon = styled((props) => <div {...props} />)(() => ({
  width: '100px',
  height: '100px',
  display: 'inline-flex',
  alignItems: 'center',
  position: 'absolute',
  top: '-45px',
  right: '-35px',
  borderRadius: '50%',
  overflow: 'hidden',
  justifyContent: 'center'
}));

// ==============================|| PROJECT NUM CARD ||============================== //

const ProjectnumCard = ({ primary, secondary, secondary1, secondary2, content, iconPrimary, color }) => {
  const theme = useTheme();
  const IconPrimary = iconPrimary;
  const primaryIcon = iconPrimary ? <IconPrimary fontSize="large" /> : null;

  return (
    <Card sx={{ position: 'relative', overflow: 'hidden' }}>
      <CardContent>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12}>
            <RoundIcon>
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
              <span style={{ color: color, position: 'relative', top: 19, right: theme.direction === 'rtl' ? -13 : 15 }}>{content}</span>
            </RoundIcon>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <Typography variant="subtitle2" sx={{ color: color }}>
                  {primaryIcon}
                </Typography>
              </Grid>
              <Grid item sm zeroMinWidth>
                <Typography variant="subtitle1" color="inherit">
                  {primary}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: color }}>
                  {secondary}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container alignItems="center" spacing={0}>
              <Grid item xs={4}>
                <Typography align="center" variant="subtitle1" color="inherit">
                  {secondary1}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography align="center" variant="h3" sx={{ color: color }}>
                  <SyncAltRoundedIcon />
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography align="center" variant="subtitle2" color="inherit">
                  {secondary2}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

ProjectnumCard.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
  secondary1: PropTypes.string,
  secondary2: PropTypes.string,
  content: PropTypes.string,
  iconPrimary: PropTypes.object,
  color: PropTypes.string
};

export default ProjectnumCard;
