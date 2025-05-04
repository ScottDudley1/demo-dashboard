import PropTypes from 'prop-types';
import React from 'react';
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

// ==============================|| COLLAPSIBLE TABLE - ROW ||============================== //

function Row({ row }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow
        sx={{
          '& .MuiTableRow-root': {
            borderBottom: 'unset'
          }
        }}
      >
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">{row.date}</TableCell>
        <TableCell align="right">{row.Spend}</TableCell>
        <TableCell align="right">{row.Impressions}</TableCell>
        <TableCell align="right">{row.Clicks}</TableCell>
        <TableCell align="right">{row.Conversions}</TableCell>
        <TableCell align="right">{row.Reach}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{ py: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="subtitle1" gutterBottom component="div">
                Details
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
                    {row.details && row.details.map((detail, idx) => (
                      <TableRow key={idx}>
                        <TableCell>{detail.Date}</TableCell>
                        <TableCell>{detail.Channel}</TableCell>
                        <TableCell>{detail['Campaign Name']}</TableCell>
                        <TableCell>{detail['Ad Set Name']}</TableCell>
                        <TableCell>{detail['Ad Name']}</TableCell>
                        <TableCell align="right">{detail.CPC}</TableCell>
                        <TableCell align="right">{detail.Spend}</TableCell>
                        <TableCell align="right">{detail.Impressions}</TableCell>
                        <TableCell align="right">{detail.Clicks}</TableCell>
                        <TableCell align="right">{detail.Conversions}</TableCell>
                        <TableCell align="right">{detail.Reach}</TableCell>
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

Row.propTypes = {
  row: PropTypes.shape({
    date: PropTypes.string.isRequired,
    Spend: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    Impressions: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    Clicks: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    Conversions: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    Reach: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    details: PropTypes.array
  }).isRequired
};

// ==============================|| COLLAPSIBLE TABLE ||============================== //

export default function CollapsibleTable({ rows }) {
  return (
    <Card sx={{ border: '2px solid #000', borderRadius: 3 }}>
      <Divider />
      <TableContainer>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Date</TableCell>
              <TableCell align="right">Spend</TableCell>
              <TableCell align="right">Impressions</TableCell>
              <TableCell align="right">Clicks</TableCell>
              <TableCell align="right">Conversions</TableCell>
              <TableCell align="right">Reach</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rows || []).map((row) => (
              <Row key={row.date} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
