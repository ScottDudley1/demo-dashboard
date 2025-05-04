import React from 'react';
import CollapsibleTable from '../Tables/CollapsibleTable';

const GoogleAnalyticsTable = ({ rows }) => (
  <div style={{ marginTop: 32 }}>
    <CollapsibleTable rows={rows} />
  </div>
);

export default GoogleAnalyticsTable; 