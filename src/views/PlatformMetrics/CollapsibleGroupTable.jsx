import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CardHeader from '@mui/material/CardHeader';

function aggregateGroup(rows, columns, groupBy) {
  // Aggregate numeric columns for the group
  const agg = { ...rows[0] };
  columns.forEach(col => {
    if (col.key !== groupBy && typeof rows[0][col.key] === 'number') {
      agg[col.key] = rows.reduce((sum, r) => sum + (parseFloat(r[col.key]) || 0), 0);
    }
  });
  return agg;
}

function Row({ group, groupRows, columns, groupBy, groupLabel }) {
  const [open, setOpen] = useState(false);
  const agg = aggregateGroup(groupRows, columns, groupBy);
  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">{group}</TableCell>
        {columns.filter(col => col.key !== groupBy).map(col => (
          <TableCell key={col.key} align="right">{agg[col.key]}</TableCell>
        ))}
      </TableRow>
      <TableRow>
        <TableCell sx={{ py: 0 }} colSpan={columns.length + 1}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="subtitle1" gutterBottom component="div">
                {groupLabel} Details
              </Typography>
              <TableContainer>
                <Table size="small" aria-label="details">
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Channel</TableCell>
                      <TableCell>Campaign Name</TableCell>
                      <TableCell>Ad Set Name</TableCell>
                      <TableCell>Ad Name</TableCell>
                      <TableCell align="right">CPC</TableCell>
                      <TableCell align="right">Spend</TableCell>
                      <TableCell align="right">Impressions</TableCell>
                      <TableCell align="right">Clicks</TableCell>
                      <TableCell align="right">Conversions</TableCell>
                      <TableCell align="right">Reach</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {groupRows.map((row, idx) => (
                      <TableRow key={idx}>
                        <TableCell>{row.Date}</TableCell>
                        <TableCell>{row.Channel}</TableCell>
                        <TableCell>{row['Campaign Name']}</TableCell>
                        <TableCell>{row['Ad Set Name']}</TableCell>
                        <TableCell>{row['Ad Name']}</TableCell>
                        <TableCell align="right">{row.CPC}</TableCell>
                        <TableCell align="right">{row.Spend}</TableCell>
                        <TableCell align="right">{row.Impressions}</TableCell>
                        <TableCell align="right">{row.Clicks}</TableCell>
                        <TableCell align="right">{row.Conversions}</TableCell>
                        <TableCell align="right">{row.Reach}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

const CollapsibleGroupTable = ({ data, groupBy, groupLabel, columns }) => {
  // Group data by groupBy key
  const groups = {};
  data.forEach(row => {
    const key = row[groupBy] || 'Unknown';
    if (!groups[key]) groups[key] = [];
    groups[key].push(row);
  });
  return (
    <Card sx={{ border: '2px solid black', borderRadius: 3, mb: 3 }}>
      <CardHeader
        title={<span style={{ color: 'white', textAlign: 'center', width: '100%', display: 'block', fontWeight: 700 }}>{groupLabel}</span>}
        sx={{ backgroundColor: 'black', textAlign: 'center', borderTopLeftRadius: 12, borderTopRightRadius: 12, p: 2 }}
      />
      <Divider />
      <TableContainer>
        <Table aria-label="collapsible group table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>{groupLabel}</TableCell>
              {columns.filter(col => col.key !== groupBy).map(col => (
                <TableCell key={col.key} align="right">{col.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(groups).map(([group, groupRows]) => (
              <Row
                key={group}
                group={group}
                groupRows={groupRows}
                columns={columns}
                groupBy={groupBy}
                groupLabel={groupLabel}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

CollapsibleGroupTable.propTypes = {
  data: PropTypes.array.isRequired,
  groupBy: PropTypes.string.isRequired,
  groupLabel: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape({ key: PropTypes.string, label: PropTypes.string })).isRequired
};

export default CollapsibleGroupTable; 