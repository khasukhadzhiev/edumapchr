<template>
  <div class="school-content">
    <yandex-map class="map-conteiner-style" :settings="settings" :coords="[43.318368, 45.692419]" zoom="9"
      :options="mapOptions" :controls="[]">
      <ymap-marker v-for="(district, index) in districtList" marker-type="Polygon" :coords="district.geometry.coordinates"
        :marker-id="'marker-id' + index" :options="districtOptions" :hintContent="district.fullname"
        :key="index"></ymap-marker>

      <ymap-marker v-for="(school, index) in schoolList" :balloon-template="mapInfoCard(school)"
        :coords="school.coords.split(',')" :icon="{ content: school.name }" :key="index" :marker-id="index"></ymap-marker>
    </yandex-map>
  </div>
</template>
  
<script>
import { yandexMap } from 'vue-yandex-maps'
import districtList from '../assets/geojson/districtListmin.json'
import schoolList from '../assets/geojson/schoolList.json'

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
      },
      mapOptions: {
        maxZoom: 10,
        minZoom: 9,
        restrictMapArea: true,
        hasHint: true
      },
      districtList: districtList,
      schoolList:schoolList,
      districtOptions: {
        fillOpacity: 0.2,
        hasHint: true,
        fill: true,
        fillColor: "#007bff",
        openHintOnHover: true
      },
    };
  },
  computed: {
  },

  created() {
  },
  props: {},
  methods: {
    mapInfoCard: function (school) {
      return `
        <div class="baloon-content">
            <div class="school-info">
              <h6>Полное наименование</h6>
                <p>${school.fullName}</p>
              <h6>Краткое наименование</h6>
                <p>${school.name}</p>
              <h6>Дата создания ОУ</h6>
                <p>${school.createDate}</p>
              <h6>Дата государственной регистрации</h6>
                <p>${school.dateRegistration}</p>
              <h6>Уровни образования</h6>
                <p>${school.levelEducation}</p>
              <h6>Форма обучения</h6>
                <p>${school.educationForm}</p>
              <h6>Нормативный срок обучения</h6>
                <p>${school.educationPeriod}</p>
              <h6>Языки, на которых осуществляется обучение</h6>
                <p>${school.educationLanguage}</p>
              <h6>Юридический адрес</h6>
                <p>${school.legalAdress}</p>
              <h6>Полный фактический адрес</h6>
                <p>${school.factAdress}</p>
              <h6>Адрес официального сайта</h6>
                <p><a href="${school.sait}">${school.sait}</a></p>
            </div>
        </div>
      `;
    }
  }
};
</script>
  
<style>
.school-content {
  border: 1px solid;
  margin: auto;
}

.map-conteiner-style {
  height: 65em;
}

.ymaps-2-1-79-map-copyrights-promo {
  display: none;
}

.image-container {
  display: block;
  min-height: 100px;
}

.school-info {
  display: block;
  text-align: justify;
}

h6 {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  /* Цвет заголовков */
}

p {
  font-size: 14px;
  color: #666;
  /* Цвет текста */
  margin-bottom: 10px;
}

/* Добавим градиентный фон для заголовков */
h6::after {
  content: "";
  display: block;
  width: 20%;
  height: 4px;
  background: linear-gradient(90deg, #007bff, #00c853);
  /* Градиентный фон */
  margin-bottom: 10px;
  border-radius: 2px;
}

.district-hover {
  background-color: #00c853;
}
</style>
  