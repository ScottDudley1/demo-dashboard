import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import {
  Button,
  Grid,
  Typography,
  Fab,
  Checkbox,
  FormControlLabel,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  LinearProgress,
  Box
} from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';

import ProjecttableCard from './ProjecttableCard';
import TeammembersCard from './TeammembersCard';
import UseractivityCard from './UseractivityCard';
import LatestupdatesCard from './LatestupdatesCard';
import RecentticketsCard from './RecentticketsCard';
import ApplicationsalesCard from './ApplicationsalesCard';
import ActiveticketsCard from './ActiveticketsCard';
import LatestpostsCard from './LatestpostsCard';
import TasksCard from './TasksCard';
import LatestcustomersCard from './LatestcustomersCard';
import FeedsCard from './FeedsCard';
import LatestorderCard from './LatestorderCard';
import ProductsalesCard from './ProductsalesCard';
import IncomingrequestsCard from './IncomingrequestsCard';
import TotalrevenueCard from './TotalrevenueCard';
import NewcustomersCard from './NewcustomersCard';

// assets
import AddRoundedIcon from '@mui/icons-material/AddRounded';

// ==============================|| WIDGET STATISTICS ||============================== //

const WidgetStatistics = () => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedD: false,
    checkedE: false,
    checkedF: false
  });

  const handleChangeState = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Breadcrumb title="Widget Data">
            <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
              Home
            </Typography>
            <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
              Widget
            </Typography>
            <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
              Data
            </Typography>
          </Breadcrumb>
        </Grid>
      </Grid>
      <Box>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} lg={4} md={6}>
            <Card>
              <CardHeader
                title={
                  <Typography component="div" className="card-header">
                    To Do List
                  </Typography>
                }
              />
              <Divider />
              <CardContent>
                <Grid container spacing={0}>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox checked={state.checkedA} onChange={handleChangeState} name="checkedA" color="primary" />}
                      label="Check your Email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox checked={state.checkedB} onChange={handleChangeState} name="checkedB" color="primary" />}
                      label="Make YouTube Video"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox checked={state.checkedC} onChange={handleChangeState} name="checkedC" color="primary" />}
                      label="Create Banner"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox checked={state.checkedD} onChange={handleChangeState} name="checkedD" color="primary" />}
                      label="Upload Project"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox checked={state.checkedE} onChange={handleChangeState} name="checkedE" color="primary" />}
                      label="Update Task"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox checked={state.checkedF} onChange={handleChangeState} name="checkedF" color="primary" />}
                      label="Task Issue"
                    />
                  </Grid>
                </Grid>
              </CardContent>
              <Divider />
              <CardActions>
                <Grid container direction="row-reverse">
                  <Grid item>
                    <Fab size="small" aria-label="Add" color="primary">
                      <AddRoundedIcon size="small" />
                    </Fab>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} lg={4} md={6}>
            <Card>
              <CardHeader
                title={
                  <Typography component="div" className="card-header">
                    Traffic Sources
                  </Typography>
                }
              />
              <Divider />
              <CardContent>
                <Grid container spacing={gridSpacing}>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">Direct</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" align="right">
                          80%
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="traffic sources" value={80} color="primary" />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">Social</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" align="right">
                          50%
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="social" value={50} color="secondary" />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">Referral</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" align="right">
                          20%
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="refferal" value={20} color="primary" />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">Bounce</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" align="right">
                          58%
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="bounce" value={60} color="secondary" />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">Internet</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" align="right">
                          40%
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="internet" value={40} color="primary" />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">Social</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" align="right">
                          90%
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="social" value={90} color="primary" />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={4} md={12}>
            <TeammembersCard title="Team Members" />
          </Grid>

          <Grid item xs={12} md={7} lg={6}>
            <UseractivityCard title="User Activity" />
          </Grid>
          <Grid item xs={12} md={5} lg={6}>
            <LatestupdatesCard title="Messages" />
          </Grid>

          <Grid item xs={12} lg={6} md={6}>
            <Card>
              <CardHeader
                title={
                  <Typography component="div" className="card-header">
                    Projects
                  </Typography>
                }
              />
              <Divider />
              <CardContent className="p-0">
                <ProjecttableCard />
              </CardContent>
              <Divider />
              <CardActions className="f-right">
                <Button variant="text" size="small" color="primary">
                  View all Projects
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} lg={6} md={6}>
            <ProductsalesCard title="Product Sales" />
          </Grid>

          <Grid item xs={12} md={4}>
            <TasksCard title="Tasks" />
          </Grid>
          <Grid item xs={12} md={8}>
            <ApplicationsalesCard title="Application Sales" />
          </Grid>

          <Grid item xs={12} md={8}>
            <ActiveticketsCard title="Active Tickets" />
          </Grid>
          <Grid item xs={12} md={4}>
            <LatestpostsCard title="Latest Posts" />
          </Grid>

          <Grid item xs={12} md={4}>
            <FeedsCard title="Feeds" />
          </Grid>
          <Grid item xs={12} md={8}>
            <LatestcustomersCard title="Latest Customers" />
          </Grid>

          <Grid item xs={12}>
            <LatestorderCard title="Latest Order" />
          </Grid>

          <Grid item xs={12} lg={4} md={6}>
            <IncomingrequestsCard title="Incoming Requests" />
          </Grid>
          <Grid item xs={12} lg={4} md={6}>
            <TotalrevenueCard title="Total Revenue" />
          </Grid>
          <Grid item xs={12} lg={4} md={12}>
            <NewcustomersCard title="New Customers" />
          </Grid>

          <Grid item xs={12} md={12} lg={8}>
            <RecentticketsCard title="Recent Tickets" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default WidgetStatistics;
