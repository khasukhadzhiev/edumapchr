<template>
  <div class="college-content">
    <yandex-map class="map-conteiner-style" :settings="settings" :coords="[43.318368, 45.692419]" zoom="9"
      :options="mapOptions" :controls="[]">
      <ymap-marker v-for="(district, index) in districtList" marker-type="Polygon" :coords="district.geometry.coordinates"
        :marker-id="'marker-id' + index" :options="districtOptions" :hintContent="district.fullname"
        :key="index"></ymap-marker>

      <ymap-marker v-for="(college, index) in collegeList" :balloon-template="mapInfoCard(college)"
        :coords="college.coords.split(',')" :icon="{ content: college.name }" :key="index" :marker-id="index"></ymap-marker>
    </yandex-map>
  </div>
</template>
  
<script>
import { yandexMap } from 'vue-yandex-maps'
import districtList from '../assets/geojson/districtListmin.json'
import collegeList from '../assets/geojson/collegeList.json'

export default {
  components: { yandexMap },
  name: "college",
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
      collegeList:collegeList,
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
    mapInfoCard: function (college) {
      return `
        <div class="baloon-content">
            <div class="college-info">
              <h6>Полное наименование</h6>
                <p>${college.fullName}</p>
              <h6>Краткое наименование</h6>
                <p>${college.name}</p>
              <h6>Дата создания ОУ</h6>
                <p>${college.createDate}</p>
              <h6>Дата государственной регистрации</h6>
                <p>${college.dateRegistration}</p>
              <h6>Уровни образования</h6>
                <p>${college.levelEducation}</p>
              <h6>Форма обучения</h6>
                <p>${college.educationForm}</p>
              <h6>Нормативный срок обучения</h6>
                <p>${college.educationPeriod}</p>
              <h6>Языки, на которых осуществляется обучение</h6>
                <p>${college.educationLanguage}</p>
              <h6>Юридический адрес</h6>
                <p>${college.legalAdress}</p>
              <h6>Полный фактический адрес</h6>
                <p>${college.factAdress}</p>
              <h6>Адрес официального сайта</h6>
                <p><a href="${college.sait}">${college.sait}</a></p>
            </div>
        </div>
      `;
    }
  }
};
</script>
  
<style>
.college-content {
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

.college-info {
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
  