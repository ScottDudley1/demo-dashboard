import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Button, Link, Divider, Card, CardHeader, CardContent, CardActions, Grid, Typography } from '@mui/material';

// project-import
import { gridSpacing } from 'config.js';
import Avatar from 'component/Avatar';

// assets
import CheckIcon from '@mui/icons-material/Check';

// custom style
const ProjectTableMain = styled((props) => <Grid container spacing={gridSpacing} alignItems="center" {...props} />)(() => ({
  position: 'relative',
  '&>*': {
    position: 'relative',
    zIndex: '5'
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    top: '0',
    left: '35px',
    width: '2px',
    height: '100%',
    background: '#ebebeb',
    zIndex: '1'
  }
}));

// ==============================|| TASK CARD ||============================== //

const TasksCard = ({ title }) => {
  const theme = useTheme();

  return (
    <Card>
      <CardHeader
        title={
          <Typography component="div" className="card-header">
            {title}
          </Typography>
        }
      />
      <Divider />
      <CardContent>
        <ProjectTableMain>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item>
                <Avatar color="success" size="small" sx={{ top: 10 }}>
                  <CheckIcon />
                </Avatar>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Grid container spacing={0}>
                  <Grid item xs={12}>
                    <Typography align="left" variant="caption">
                      8:50
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography align="left" variant="body2">
                      You’re getting more and more followers, keep it up!
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item>
                <Avatar color="primary" size="small" sx={{ top: 10 }}>
                  <CheckIcon sx={{ display: 'none' }} />
                </Avatar>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Grid container spacing={0}>
                  <Grid item xs={12}>
                    <Typography align="left" variant="caption">
                      Sat, 5 Mar
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography align="left" variant="body2">
                      Design mobile Application
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item>
                <Avatar color="error" size="small" sx={{ top: 10 }}>
                  <CheckIcon sx={{ display: 'none' }} />
                </Avatar>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Grid container spacing={0}>
                  <Grid item xs={12}>
                    <Typography align="left" variant="caption">
                      Sun, 17 Feb
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography align="left" variant="body2">
                      <Link href="#" sx={{ color: theme.palette.primary.main }}>
                        Jeny
                      </Link>{' '}
                      assign you a task{' '}
                      <Link href="#" sx={{ color: theme.palette.primary.main }}>
                        Mockup Design
                      </Link>
                      .
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item>
                <Avatar color="warning" size="small" sx={{ top: 10 }}>
                  <CheckIcon sx={{ display: 'none' }} />
                </Avatar>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Grid container spacing={0}>
                  <Grid item xs={12}>
                    <Typography align="left" variant="caption">
                      Sat, 18 Mar
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography align="left" variant="body2">
                      Design logo
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item>
                <Avatar color="success" size="small" sx={{ top: 10 }}>
                  <CheckIcon sx={{ display: 'none' }} />
                </Avatar>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Grid container spacing={0}>
                  <Grid item xs={12}>
                    <Typography align="left" variant="caption">
                      Sat, 22 Mar
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography align="left" variant="body2">
                      Design mobile Application
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ProjectTableMain>
      </CardContent>
      <Divider />
      <CardActions className="f-right">
        <Button variant="text" size="small" color="primary">
          View all Projects
        </Button>
      </CardActions>
    </Card>
  );
};

TasksCard.propTypes = {
  title: PropTypes.string
};

export default TasksCard;
