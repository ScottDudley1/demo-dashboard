import value from 'assets/scss/_themes-vars.module.scss';

const chartData = {
  height: 260,
  type: 'pie',
  options: {
    labels: ['extremely Satisfied', 'Satisfied', 'Poor', 'Very Poor'],
    legend: {
      show: true,
      position: 'bottom',
      fontFamily: 'inherit',
      labels: {
        colors: 'inherit'
      }
    },
    dataLabels: {
      enabled: true,
      dropShadow: {
        enabled: false
      }
    },
    theme: {
      monochrome: {
        enabled: true,
        color: value.warning
      }
    }
  },
  series: [66, 50, 40, 30]
};

export default chartData;
