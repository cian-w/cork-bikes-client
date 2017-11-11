<script>
  import {Line} from 'vue-chartjs'
  // import the component - chart you need

  export default ({
    extends: Line,
    props: ['data'],
    methods: {
      renderLineChart() {
        console.log('rendering');
        this.renderChart({
          labels: ['9AM', '11AM', '1PM', '3PM', '5PM', '7PM', '9PM'],
          datasets: [
            {
              label: 'Avg Bikes Available',
              backgroundColor: 'rgba(47, 198, 218, 0.3)',
              borderColor: '#6897e2',
              pointColor: 'black',
              data: this.data
            },
            {
              label: 'Avg Spaces Available',
              backgroundColor: 'rgb(255, 0, 0, 0.4)',
              borderColor: 'rgb(242, 111, 111)',
              data: this.data
            }
          ]
        })
      }
    },
    mounted () {
      this.renderLineChart();
    },
    watch: {
      data() {
        this.renderLineChart();
      }
    },
  });
</script>
