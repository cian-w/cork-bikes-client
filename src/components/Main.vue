<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div class="map">
      <gmap-map
        :center="{lat:51.8969, lng:-8.4863}"
        :zoom="12"
        map-type-id="roadmap"
        style="width: 100%; height: 500px"
      ></gmap-map>
    </div>

    <div class="starred">
      <div class="starred-title">My Favourite Stations</div>
    </div>
  </div>

</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps';

export default {
  name: 'Main',
  data () {
    return {
      msg: 'Cork Bikes Real-Time App'
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
  top: -496px;
  height: 500px;
  width: 25%;
  -webkit-box-shadow: 0px 2px 12px 0px rgba(186,186,186,1);
  -moz-box-shadow: 0px 2px 12px 0px rgba(186,186,186,1);
  box-shadow: 0px 2px 12px 0px rgba(186,186,186,1);
}

.starred-title {
  font-size: 20px;
}
</style>
