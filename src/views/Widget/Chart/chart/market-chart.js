import value from 'assets/scss/_themes-vars.module.scss';

const chartData = {
  options: {
    chart: {
      stacked: true,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      },
      sparkline: {
        enabled: true
      }
    },
    colors: [value.primary100, value.primaryDark, value.error],
    dataLabels: {
      enabled: false
    },

    plotOptions: {
      bar: {
        horizontal: false
      }
    },
    yaxis: {
      min: 0,
      max: 100
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '01/01/2011 GMT',
        '01/02/2011 GMT',
        '01/03/2011 GMT',
        '01/04/2011 GMT',
        '01/05/2011 GMT',
        '01/06/2011 GMT',
        '01/07/2011 GMT',
        '01/08/2011 GMT',
        '01/09/2011 GMT',
        '01/10/2011 GMT',
        '01/11/2011 GMT',
        '01/12/2011 GMT'
      ]
    },
    legend: {
      show: false
    },
    fill: {
      opacity: 1
    }
  },
  series: [
    {
      name: 'Youtube',
      data: [30, 35, 25, 37, 19, 33, 39, 27, 36, 43, 25, 35]
    },
    {
      name: 'Facebook',
      data: [13, 23, 20, 8, 13, 27, 13, 23, 20, 8, 13, 27]
    },
    {
      name: 'Twitter',
      data: [16, 22, 10, 20, 28, 19, 16, 22, 20, 15, 21, 19]
    }
  ]
};
export default chartData;
