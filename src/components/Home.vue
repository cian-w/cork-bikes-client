<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div class="map">
      <gmap-map
        :center="{lat:51.898374, lng:-8.474151}"
        :zoom="15"
        map-type-id="roadmap"
        style="width: 100%; height: 550px"
      >

      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="false"
        :icon="{url:'./static/marker.png'}"
        @click="setStationInfo(index)"
      ></gmap-marker>

      </gmap-map>

    </div>

    <div class="selected-station">
      <div class="station-title">
        <b>{{ selectedStation.name }}</b>
      </div>
      <template v-if="hasSelected">
        <div class="station-info">
          <div class="station-info-bikesavailable">
            <span class="station-info-value">{{selectedStation.bikesAvailable}}</span><br>
            <span class="station-info-name"><b>Bikes Available</b></span>
          </div>

          <div class="station-info-docssavailable">
            <span class="station-info-value">{{selectedStation.docksAvailable}}</span><br>
            <span class="station-info-name"><b>Spaces Available</b></span>
          </div>

          <div class="chart">
            <div class="statistics-title">
              {{setDay()}}
            </div>
            <line-chart
               :avgBikes="this.bikeStats.avgBikes"
               :avgSpaces="this.bikeStats.avgSpaces"
               :width="400"
               :height="200"
               >
            </line-chart>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="instructions">
          Hey &#128075; <br><br>
          Each marker <img v-bind:src="'./static/marker.png'" /> on the map represents a station. <br><br>
          Please click on one to show the stations information &#128202;
        </div>
      </template>
    </div>

    <div class="cork-info">
      <img v-bind:src="'./static/icon-station.png'"><span v-text="numStations"></span><img v-bind:src="'./static/icon-bike.png'"><span v-text="numBikes"></span>
    </div>
  </div>

</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps';
import Chart from './Chart'

// import markers from '@/static/markers';

