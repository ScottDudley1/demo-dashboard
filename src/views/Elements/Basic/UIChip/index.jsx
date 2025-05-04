import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Chip, Typography, Grid, Card, CardHeader, CardContent, Divider, Avatar } from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';

// assets
import TagFacesIcon from '@mui/icons-material/TagFaces';
import value from 'assets/scss/_themes-vars.module.scss';
import User1 from 'assets/images/users/avatar-1.jpg';

const chipArray = [
  { key: 0, label: 'Angular' },
  { key: 1, label: 'jQuery' },
  { key: 2, label: 'Polymer' },
  { key: 3, label: 'React' },
  { key: 4, label: 'Vue.js' }
];

// ==============================|| UI CHIP ||============================== //

const UIChip = () => {
  const [chipData, setChipData] = React.useState(chipArray);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <>
      <Breadcrumb title="Chip">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          Basic Element
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Chip
        </Typography>
      </Breadcrumb>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Basic Chip
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={1}>
                <Grid item>
                  <Chip sx={{ backgroundColor: 'secondary' }} label="Basic" />
                </Grid>
                <Grid item>
                  <Chip sx={{ backgroundColor: value.secondary }} label="Label" />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Variant Chip
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={1}>
                <Grid item>
                  <Chip color="secondary" label="Default" />
                </Grid>
                <Grid item>
                  <Chip label="Outlined" variant="outlined" color="secondary" />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Chip Size
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={1}>
                <Grid item>
                  <Chip color="secondary" size="small" label="Small" />
                </Grid>
                <Grid item>
                  <Chip color="secondary" label="Medium" />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Chip Disabled
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={1}>
                <Grid item>
                  <Chip sx={{ backgroundColor: '#a1aab3' }} label="Disabled" disabled />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Clickable Chip
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={1}>
                <Grid item>
                  <Chip color="secondary" label="Clickable" clickable />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Color Chip
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={1}>
                <Grid item>
                  <Chip label="Primary" color="primary" />
                </Grid>
                <Grid item>
                  <Chip label="Secondary" color="secondary" />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Icon Chip
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={1}>
                <Grid item>
                  <Chip color="secondary" label="Default" avatar={<Avatar />} />
                </Grid>
                <Grid item>
                  <Chip color="secondary" label="John Doe" avatar={<Avatar alt="Avatar 1" src={User1} />} />
                </Grid>
                <Grid item>
                  <Chip color="primary" label="Digit" avatar={<Avatar>4</Avatar>} />
                </Grid>
                <Grid item>
                  <Chip color="secondary" label="Letter" avatar={<Avatar>A</Avatar>} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Array Chip
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={1}>
                {chipData.map((data) => {
                  let icon;

                  if (data.label === 'React') {
                    icon = <TagFacesIcon />;
                  }

                  return (
                    <Grid item key={data.key}>
                      <Chip
                        color="secondary"
                        icon={icon}
                        label={data.label}
                        onDelete={data.label === 'React' ? undefined : handleDelete(data)}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default UIChip;
