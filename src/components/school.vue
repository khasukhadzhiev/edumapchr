<template>
  <div class="school-content">
    <yandex-map class="map-conteiner-style" :settings="settings" :coords="[43.318368, 45.692419]" zoom="9" :controls="[]">
      <ymap-marker
        v-for="(school, index) in schoolList"
        :balloon-template="mapInfoCard(school)"
        :coords="school.coords.split(',')"
        :icon="{content: school.name}"
        :key="index"
        :marker-id="index"
      ></ymap-marker>
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
      },
      districtList:[],
    schoolList:[{
        id: 1,
        districtName:"Грозный",
        name: "СОШ №1",
        fullName:"СОШ №1",
        yearFoundation:1990,
        levelEducation:"Общее образование",
        address: "Грозный, б-р. С. Дудаева",
        city:"Грозный",
        schoolWas: "Была плохой",
        schoolBecame: "Стала хорошей",
        information: "Грозный3 фыва фывр аолфрыв оларфлоывр аолдфрыв оларлфодырв адлрфлоырв алорфылвора олфрыва олрфолырва олрфыловра олфрыволра фолрывола рфолдывра олрфыва",
        coords: "43.318366, 45.692421",
    }],
    };
  },
  computed: {
  },

  created() {},
  props: {},
  methods: {
    mapInfoCard: function (school) {
      return `
  <div class="row">
    <div class="col-md-4">
      <div class="image-container">
        <img src="image1.jpg" alt="Изображение 1" class="img-fluid">
        <img src="image2.jpg" alt="Изображение 2" class="img-fluid">
        <img src="image3.jpg" alt="Изображение 3" class="img-fluid">
      </div>
    </div>
    <div class="col-md-8">
      <div class="school-info">
        <h6>Наименование</h6>
        <p>${school.fullName}</p>
        <h6>Адрес</h6>
        <p>${school.address}</p>
        <h6>Начало изменений</h6>
        <p>${school.schoolWas}</p>
        <h6>Школа сегодня</h6>
        <p>${school.schoolBecame}</p>
        <p>${school.information}</p>
      </div>
    </div>
  </div>
      `;
    },
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

.row {
    background-color: #fff; /* Фоновый цвет контейнера */
    padding: 20px; /* Внутренний отступ для контейнера */
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Тень для контейнера */
    border-radius: 8px; /* Скругленные углы */
}

.image-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.img-fluid {
    max-width: 100%;
    height: auto;
    border-radius: 8px; /* Скругленные углы изображений */
}

.school-info {
    padding-left: 20px; /* Внутренний отступ для текстовой информации */
}

h6 {
    font-size: 16px;
    font-weight: bold;
    color: #333; /* Цвет заголовков */
}

p {
    font-size: 14px;
    color: #666; /* Цвет текста */
    margin-bottom: 10px;
}

/* Добавим градиентный фон для заголовков */
h6::before {
    content: "";
    display: block;
    width: 50px;
    height: 4px;
    background: linear-gradient(90deg, #007bff, #00c853); /* Градиентный фон */
    margin-bottom: 10px;
    border-radius: 2px;
}
</style>
  