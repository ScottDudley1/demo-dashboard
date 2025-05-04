import React from 'react';

// material-ui
import { TreeView, TreeItem } from '@mui/x-tree-view';

// ==============================|| CONTROLLED TREE VIEW ||============================== //

export default function ControlledTreeView() {
  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  const handleToggle = (event, itemIds) => {
    setExpanded(itemIds);
  };

  const handleSelect = (event, itemIds) => {
    setSelected(itemIds);
  };

  return (
    <TreeView
      sx={{ height: 'auto', flexGrow: 1 }}
      expanded={expanded}
      selected={selected}
      onItemSelectionToggle={handleToggle}
      onSelectedItemsChange={handleSelect}
    >
      <TreeItem itemId="1" label="Applications">
        <TreeItem itemId="2" label="Calendar" />
        <TreeItem itemId="3" label="Chrome" />
        <TreeItem itemId="4" label="Webstorm" />
      </TreeItem>
      <TreeItem itemId="5" label="Documents">
        <TreeItem itemId="6" label="Material-UI">
          <TreeItem itemId="7" label="src">
            <TreeItem itemId="8" label="index.js" />
            <TreeItem itemId="9" label="tree-view.js" />
          </TreeItem>
        </TreeItem>
      </TreeItem>
    </TreeView>
  );
}
