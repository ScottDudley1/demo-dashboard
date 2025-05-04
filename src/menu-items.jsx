// src/menu-items.jsx

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';

const icons = {
  HomeOutlinedIcon,
  InsertChartOutlinedIcon,
  ShowChartOutlinedIcon
};

// ==============================|| MENU ITEMS ||============================== //

export default {
  items: [
    {
      id: 'main-pages',
      title: 'Mine My Data',
      caption: 'Main Navigation',
      type: 'group',
      children: [
        {
          id: 'dashboard',
          title: <FormattedMessage id="Summary" />,
          type: 'item',
          url: '/summary',
          icon: icons.HomeOutlinedIcon
        },
        {
          id: 'platform-metrics',
          title: <FormattedMessage id="Platform Metrics" />,
          type: 'item',
          url: '/platform-metrics',
          icon: icons.InsertChartOutlinedIcon
        },
        {
          id: 'google-analytics',
          title: <FormattedMessage id="Google Analytics" />,
          type: 'item',
          url: '/google-analytics',
          icon: icons.ShowChartOutlinedIcon
        }
      ]
    }
  ]
};