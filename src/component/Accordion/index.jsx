import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

// material-ui
import { Box } from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';

// assets
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// ==============================|| ACCORDION ||============================== //

const Accordion = ({ expandIcon, square, data, toggle, defaultExpandedId }) => {
  const [expanded, setExpanded] = React.useState(null);

  const handleChange = (panel) => (event, newExpanded) => {
    toggle && setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    setExpanded(defaultExpandedId);
  }, [defaultExpandedId]);

  return (
    <Box sx={{ width: '100%' }}>
      {data &&
        data.map((item) => (
          <MuiAccordion
            key={item.id}
            defaultExpanded={!item.disabled && item.defaultExpand}
            expanded={(!toggle && !item.disabled && item.expanded) || (toggle && expanded === item.id)}
            disabled={item.disabled}
            square={square}
            onChange={handleChange(item.id)}
          >
            <MuiAccordionSummary expandIcon={expandIcon || expandIcon === false ? expandIcon : <ExpandMoreIcon />}>
              {item.title}
            </MuiAccordionSummary>
            <MuiAccordionDetails>{item.content}</MuiAccordionDetails>
          </MuiAccordion>
        ))}
    </Box>
  );
};

Accordion.propTypes = {
  expandIcon: PropTypes.object,
  square: PropTypes.bool,
  data: PropTypes.array,
  toggle: PropTypes.bool,
  defaultExpandedId: PropTypes.string
};

export default Accordion;
