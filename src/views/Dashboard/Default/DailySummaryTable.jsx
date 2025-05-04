import React from 'react';
import { Card, CardHeader, Divider, Grid, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { gridSpacing } from 'config.js';

const DailySummaryTable = ({ data }) => {
  const safeData = Array.isArray(data) ? data : [];

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Card>
          <CardContent className="p-0">
            <TableContainer>
              <Table sx={{ minWidth: 350 }} aria-label="daily summary table">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell align="right">Sales</TableCell>
                    <TableCell align="right">Leads</TableCell>
                    <TableCell align="right">Downloads</TableCell>
                    <TableCell align="right">Phone Enquiries</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {safeData.map((row, idx) => (
                    <TableRow key={row.date}>
                      <TableCell>{row.date}</TableCell>
                      <TableCell align="right">{row.sales}</TableCell>
                      <TableCell align="right">{row.leads}</TableCell>
                      <TableCell align="right">{row.downloads}</TableCell>
                      <TableCell align="right">{row.phoneEnquiries}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default DailySummaryTable;