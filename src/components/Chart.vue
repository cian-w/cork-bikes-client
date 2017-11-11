<script>
  import {Line} from 'vue-chartjs'
  // import the component - chart you need

  export default ({
    extends: Line,
    props: ['avgBikes', 'avgSpaces'],
    methods: {
      renderLineChart() {
        this.renderChart({
          labels: ['9AM', '11AM', '1PM', '3PM', '5PM', '7PM', '9PM'],
          datasets: [
            {
              label: 'Avg Bikes Available',
              backgroundColor: 'rgba(47, 198, 218, 0.4)',
              borderColor: '#6897e2',
              data: this.avgBikes
            },
            {
              label: 'Avg Spaces Available',
              backgroundColor: 'rgb(196, 13, 47)',
              borderColor: 'rgb(242, 111, 111)',
              data: this.avgSpaces
            }
          ]
        })
      }
    },
    mounted () {
      this.renderLineChart();
    },
    watch: {
      avgBikes() {
        this.renderLineChart();
        deep: true
      }
    },
  });
</script>
