import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Grid, Card, CardHeader, CardContent, Divider, Typography } from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import Accordion from 'component/Accordion';
import { gridSpacing } from 'config.js';

// assets
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FaceTwoToneIcon from '@mui/icons-material/FaceTwoTone';
import DomainTwoToneIcon from '@mui/icons-material/DomainTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';

const basicData = [
  {
    id: 'basic1',
    title: 'Accordion Group Item #1',
    content:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus' +
      ' terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. ' +
      'Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it ' +
      'squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer ' +
      'labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.'
  },
  {
    id: 'basic2',
    title: 'Accordion Group Item #2',
    content:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus' +
      ' terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. ' +
      'Food truck quinoa nesciunt laborum eiusmod. vegan excepteur butcher vice lomo. Leggings ' +
      "occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of " +
      'them accusamus labore sustainable VHS.\n'
  },
  {
    id: 'basic3',
    title: 'Accordion Group Item #3',
    content:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus' +
      ' terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer ' +
      'labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings ' +
      "occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of " +
      'them accusamus labore sustainable VHS.\n'
  }
];

const disabledData = [
  {
    id: 'basic1',
    title: 'Accordion Group Item #1',
    content:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus' +
      ' terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. ' +
      'Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it ' +
      'squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer ' +
      'labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.'
  },
  {
    id: 'basic2',
    title: 'Accordion Group Item #2',
    content:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus' +
      ' terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. ' +
      'Food truck quinoa nesciunt laborum eiusmod. vegan excepteur butcher vice lomo. Leggings ' +
      "occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of " +
      'them accusamus labore sustainable VHS.\n'
  },
  {
    id: 'basic3',
    disabled: true,
    title: 'Accordion Group Item #3',
    content:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus' +
      ' terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer ' +
      'labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings ' +
      "occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of " +
      'them accusamus labore sustainable VHS.\n'
  }
];

const defaultExpandData = [
  {
    id: 'basic1',
    defaultExpand: true,
    title: 'Accordion Group Item #1',
    content:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus' +
      ' terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. ' +
      'Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it ' +
      'squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer ' +
      'labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.'
  },
  {
    id: 'basic2',
    title: 'Accordion Group Item #2',
    content:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus' +
      ' terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. ' +
      'Food truck quinoa nesciunt laborum eiusmod. vegan excepteur butcher vice lomo. Leggings ' +
      "occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of " +
      'them accusamus labore sustainable VHS.\n'
  },
  {
    id: 'basic3',
    title: 'Accordion Group Item #3',
    content:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus' +
      ' terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer ' +
      'labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings ' +
      "occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of " +
      'them accusamus labore sustainable VHS.\n'
  }
];

const fixedExpandData = [
  {
    id: 'basic1',
    title: 'Accordion Group Item #1',
    content:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus' +
      ' terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. ' +
      'Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it ' +
      'squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer ' +
      'labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.'
  },
  {
    id: 'basic2',
    expanded: true,
    title: 'Accordion Group Item #2',
    content:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus' +
      ' terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. ' +
      'Food truck quinoa nesciunt laborum eiusmod. vegan excepteur butcher vice lomo. Leggings ' +
      "occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of " +
      'them accusamus labore sustainable VHS.\n'
  },
  {
    id: 'basic3',
    title: 'Accordion Group Item #3',
    content:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus' +
      ' terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer ' +
      'labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings ' +
      "occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of " +
      'them accusamus labore sustainable VHS.\n'
  }
];

const multipleExpandData = [
  {
    id: 'basic1',
    defaultExpand: true,
    title: 'Accordion Group Item #1',
    content:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus' +
      ' terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. ' +
      'Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it ' +
      'squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer ' +
      'labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.'
  },
  {
    id: 'basic2',
    title: 'Accordion Group Item #2',
    content:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus' +
      ' terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. ' +
      'Food truck quinoa nesciunt laborum eiusmod. vegan excepteur butcher vice lomo. Leggings ' +
      "occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of " +
      'them accusamus labore sustainable VHS.\n'
  },
  {
    id: 'basic3',
    defaultExpand: true,
    title: 'Accordion Group Item #3',
    content:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus' +
      ' terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer ' +
      'labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings ' +
      "occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of " +
      'them accusamus labore sustainable VHS.\n'
  }
];

const customContentData = [
  {
    id: 'basic1',
    defaultExpand: true,
    title: (
      <>
        <FaceTwoToneIcon fontSize="small" color="primary" sx={{ mr: 0.5 }} />
        <Typography variant="subtitle1" color="primary">
          Profile
        </Typography>
      </>
    ),
    content: (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="subtitle1">Joseph William</Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item>
          <Typography variant="subtitle2">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
            cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
            on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
            cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
            aesthetic synth nesciunt you probably have not heard of them accusamus labore sustainable VHS.
          </Typography>
        </Grid>
      </Grid>
    )
  },
  {
    id: 'basic2',
    title: (
      <>
        <DomainTwoToneIcon fontSize="small" color="error" sx={{ mr: 0.5 }} />
        <Typography variant="subtitle1" color="error">
          Address
        </Typography>
      </>
    ),
    content:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus' +
      ' terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. ' +
      'Food truck quinoa nesciunt laborum eiusmod. vegan excepteur butcher vice lomo. Leggings ' +
      "occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of " +
      'them accusamus labore sustainable VHS.\n'
  },
  {
    id: 'basic3',
    title: (
      <>
        <MonetizationOnTwoToneIcon fontSize="small" color="secondary" sx={{ mr: 0.5 }} />
        <Typography variant="subtitle1" color="secondary">
          Account Info
        </Typography>
      </>
    ),
    content:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus' +
      ' terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer ' +
      'labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings ' +
      "occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of " +
      'them accusamus labore sustainable VHS.\n'
  }
];

// ==============================|| UI ACCORDION ||============================== //

const UIAccordion = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Breadcrumb title="Accordion">
            <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
              Home
            </Typography>
            <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
              Basic Element
            </Typography>
            <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
              Accordion
            </Typography>
          </Breadcrumb>
        </Grid>
      </Grid>
      <Grid container spacing={gridSpacing}>
        <Grid item sm={6}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Basic Accordion
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Accordion data={basicData} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={6}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Disabled Accordion
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Accordion data={disabledData} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={6}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Default Expand Accordion
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Accordion data={defaultExpandData} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={6}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Fixed Expand Accordion
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Accordion data={fixedExpandData} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={6}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Controlled/Toggle Accordion{' '}
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Accordion data={defaultExpandData} toggle defaultExpandedId="basic1" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={6}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Square Accordion{' '}
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Accordion data={defaultExpandData} square toggle defaultExpandedId="basic1" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={6}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Multiple Expanded Accordion
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Accordion data={multipleExpandData} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={6}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Customize Accordion
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Accordion expandIcon={<ArrowDropDownIcon />} data={customContentData} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default UIAccordion;
