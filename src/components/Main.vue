<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div class="map">
      <gmap-map
        :center="{lat:51.898374, lng:-8.474151}"
        :zoom="15"
        map-type-id="roadmap"
        style="width: 100%; height: 500px"
      >

      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="false"
        :icon="{url:'./static/marker.png'}"
        @click="center=m.position"
      ></gmap-marker>

      </gmap-map>

    </div>

    <div class="starred">
      <div class="starred-title">{{ selectedStationName }}</div>
    </div>

    <div class="cork-info">
      <span><img v-bind:src="'./static/icon-station.png'">31 Stations</span><span><img v-bind:src="'./static/icon-bike.png'">330 Bikes</span>
    </div>
  </div>

</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps';

export default {
  name: 'Main',
  data () {
    return{
      msg: 'Cork Bikes Real-Time App',
      selectedStationName: 'Station Information',
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

body {
  overflow: hidden;
}

.map {
  position: relative;
  top: 20px;
  left: 10%;
  width: 50%;
  height: 500px;
  -webkit-box-shadow: 0px 0px 13px 0px rgba(184,175,184,1);
  -moz-box-shadow: 0px 0px 13px 0px rgba(184,175,184,1);
  box-shadow: 0px 0px 13px 0px rgba(184,175,184,1);
}

.starred {
  position: relative;
  left: 65%;
  top: -480px;
  height: 500px;
  width: 25%;
  -webkit-box-shadow: 0px 2px 12px 0px rgba(186,186,186,1);
  -moz-box-shadow: 0px 2px 12px 0px rgba(186,186,186,1);
  box-shadow: 0px 2px 12px 0px rgba(186,186,186,1);
}

.starred-title {
  font-size: 20px;
}

.cork-info {
  position: relative;
  top: -400px;
}

.cork-info span {
  margin-left: 15px;
}

.cork-info img {
  height: 75px;
  width: 75px;
  vertical-align: middle;
  margin-right: 5px;
}
</style>
