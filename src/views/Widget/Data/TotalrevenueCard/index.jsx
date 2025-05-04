import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Card, CardHeader, CardContent, Typography, List, ListItemIcon, Divider, ListItemText, ListItemButton } from '@mui/material';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// assets
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

// custom style
const CoinTextBox = styled((props) => <div {...props} />)(() => ({
  display: 'flex',
  justifyContent: 'space-between'
}));

// ==============================|| TOTAL REVENUE CARD ||============================== //

const TotalrevenueCard = ({ title }) => {
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
      <CardContent sx={{ p: 0, pb: 0 }}>
        <PerfectScrollbar style={{ height: 350 }}>
          <List component="nav" aria-label="main mailbox folders">
            <ListItemButton>
              <ListItemIcon>
                <ArrowDropUpIcon sx={{ color: theme.palette.success.main, width: 40, height: 40, margin: -0.75 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <CoinTextBox>
                    <span>Bitcoin</span>
                    <span style={{ color: theme.palette.success.main }}>+ $145.85</span>
                  </CoinTextBox>
                }
              />
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <ArrowDropDownIcon sx={{ color: theme.palette.error.main, width: 40, height: 40, margin: -0.75 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <CoinTextBox>
                    <span>Ethereum</span>
                    <span style={{ color: theme.palette.error.main }}>- $6.368</span>
                  </CoinTextBox>
                }
              />
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <ArrowDropUpIcon sx={{ color: theme.palette.success.main, width: 40, height: 40, margin: -0.75 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <CoinTextBox>
                    <span>Ripple</span>
                    <span style={{ color: theme.palette.success.main }}>+ $458.63</span>
                  </CoinTextBox>
                }
              />
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <ArrowDropDownIcon sx={{ color: theme.palette.error.main, width: 40, height: 40, margin: -0.75 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <CoinTextBox>
                    <span>Neo</span>
                    <span style={{ color: theme.palette.error.main }}>- $5.631</span>
                  </CoinTextBox>
                }
              />
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <ArrowDropDownIcon sx={{ color: theme.palette.error.main, width: 40, height: 40, margin: -0.75 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <CoinTextBox>
                    <span>Ethereum</span>
                    <span style={{ color: theme.palette.error.main }}>- $6.368</span>
                  </CoinTextBox>
                }
              />
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <ArrowDropUpIcon sx={{ color: theme.palette.success.main, width: 40, height: 40, margin: -0.75 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <CoinTextBox>
                    <span>Ripple</span>
                    <span style={{ color: theme.palette.success.main }}>+ $458.63</span>
                  </CoinTextBox>
                }
              />
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <ArrowDropDownIcon sx={{ color: theme.palette.error.main, width: 40, height: 40, margin: -0.75 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <CoinTextBox>
                    <span>Neo</span>
                    <span style={{ color: theme.palette.error.main }}>- $5.631</span>
                  </CoinTextBox>
                }
              />
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <ArrowDropDownIcon sx={{ color: theme.palette.error.main, width: 40, height: 40, margin: -0.75 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <CoinTextBox>
                    <span>Ethereum</span>
                    <span style={{ color: theme.palette.error.main }}>- $6.368</span>
                  </CoinTextBox>
                }
              />
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <ArrowDropUpIcon sx={{ color: theme.palette.success.main, width: 40, height: 40, margin: -0.75 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <CoinTextBox>
                    <span>Ripple</span>
                    <span style={{ color: theme.palette.success.main }}>+ $458.63</span>
                  </CoinTextBox>
                }
              />
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <ArrowDropDownIcon sx={{ color: theme.palette.error.main, width: 40, height: 40, margin: -0.75 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <CoinTextBox>
                    <span>Neo</span>
                    <span style={{ color: theme.palette.error.main }}>- $5.631</span>
                  </CoinTextBox>
                }
              />
            </ListItemButton>
          </List>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
};

TotalrevenueCard.propTypes = {
  title: PropTypes.string
};

export default TotalrevenueCard;
