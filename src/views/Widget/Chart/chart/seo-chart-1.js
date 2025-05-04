import value from 'assets/scss/_themes-vars.module.scss';

const chartData = {
  type: 'area',
  height: 60,
  options: {
    stacked: true,
    chart: {
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: [value.primary],
    fill: {
      type: 'solid',
      opacity: 0.3
    },
    markers: {
      size: 2,
      opacity: 0.9,
      colors: value.primary,
      strokeColor: value.primary,
      strokeWidth: 2,
      hover: {
        size: 4
      }
    },
    stroke: {
      curve: 'straight',
      width: 3
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: () => 'Visits :'
        }
      },
      marker: {
        show: false
      }
    }
  },
  series: [
    {
      name: 'series1',
      data: [9, 66, 41, 89, 63, 25, 44, 12, 36, 20, 54, 25, 9]
    }
  ]
};

export default chartData;
