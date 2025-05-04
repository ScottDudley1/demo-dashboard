import React from 'react';

// material-ui
import { TreeItem, SimpleTreeView } from '@mui/x-tree-view';

const data = {
  id: 'root',
  name: 'Parent',
  children: [
    {
      id: '1',
      name: 'Child - 1'
    },
    {
      id: '3',
      name: 'Child - 3',
      children: [
        {
          id: '4',
          name: 'Child - 4'
        }
      ]
    }
  ]
};

// ==============================|| RECURSIVE TREE VIEW ||============================== //

export default function RecursiveTreeView() {
  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} itemId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
    </TreeItem>
  );

  return (
    <SimpleTreeView defaultExpandedItems={['root']} sx={{ height: 'auto', flexGrow: 1 }}>
      {renderTree(data)}
    </SimpleTreeView>
  );
}
