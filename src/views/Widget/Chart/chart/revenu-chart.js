import value from 'assets/scss/_themes-vars.module.scss';
// eslint-disable-next-line
export default {
  height: 228,
  type: 'bar',
  options: {
    chart: {
      stacked: false,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadius: 4
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['Youtube', 'Facebook', 'Twitter'],
      axisBorder: {
        show: true
      },
      axisTicks: {
        show: true
      }
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return '$' + value.toLocaleString();
        }
      }
    },
    legend: {
      show: false
    },
    colors: [value.primary]
  },
  series: [{
    name: 'Sales',
    data: [1258, 975, 500]
  }]
};
