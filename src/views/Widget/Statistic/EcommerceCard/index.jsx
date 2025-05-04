import PropTypes from 'prop-types';

// material-ui
import { Card, CardContent, Grid, Typography, CardHeader, Button, LinearProgress, Divider } from '@mui/material';

// ==============================|| E-COMMERCE CARD ||============================== //

const EcommerceCard = ({ cardtitle, numtext, btntext, subtext, numsubtext, btncolor, progressvalue }) => {
  return (
    <Card>
      <CardHeader
        title={
          <Typography component="div" className="card-header">
            {cardtitle}
          </Typography>
        }
      />
      <Divider />
      <CardContent>
        <Grid container spacing={2} direction="column">
          <Grid item sm={12}>
            <Typography variant="h3">{numtext}</Typography>
          </Grid>
          <Grid item sm={12}>
            <Button variant="contained" color={btncolor}>
              {btntext}
            </Button>
          </Grid>
          <Grid item sm={12}>
            <Typography variant="subtitle2">{subtext}</Typography>
          </Grid>
          <Grid item sm={12}>
            <Typography variant="h6">{numsubtext}</Typography>
          </Grid>
          <Grid item sm={12}>
            <LinearProgress variant="determinate" aria-label="e-commerce" value={progressvalue} color={btncolor} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

EcommerceCard.propTypes = {
  cardtitle: PropTypes.string,
  numtext: PropTypes.string,
  btntext: PropTypes.string,
  subtext: PropTypes.string,
  numsubtext: PropTypes.string,
  btncolor: PropTypes.string,
  progressvalue: PropTypes.number
};

export default EcommerceCard;
