<script>
  import {Line} from 'vue-chartjs'
  // import the component - chart you need

  export default ({
    extends: Line,
    mounted () {
      // Overwriting base render method with actual data.
      this.renderChart({
        labels: ['9AM', '11AM', '1PM', '3PM', '5PM', '7PM', '9PM'],
        datasets: [
          {
            label: 'Avg Bikes Available',
            backgroundColor: 'rgba(47, 198, 218, 0.3)',
            borderColor: '#6897e2',
            pointColor: 'black',
            data: [12, 7, 12, 18, 10, 6, 9]
          },
          {
            label: 'Avg Spaces Available',
            backgroundColor: 'rgb(255, 0, 0, 0.4)',
            borderColor: 'rgb(242, 111, 111)',
            data: [4, 20, 12, 23, 17, 6, 12]
          }
        ]
      },)
    }
  });
</script>
