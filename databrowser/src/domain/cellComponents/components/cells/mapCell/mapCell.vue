<template>
  <div v-if="pos" id="mymap" style="height: 50vh"></div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, withDefaults, toRefs } from 'vue';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';

const props = withDefaults(
  defineProps<{
    pos?: {
      Gpstype: string;
      Altitude: number;
      Latitude: number;
      Longitude: number;
      AltitudeUnitofMeasure: string;
    };
  }>(),
  {
    pos: undefined,
  }
);

const { Latitude, Longitude } = toRefs(props.pos);

// let lat = props.pos.Latitude;
// let lon = props.pos.Longitude;
let mymap: leaflet.Map;

onMounted(() => {
  mymap = leaflet.map('mymap').setView([Latitude.value, Longitude.value], 13);
  leaflet.marker([Latitude.value, Longitude.value]).addTo(mymap);

  leaflet
    .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors',
    })
    .addTo(mymap);
});
</script>
