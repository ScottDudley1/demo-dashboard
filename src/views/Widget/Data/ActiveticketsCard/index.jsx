import PropTypes from 'prop-types';
import React, { useState } from 'react';

// material-ui
import { Avatar, Button, Card, Divider, CardHeader, CardContent, CardActions, Grid, Typography, useTheme } from '@mui/material';

// third party
import MUIDataTable from 'mui-datatables';

// assets
import Avatar1 from 'assets/images/users/avatar-1.jpg';
import Avatar2 from 'assets/images/users/avatar-2.jpg';
import Avatar3 from 'assets/images/users/avatar-3.jpg';
import Avatar4 from 'assets/images/users/avatar-4.jpg';

const initialData = [
  [
    '12',
    'hours',
    Avatar1,
    'John Deo',
    '[#1183] Workaround for OS X selects printing bug',
    'Chrome fixed the bug several versions ago, thus rendering this...'
  ],
  [
    '16',
    'hours',
    Avatar2,
    'Jems Win',
    '[#1249] Vertically center carousel controls',
    'Try any carousel control and reduce the screen width below...'
  ],
  [
    '40',
    'hours',
    Avatar3,
    'Jeny Wiliiam',
    '[#1254] Inaccurate small pagination height',
    'The height of pagination elements is not consistent with...'
  ],
  [
    '16',
    'hours',
    Avatar4,
    'Jems Win',
    '[#1249] Vertically center carousel controls',
    'Try any carousel control and reduce the screen width below...'
  ]
];

// ==============================|| ACTIVE TICKET CARD ||============================== //

const ActiveticketsCard = ({ title }) => {
  const theme = useTheme();
  const [data] = useState(initialData);

  const columns = [
    {
      name: 'Due',
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => {
          return (
            <>
              <Typography align="left" component="div" variant="subtitle1">
                {data[dataIndex][0]}
              </Typography>
              <Typography align="left" component="div" variant="subtitle2">
                {data[dataIndex][1]}
              </Typography>
            </>
          );
        }
      }
    },
    {
      name: 'Name',
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => {
          return (
            <Grid key={dataIndex} container spacing={2} alignItems="center">
              <Grid item>
                <Avatar alt="User 1" src={data[dataIndex][2]} />
              </Grid>
              <Grid item xs zeroMinWidth>
                <Typography align="left" component="div" variant="subtitle2">
                  {data[dataIndex][3]}
                </Typography>
              </Grid>
            </Grid>
          );
        }
      }
    },
    {
      name: 'Position',
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => {
          return (
            <>
              <Typography align="left" component="div" variant="subtitle1">
                {data[dataIndex][4]}
              </Typography>
              <Typography align="left" component="div" variant="subtitle2">
                {data[dataIndex][5]}
              </Typography>
            </>
          );
        }
      }
    }
  ];

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
      <CardContent
        sx={{ '.tss-69kwe1-MUIDataTableToolbarSelect-root': { px: theme.direction === 'rtl' ? 3 : 0 } }}
        className="p-0 responsive-table-card"
      >
        <MUIDataTable
          aria-label="Table"
          data={data}
          columns={columns}
          sx={{ boxShadow: 'none' }}
          options={{ download: false, print: false, search: false, filter: false, viewColumns: false, pagination: false }}
        />
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

ActiveticketsCard.propTypes = {
  title: PropTypes.string
};

export default ActiveticketsCard;
