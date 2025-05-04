import value from 'assets/scss/_themes-vars.module.scss';

const chartData = {
  height: 224,
  type: 'bar',
  options: {
    chart: {
      sparkline: {
        enabled: true
      }
    },
    colors: [value.primary, value.success, value.error, value.warning],
    plotOptions: {
      bar: {
        columnWidth: '55%',
        distributed: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 0
    },
    xaxis: {
      categories: ['Desktop', 'Tablet', 'Mobile']
    }
  },
  series: [
    {
      name: 'Requests',
      data: [66.6, 29.7, 32.8, 50]
    }
  ]
};

export default chartData;
