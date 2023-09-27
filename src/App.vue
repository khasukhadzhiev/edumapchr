<template>
  <div id="app">

      <div class="content">
        <div class="logo">
          <img src="./assets/mon.png" height="90" alt="" loading="lazy" />
        </div>
        <div>
          <span class="header-text">ИНТЕРАКТИВНАЯ КАРТА ОБРАЗОВАТЕЛЬНЫХ УЧРЕЖДЕНИЙ ЧЕЧЕНСКОЙ РЕСПУБЛИКИ</span>
        </div>
        <div class="nav-item-list">
          <router-link :to="routeEnum.school" class="link">Школы</router-link>
          <router-link :to="routeEnum.college" class="link">Колледж</router-link>
          <router-link :to="routeEnum.university" class="link">ВУЗ</router-link>
        </div>
      </div>

    <router-view></router-view>
  </div>
</template>

<script>

import { RouteEnum } from "./enums/routeEnum";

export default {
  name: 'App',
  components: {},
  data: function () {
    return {
      routeEnum: RouteEnum
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.content {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #c1d6eb35;
  background-color: #F0F1F5; /* Задайте цвет текста по вашему усмотрению */
}

/* Стили для логотипа */
.logo img {
  height: 70px; /* Задайте высоту логотипа по вашему усмотрению */
}

/* Стили для навигационных элементов */
.nav-item-list {
  display: flex;
  text-align: center;
}

.link {
  text-decoration: none;
  text-align: center;
  width: 100px;
  padding: 5px;
  font-weight: 700;
  color: #112233;
  margin-right: 20px; /* Регулируйте отступы между ссылками по вашему усмотрению */
  transition-duration: .3s;
}
.link:hover {
  transition-duration: .3s;
  background-color: #44BBFF;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  margin-right: 20px; /* Регулируйте отступы между ссылками по вашему усмотрению */
}

.header-text{
  font-weight: 700;
  font-size: large;
}
</style>