export default {
  name: 'Main',
  components: {
    'line-chart': Chart
  },

  data () {
    return{
      msg: 'Cork Bikes Real-Time App',
      selectedStation: {
        name: 'Station Information',
      },
      numStations: '31 Stations',
      numBikes: '330 Bikes',
      hasSelected: false,
      stationId: 0,
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      day: '',
      dayIndex: '',
      bikeStats: {
        avgBikes: [0],
        avgSpaces: [0]
      },
      markers: [{
          position: {id: 2001, lat: 51.893604, lng: -8.494174}
        }, {
          position: {id: 2002, lat: 51.89555327, lng: -8.49341266}
        }, {
          position: {id: 2003, lat: 51.89580557, lng: -8.4891363}
        }, {
          position: {id: 2004, lat: 51.89718531, lng: -8.48458467}
        }, {
          position: {id: 2005, lat: 51.89911495, lng: -8.48225676}
        }, {
          position: {id: 2006, lat: 51.89710212, lng: -8.48196155}
        }, {
          position: {id: 2007, lat: 51.901632,   lng: -8.477385}
        }, {
          position: {id: 2008, lat: 51.89974733, lng: -8.47844005}
        }, {
          position: {id: 2009, lat: 51.8984737, lng: -8.47977966}
        }, {
          position: {id: 2010, lat: 51.896492, lng: -8.48004}
        }, {
          position: {id: 2011, lat: 51.89468826, lng: -8.4790268}
        }, {
          position: {id: 2012, lat: 51.901054, lng: -8.473342}
        }, {
          position: {id: 2013, lat: 51.9, lng: -8.477}
        }, {
          position: {id: 2014, lat: 51.898144, lng: -8.465735}
        }, {
          position: {id: 2015, lat: 51.89850471, lng: -8.47261531}
        }, {
          position: {id: 2016, lat: 51.896946053069, lng: -8.4768955316474}
        }, {
          position: {id: 2017, lat: 51.897480231758, lng: -8.475369773813}
        }, {
          position: {id: 2018, lat: 51.896194699269, lng: -8.4734758827914}
        }, {
          position: {id: 2019, lat: 51.895494391259, lng: -8.4758651442905}
        }, {
          position: {id: 2020, lat: 51.90155283, lng: -8.47056736}
        }, {
          position: {id: 2021, lat: 51.900208122145, lng: -8.4727046638806}
        }, {
          position: {id: 2022, lat: 51.896838555161, lng: -8.4698998276223}
        }, {
          position: {id: 2023, lat: 51.8953, lng: -8.469797}
        }, {
          position: {id: 2024, lat: 51.89967344, lng: -8.4706278}
        }, {
          position: {id: 2025, lat: 51.896317075055, lng: -8.4680925216605}
        }, {
          position: {id: 2026, lat: 51.900405, lng: -8.465153}
        }, {
          position: {id: 2027, lat: 51.89951532, lng: -8.46695074}
        }, {
          position: {id: 2029, lat: 51.897, lng: -8.466}
        }, {
          position: {id: 2030, lat: 51.90137057, lng: -8.46411816}
        }, {
          position: {id: 2031, lat: 51.898481869187, lng: -8.4656293317754}
        }, {
          position: {id: 2032, lat: 51.90196195, lng: -8.45821512}
      }]
    }
  },

  methods: {

      // Set the selected station information.
      setStationInfo(index) {
        this.stationId = this.markers[index].position.id;

        fetch(`http://46.101.53.169:3000/station/${this.stationId}`,{
          method: 'GET'
        }).then((response) => {
          return response.json();
        }).then((data) => {
          this.selectedStation = data;
          this.hasSelected = true;
        });

        this.setStationStats()
      },

      // Set the day to display for statistics title.
      setDay(){
        this.dayIndex = new Date().getDay();
        this.day = this.days[this.dayIndex];

        return this.day + "'s Statistics"
      },

      // Set the statistics.
      setStationStats(){
         fetch(`http://46.101.53.169:3000/station/stats/${this.stationId}`,{
           method: 'GET'
         }).then((response) => {
           return response.json();
         }).then((data) => {
           this.bikeStats.avgBikes = data.avgBikes;
           this.bikeStats.avgSpaces = data.avgSpaces;
         });
      }
  }
}


</script>

<style scoped>

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.map {
  position: relative;
  top: 20px;
  left: 45%;
  width: 50%;
  height: 550px;
  -webkit-box-shadow: 0px 0px 13px 0px rgba(184,175,184,1);
  -moz-box-shadow: 0px 0px 13px 0px rgba(184,175,184,1);
  box-shadow: 0px 0px 13px 0px rgba(184,175,184,1);
}

.selected-station {
  position: relative;
  left: 5%;
  top: -530px;
  height: 550px;
  width: 35%;
  -webkit-box-shadow: 0px 2px 12px 0px rgba(186,186,186,1);
  -moz-box-shadow: 0px 2px 12px 0px rgba(186,186,186,1);
  box-shadow: 0px 2px 12px 0px rgba(186,186,186,1);
}

.station-title {
  position: relative;
  top: 40px;
  font-size: 26px;
}

.station-info {
  position: relative;
  top: 70px;
  left: 13%;
  font-size: 19px;
  color: #817e81;
}

.station-info-bikesavailable {
  float: left;
}

.station-info-docksavailable {
  float: right;
}

.station-info-value {
  font-size: 34px;
  color: #000000;
}

.instructions {
  position: relative;
  top: 160px;
  font-size: 20px;
  margin-left: 10px;
  margin-right: 10px;
}

.chart {
  position: relative;
  left: -10%;
  top: 50px;
  height: 350px;
  width: 94%;
}

.cork-info {
  position: relative;
  top: -460px;
  font-size: 26px;
}

.cork-info span {
  margin-right: 40px;
}

.cork-info img {
  height: 85px;
  width: 85px;
  vertical-align: middle;
  margin-left: 10px;
  margin-right: 5px;
}
</style>
