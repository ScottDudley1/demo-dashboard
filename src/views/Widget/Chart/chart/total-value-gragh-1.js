import value from 'assets/scss/_themes-vars.module.scss';

const chartData = {
  type: 'area',
  height: 100,
  options: {
    chart: {
      stacked: true,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: [value.primaryDark],
    fill: {
      type: 'solid',
      opacity: 0.4
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    yaxis: {
      min: 0,
      max: 30
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
          formatter: () => 'Total Sales'
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
      data: [20, 10, 18, 12, 25, 10, 20]
    }
  ]
};

export default chartData;
