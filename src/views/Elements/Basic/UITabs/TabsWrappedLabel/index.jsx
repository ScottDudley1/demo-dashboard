import PropTypes from 'prop-types';
import React from 'react';

//material-ui
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel({ children, value, index, ...other }) {
  return (
    <Box role="tabpanel" hidden={value !== index} id={`wrapped-tabpanel-${index}`} aria-labelledby={`wrapped-tab-${index}`} {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`
  };
}

// ==============================|| TABS WRAPPED LABEL ||============================== //

export default function TabsWrappedLabel() {
  const theme = useTheme();
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: theme.palette.background.paper }}>
      <AppBar position="static">
        <Tabs
          value={value}
          variant="scrollable"
          scrollButtons="auto"
          onChange={handleChange}
          textColor="inherit"
          aria-label="wrapped label tabs example"
        >
          <Tab value="one" label="New Arrivals in the Longest Text of Nonfiction" wrapped {...a11yProps('one')} />
          <Tab value="two" label="Item Two" {...a11yProps('two')} />
          <Tab value="three" label="Item Three" {...a11yProps('three')} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index="one">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
        cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on
        it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
        nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
      </TabPanel>
      <TabPanel value={value} index="two">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
        cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on
        it squid single-origin coffee nulla assumenda shoreditch et.
      </TabPanel>
      <TabPanel value={value} index="three">
        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
        lomo. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
        moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
      </TabPanel>
    </Box>
  );
}
