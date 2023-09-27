<template>
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
</template>
  
<script>
export default {
  name: "university",
  data: function () {
    return {
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
.row {
  background-color: #fff;
  /* Фоновый цвет контейнера */
  padding: 20px;
  /* Внутренний отступ для контейнера */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  /* Тень для контейнера */
  border-radius: 8px;
  /* Скругленные углы */
}

.image-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.img-fluid {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  /* Скругленные углы изображений */
}

.school-info {
  padding-left: 20px;
  /* Внутренний отступ для текстовой информации */
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
h6::before {
  content: "";
  display: block;
  width: 50px;
  height: 4px;
  background: linear-gradient(90deg, #007bff, #00c853);
  /* Градиентный фон */
  margin-bottom: 10px;
  border-radius: 2px;
}</style>
  