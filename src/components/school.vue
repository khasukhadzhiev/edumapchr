<template>
  <div class="school-content">
    <yandex-map class="map-conteiner-style" :settings="settings" :coords="[43.318368, 45.692419]" zoom="9" :controls="[]">
      <!--Markers-->
    </yandex-map>
  </div>
</template>
  
<script>
import { yandexMap } from 'vue-yandex-maps'

export default {
  components: { yandexMap },
  name: "school",
  data: function () {
    return {
      settings: {
        apiKey: 'fb20e460-c18a-4721-89de-766b001f95a4',
        lang: 'ru_RU',
        coordorder: 'latlong',
        enterprise: false,
        version: '2.1',
      }
    };
  },
  computed: {
  },

  created() {
  },
  props: {}
};
</script>
  
<style>
.school-content{
  border: 1px solid;
  margin: auto;
}

.map-conteiner-style{
  height: 65em;
}

.ymaps-2-1-79-map-copyrights-promo{
  display:none;
}
</style>
  