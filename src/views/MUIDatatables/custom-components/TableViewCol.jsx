import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

// ==============================|| TABLE VIEW COLUMN ||============================== //

const TableViewCol = ({ columns, options, components = {}, onColumnUpdate, updateColumns }) => {
  const theme = useTheme();
  const textLabels = options.textLabels.viewColumns;
  const CheckboxComponent = components.Checkbox || Checkbox;

  const handleColChange = (index) => {
    onColumnUpdate(index);
  };

  const selectAll = () => {
    var newColumns = columns.map((col) => {
      var newCol = Object.assign({}, col);
      newCol.display = 'true';
      return newCol;
    });
    updateColumns(newColumns);
  };

  return (
    <FormControl component={'fieldset'} sx={{ py: 2, px: 3, fontFamily: `'Poppins', sans-serif` }} aria-label={textLabels.titleAria}>
      <Typography
        variant="caption"
        sx={{ marginLeft: -1, mr: 3, fontSize: '14px', color: theme.palette.text.secondary, textAlign: 'left', fontWeight: 500 }}
      >
        {textLabels.title}
      </Typography>
      <FormGroup sx={{ mt: 1 }}>
        <Button onClick={selectAll}>Show All</Button>
        {columns.map((column, index) => {
          return (
            column.display !== 'excluded' &&
            column.viewColumns !== false && (
              <FormControlLabel
                key={index}
                sx={{ fontSize: '15px', ml: 1, color: theme.palette.text.primary }}
                control={
                  <CheckboxComponent
                    color="primary"
                    sx={{ p: 0, width: 32, height: 32 }}
                    onChange={() => handleColChange(index)}
                    checked={column.display === 'true'}
                    value={column.name}
                  />
                }
                label={column.label}
              />
            )
          );
        })}
      </FormGroup>
    </FormControl>
  );
};

TableViewCol.propTypes = {
  /** Columns used to describe table */
  columns: PropTypes.array.isRequired,
  /** Options used to describe table */
  options: PropTypes.object.isRequired,
  /** Callback to trigger View column update */
  onColumnUpdate: PropTypes.func,
  /** Extend the style applied to components */
  classes: PropTypes.object,
  components: PropTypes.object,
  updateColumns: PropTypes.func
};

export default TableViewCol;
