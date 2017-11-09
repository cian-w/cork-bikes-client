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
            backgroundColor: '#f87979',
            borderColor: 'rgba(179,181,198,1)',
            data: [12, 20, 12, 18, 10, 6, 9]
          },
          {
            label: 'Avg Spaces Available',
            backgroundColor: '#1C6675',
            data: [4, 20, 12, 23, 17, 6, 12]
          }
        ]
      },)
    }
  });
</script>
