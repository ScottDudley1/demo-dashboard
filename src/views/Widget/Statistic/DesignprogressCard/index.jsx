import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { LinearProgress, Card, CardContent, Grid, Typography } from '@mui/material';

// assets
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';

// ==============================|| DESIGN PROGRESS CARD ||============================== //

const DesignProgressCard = ({ topvalue, toptext, bottomvalue, bottomtext, progressvalue, title, color, progresscolor }) => {
  const theme = useTheme();

  return (
    <Card>
      <CardContent>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs zeroMinWidth>
                <Typography align="left" variant="subtitle1">
                  <ArrowUpwardTwoToneIcon sx={{ color: theme.palette.success.main, verticalAlign: 'sub' }} />
                  {topvalue}
                </Typography>
              </Grid>
              <Grid item>
                <Typography align="left" variant="subtitle1">
                  <ArrowDownwardTwoToneIcon sx={{ color: theme.palette.error.main, verticalAlign: 'sub' }} />
                  {bottomvalue}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <LinearProgress variant="determinate" aria-label="Design progress" value={progressvalue} color={progresscolor} />
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs zeroMinWidth>
                <Typography align="left" variant="subtitle2">
                  {toptext}
                </Typography>
              </Grid>
              <Grid item>
                <Typography align="left" variant="subtitle2">
                  {bottomtext}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography align="left" variant="subtitle1" sx={{ color: color }}>
              {title}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

DesignProgressCard.propTypes = {
  topvalue: PropTypes.string,
  toptext: PropTypes.string,
  bottomvalue: PropTypes.string,
  bottomtext: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
  progressvalue: PropTypes.number,
  progresscolor: PropTypes.string
};

export default DesignProgressCard;
