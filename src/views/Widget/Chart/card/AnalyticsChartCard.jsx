import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

// material-ui
import { Box, Button, Card, CardContent, Grid, Menu, MenuItem, Typography } from '@mui/material';

// third-party
import Chart from 'react-apexcharts';

// assets
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useTheme } from '@mui/material';

// ==============================|| ANALYTICS CHART CARD ||============================== //

const AnalyticsChartCard = ({ title, chartData, dropData, listData }) => {
  const theme = useTheme();
  const [chartDatas, setChartDatas] = useState(chartData);

  useEffect(() => {
    setChartDatas((prevState) => ({
      ...prevState,
      options: {
        theme: {
          mode: theme.palette.mode === 'dark' ? 'dark' : 'light'
        }
      }
    }));
  }, [theme.palette.mode]);
  const [anchorEl, setAnchorEl] = useState(null);
  let dropHtml;

  if (dropData) {
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    dropHtml = (
      <>
        <Button
          variant="text"
          disableElevation
          color="primary"
          size="small"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          {dropData.title}
        </Button>
        <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
          {dropData.options.map((option, index) => {
            return (
              <MenuItem key={index} onClick={handleClose}>
                {option.label}
              </MenuItem>
            );
          })}
        </Menu>
      </>
    );
  }
  let listItem;
  if (listData) {
    listItem = listData.map((item, index) => {
      return (
        <Grid item key={index} sm={12}>
          <Box color={item.color}>
            <Grid container spacing={1} justifyContent="center">
              <Grid item>{item.icon}</Grid>
              <Grid item>
                <Typography variant="subtitle1">{item.value}%</Typography>
              </Grid>
              <Grid item>
                {item.state === 1 && <ArrowUpwardIcon fontSize="inherit" color="inherit" />}
                {item.state === 0 && <ArrowDownwardIcon fontSize="inherit" color="inherit" />}
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" color="inherit">
                  {item.percentage}%
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      );
    });
  }

  return (
    <Card>
      <CardContent>
        <Grid container justifyContent="space-between" alignItems="center">
          {title && (
            <Grid item>
              <Typography variant="subtitle1">{title}</Typography>
            </Grid>
          )}
          <Grid item>{dropHtml}</Grid>
        </Grid>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item container direction="column" spacing={1} xs={12} sm={6}>
            <Box mt={3} display="block">
              {listItem}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Chart options={chartDatas.options} series={chartDatas.series} type="bar" height={224} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

AnalyticsChartCard.propTypes = {
  title: PropTypes.string,
  chartData: PropTypes.object,
  dropData: PropTypes.object,
  listData: PropTypes.array,
  options: PropTypes.object
};

export default AnalyticsChartCard;
